import React, { createContext, useContext, useReducer, useState } from "react";
import { data } from "../data/data";
import { toast } from "react-toastify";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [limit, setLimit] = useState(0);
  const initialState = {
    moviesData: data,
    cartData: [],
    scrollData: [],
    loading: false,
    totalLength: data.length,
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        toast.success(`${action.payload.title} movie added to cart!`);
        return { ...state, cartData: [...state.cartData, action.payload] };

      case "REMOVE_FROM_CART":
        const removeMovie = state.cartData.filter(
          ({ id }) => id !== action.payload.id
        );
        toast.error(`${action.payload.title} movie removed from cart!`);
        return { ...state, cartData: removeMovie };

      case "LOAD_DATA":
        const data = state.moviesData.slice(limit, limit + 10);
        return { ...state, scrollData: [...state.scrollData, ...data] };

      case "CHECKOUT":
        toast.success(`Payment successfull!`);
        return { ...state, cartData: [] };

      case "LOADING":
        return { ...state, loading: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch, limit, setLimit }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext);
