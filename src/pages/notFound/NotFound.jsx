import React from "react";
import notfound from "../../assets/notfond.svg";
import { PrimaryBtn } from "../../components";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="w-screen h-screen bg-bodyBg">
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 text-center">
        <img
          src={notfound}
          alt="Not found"
          className="w-52 sm:w-96 m-auto mb-8"
        />
        <h1 className="w-60 sm:w-full font-semibold text-lg sm:text-xl p-2 text-textLight">
          Looks like something is missing!!
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-3">
          Go back to home page
        </p>
        <div className="w-36 m-auto">
        <PrimaryBtn clickHandler={clickHandler}>Home</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};
