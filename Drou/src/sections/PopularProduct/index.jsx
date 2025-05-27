import React from "react";
import SwiperSlider from "../../shared/SwiperSlider";

const PopularProduct = () => {
  return (
    <div className="container flex  mx-auto mt-[80px]">
        <div className=" flex px-[30px] max-w-[1450px] w-full mt-[30px] mb-[48px]">
          <SwiperSlider />
        </div>
    </div>
  );
};

export default PopularProduct;