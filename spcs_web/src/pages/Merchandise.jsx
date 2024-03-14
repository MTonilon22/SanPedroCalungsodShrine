import React from "react";
import ImageSlider from "../components/ImageSlider";
import rays from "../assets/shrine/rays.jpg";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
const Merchandise = () => {
  return (
    <div>
      <ImageSlider />
      <div className="lg:mt-[10%] font-gelasio font-bold text-3xl lg:ml-[19%] text-[#7F1D1D]">
        San Pedro's Little Merchandise
      </div>
      <div className="flex flex-wrap mt-2 h-full md:mx-auto md:w-[100%] lg:w-[84%] custom-sm:gap-3 custom-sm:mx-auto gap-y-9 md:gap-y-9 md:gap-5 justify-evenly">
        <div className="mt-[2%]">
          <Pagination />
        </div>
        <Products />
        <div className="my-[2%]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
