import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import ModalProvider from "../modalProvider/ModalProvider";
import { useData } from "../../context/DataProvider";
import SecondaryBtn from "../secondaryBtn/SecondaryBtn";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

const style = {
  position: "absolute",
  top: "7%",
  right: "6%",
  width: 280,
  bgcolor: "#18202b",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

const CartModal = ({ open, handleClose }) => {
  const { state, dispatch } = useData();
  const totalCost = state.cartData.reduce((acc, obj) => obj.price + acc, 0);
  return (
    <ModalProvider open={open} handleClose={handleClose} style={style}>
      {state.cartData.length > 0 ? (
        <div className="text-textMedium">
          <ul>
            {state.cartData.map((movie) => (
              <li key={movie.id} className="">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={movie.thumbnailVr}
                      className="w-7 h-9 object-cover rounded-sm"
                    />
                    <div>
                      <p>{movie.title}</p>
                      <p className="text-xs">${movie.price}</p>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: movie })
                    }
                  >
                    <RxCross2 className="text-gray-600 hover:text-gray-400 active:text-gray-600 cursor-pointer" />
                  </div>
                </div>
                <hr className="border-gray-700 my-2" />
              </li>
            ))}
          </ul>
          <div className="py-1">
            <div className="flex justify-between text-xs">
              <p>Number of movies</p>
              <p>Total Cost</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>{state.cartData.length}</p>
              <p className="text-textLight">${totalCost.toFixed(2)}</p>
            </div>
          </div>
          <PrimaryBtn
            style="py-2 my-3"
            clickHandler={(e) => {
              handleClose(e);
              dispatch({ type: "CHECKOUT" });
            }}
          >
            <AiOutlineShoppingCart />
            <span className="text-xs font-bold">Checkout</span>
          </PrimaryBtn>
          <SecondaryBtn clickHandler={handleClose}>
            Continue Shopping
          </SecondaryBtn>
        </div>
      ) : (
        <div className="text-textMedium text-sm">
          <p className="pb-4">Your cart is empty!! Add movies now.</p>
          <SecondaryBtn clickHandler={handleClose}>
            Continue Shopping
          </SecondaryBtn>
        </div>
      )}
    </ModalProvider>
  );
};

export default CartModal;
