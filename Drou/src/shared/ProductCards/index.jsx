import React from "react";

export default function ProductCards({
    image,
    hovimage,
    text,
    price,
    disprice

}){
  return (
    <div className="relative group container flex h-[364px]  px-[7px] mx-auto shadow-lg">
      <div className="image">
        {" "}
        <img
          className="opacity-100  group-hover:opacity-0 absolute top-0 left-0 h-full object-cover transition-transform scale-70 duration-300 ease-in-out group-hover:scale-75"
          src={image}
          alt=""
        />
        <img
          className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full object-cover transition-transform scale-70 duration-300 ease-in-out group-hover:scale-75"
          src={hovimage}
          alt=""
        />
      </div>
      <div className="absolute bottom-[30px] left-[29%] text-center">
        <div></div>
      <div className="title text-[18px] ">
        <h1>{text}</h1>
        <div className="price flex gap-3">
          <h2 className="text-[18px] font-bold text-[#e52e06]">${price}</h2> <span className=" line-through text-[15px]">${disprice}</span>
        </div>
      </div>
      </div>
      
    </div>
  );}

