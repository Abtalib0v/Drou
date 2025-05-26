import React from "react";
import SwiperSlider from "../../shared/SwiperSlider";

const PopularProduct = () => {
  return (
    <div className="container flex max-w-[1450px] mx-auto mt-[80px]">
        <div className=" flex px-[30px] mt-[30px] mb-[48px]">
          <SwiperSlider />
        </div>
    </div>
  );
};

export default PopularProduct;