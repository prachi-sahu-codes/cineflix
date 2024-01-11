import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import { useData } from "../../context/DataProvider";
import ModalProvider from "../modalProvider/ModalProvider";

const DetailModal = ({ open, handleClose, movie, isAddedToCart, style }) => {
  const { dispatch } = useData();
  const {
    id,
    title,
    thumbnailVr,
    releaseDate,
    rating,
    price,
    genre,
    directors,
    description,
    cast,
    duration,
  } = movie;
  return (
    <ModalProvider open={open} handleClose={handleClose} style={style}>
      <div className="flex flex-col p-6 pr-7 sm:pr-6 sm:flex-row items-center gap-4 tracking-wide overflow-y-scroll sm:overflow-hidden ">
        <div className="w-52 sm:w-48">
          <img
            src={thumbnailVr}
            className="w-48 h-48 m-auto sm:w-48 sm:h-72 object-contain sm:object-cover mb-4 rounded-sm"
            alt={title + " cover image"}
          />
          {isAddedToCart ? (
            <PrimaryBtn
              clickHandler={(e) => {
                e.stopPropagation();
                dispatch({ type: "REMOVE_FROM_CART", payload: movie });
              }}
            >
              <AiOutlineShoppingCart />
              <span className="text-xs font-bold">Added to Cart</span>
            </PrimaryBtn>
          ) : (
            <PrimaryBtn
              clickHandler={(e) => {
                e.stopPropagation();
                dispatch({ type: "ADD_TO_CART", payload: movie });
              }}
            >
              <AiOutlineShoppingCart />
              <span className="text-xs font-bold">Add to Cart</span>
            </PrimaryBtn>
          )}
        </div>

        <div className=" w-52 h-52 sm:w-80 sm:h-full  text-textMedium">
          <h3 className="text-lg text-textLight pb-2 sm:pt-3">{movie.title}</h3>
          <div className="flex items-center gap-2 text-xs pb-1">
            <p>{releaseDate}</p>
            <span className="text-gray-600">•</span>
            <p>{duration} minutes</p>
          </div>
          <div className="flex items-center gap-2 text-xs pb-1">
            <p>
              {genre.length > 1
                ? genre[0] + " and " + genre[1].toLowerCase()
                : genre[0]}
            </p>
            <span className="text-gray-600">•</span>
            <div className="flex items-center gap-1">
              <MdStar className="text-gray-600 text-base" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-600">•</span>
            <p className="text-gray-300">${price}</p>
          </div>
          <div className="text-xs leading-relaxed py-2">
            <p className="text-gray-300">Directors:</p>
            <p className="text-gray-400">{directors.join(", ")}</p>
          </div>
          <hr className="border-gray-700 my-3" />
          <p className="text-xs leading-relaxed">{description}</p>
          <div className="text-xs leading-relaxed py-4">
            <p className="text-gray-400 italic">{cast.join(", ")}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-4 right-4 text-textMedium hover:text-gray-300 active:text-textMedium cursor-pointer"
        onClick={handleClose}
      >
        <RxCross2 />
      </div>
    </ModalProvider>
  );
};

export default DetailModal;
