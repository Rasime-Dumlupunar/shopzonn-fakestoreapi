import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-2/6 bg-gray-100 p-3 max-h-screen">
      <div className="border-b pb-2 text-xl font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg cursor-pointer hover:bg-indigo-100 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
