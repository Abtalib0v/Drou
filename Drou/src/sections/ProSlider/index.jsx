import React from "react";
import SwiperSlider from "../../shared/SwiperSlider";

const ProSlider = () => {
  return (
    <div className="container flex max-w-[1450px] mx-auto mt-[80px]">
      <div className=" border-2 border-[#e52e06] w-full rounded-[5px] relative">
        <div className="absolute bg-white 2xl:flex lg:hidden hidden justify-between min-w-[1356px] px-[50px] left-[50px] top-[-18px]">
          <h1 className="text-[30px]  font-medium irem">This week's deals</h1>
          <h2 className="bg-[#e52e06]  px-[20px] py-[4px] text-[20px]  font-normal   text-white">End in : 211 : 06 : 04 : 48</h2>
        </div>
        <div className=" flex max-w-[1450px] px-[30px] mt-[30px] mb-[48px]">
          <SwiperSlider />
        </div>
      </div>
    </div>
  );
};

export default ProSlider;
