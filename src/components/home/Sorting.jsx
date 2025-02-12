import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className=" ">
      <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="bg-gray-200 py-3 px-3 rounded-xl"
          name=""
          id=""
        >
          <option disabled value="">
            Seçiniz
          </option>
          <option value="inc">Artan</option>
          <option value="dec">Azalan</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
