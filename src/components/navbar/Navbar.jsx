import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#111827] px-10 py-3">
      <div className="flex items-center gap-1">
        <div className="text-amber-300">
          <RiMovie2Line className="w-6 h-6" />
        </div>
        <h2 className="text-textLight text-xl font-medium">CineFlix</h2>
      </div>
      <div className="flex items-center gap-6 text-grayMedium">
        <AiOutlineBell className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />
        <AiOutlineShoppingCart className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />
        <MdOutlineAccountCircle className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />
      </div>
    </div>
  );
};

export default Navbar;
