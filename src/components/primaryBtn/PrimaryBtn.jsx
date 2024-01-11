import React from "react";

const PrimaryBtn = ({ children, clickHandler, style }) => {
  return (
    <button
      className={`p-2 py-1 w-full flex gap-1 text-lg items-center justify-center bg-primary hover:bg-yellowDark rounded text-cardBg font-medium ${style}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
