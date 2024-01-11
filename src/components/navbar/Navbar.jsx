import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useData } from "../../context/DataProvider";
import CartModal from "../modal/CartModal";

const Navbar = () => {
  const { state } = useData();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const length = state.cartData.length;
  const dimensions = () => {
    if (length > 100) {
      return "w-[22px] h-4";
    } else {
      return "w-3/4 h-3/4";
    }
  };
  return (
    <div className="fixed w-full flex items-center justify-between bg-navBg px-10 py-3">
      <div className="flex items-center gap-1">
        <div className="text-amber-300">
          <RiMovie2Line className="w-6 h-6" />
        </div>
        <h2 className="text-textLight text-xl font-medium">CineFlix</h2>
      </div>
      <div className="flex items-center gap-6 text-grayMedium">
        <AiOutlineBell className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />

        <div className="relative" onClick={handleOpen}>
          <AiOutlineShoppingCart className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />
          {length > 0 && (
            <p
              className={`absolute flex justify-center items-center -top-2 left-3  bg-primary text-navBg rounded-full text-[10px] p-[2px] pt-[3px] font-semibold + ${dimensions()}`}
            >
              {length > 100 ? "99+" : length}
            </p>
          )}
        </div>

        <MdOutlineAccountCircle className="w-5 h-5 cursor-pointer hover:text-grayLight active:text-grayMedium" />
      </div>
      {open && <CartModal open={open} handleClose={handleClose} />}
    </div>
  );
};

export default Navbar;
