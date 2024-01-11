import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import DetailModal from "../modal/DetailModal";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import SecondaryBtn from "../secondaryBtn/SecondaryBtn";
import { useData } from "../../context/DataProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#18202b",
  boxShadow: 24,
  borderRadius: 1,
};

const Card = ({ movie }) => {
  const { state, dispatch } = useData();
  const { id, title, thumbnailVr, rating, price, genre } = movie;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const isAddedToCart = state?.cartData.find((movie) => movie?.id === id);

  return (
    <div
      className="bg-cardBg text-textLight rounded hover:bg-cardBgHover border border-gray-800 hover:shadow-md cursor-pointer tracking-wide"
      onClick={handleOpen}
    >
      <img
        src={thumbnailVr}
        className="w-60 h-80 object-cover rounded-t-md"
        alt={title + " cover image"}
      />
      <div className="p-3 w-60">
        <h3 className="pb-1 truncate">{title}</h3>
        <div className="flex items-center gap-2 pb-3 text-xs text-textMedium">
          <p>{genre[0]}</p>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-1">
            <MdStar className="text-gray-600 text-base" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <span className="text-gray-600">•</span>
          <p>${price}</p>
        </div>
        <div className="flex gap-3">
          {isAddedToCart ? (
            <PrimaryBtn
              clickHandler={(e) => {
                e.stopPropagation();
                dispatch({ type: "REMOVE_FROM_CART", payload: movie });
              }}
            >
              <AiOutlineShoppingCart />
              <span className="text-xs font-bold">Added</span>
            </PrimaryBtn>
          ) : (
            <PrimaryBtn
              clickHandler={(e) => {
                e.stopPropagation();
                dispatch({ type: "ADD_TO_CART", payload: movie });
              }}
            >
              <AiOutlineShoppingCart />
              <span className="text-xs font-bold">Add</span>
            </PrimaryBtn>
          )}
          <SecondaryBtn>View details</SecondaryBtn>
        </div>
      </div>
      {open && (
        <DetailModal open={open} handleClose={handleClose} movie={movie} isAddedToCart={isAddedToCart} style={style}/>
      )}
    </div>
  );
};

export default Card;
