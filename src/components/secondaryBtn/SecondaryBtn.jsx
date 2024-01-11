import React from "react";

const SecondaryBtn = ({ children, clickHandler, style }) => {
  return (
    <button
      className={`p-2 w-full flex gap-1 items-center justify-center border border-gray-700 hover:border-gray-400 rounded text-gray-400 font-bold text-xs hover:text-gray-200 ${style}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
