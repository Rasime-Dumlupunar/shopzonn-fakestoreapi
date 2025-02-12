import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[420px] h-[500px] my-4 object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="ml-4 mt-8 sm:ml-8">
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-4">{productDetail?.title}</div>
        <div className="my-4 text-lg text-indigo-700 font-bold">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-4 text-lg text-indigo-700 font-bold">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-4xl font-bold ">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl">
            -
          </div>
          <input
            className="w-16 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="my-4 border w-[200px] text-xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center"
        >
          SEPETE EKLE
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
