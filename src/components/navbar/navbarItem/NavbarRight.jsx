import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8">
      <div className=" flex items-center border p-3  rounded-full bg-gray-200 text-md">
        <input
          type="text"
          className="bg-gray-200 outline-none"
          placeholder="Arama yapınız..."
        />
        <BiSearch />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 items-center flex justify-center">
          {carts?.length}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
