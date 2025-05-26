import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import navbar from "../../../constant/navbar";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="header-top md:flex 2xl:flex   hidden font-[Roboto] text-[14px] text-[#666666] border-t-[#e52e06] border-t-[3px] leading-6 font-medium bg-[#f3f3f3]  py-5">
        <div className=" container flex justify-between max-w-[1450px] w-full px-[7px] mx-auto">
          <div className="top-left flex text-[#444444]">
            <h1 className="pr-[15px] border-r-[#dedfe2] border-r-[1px]">
              (08)123 456 7890
            </h1>{" "}
            <span className="ml-[15px]"> Store location</span>
          </div>
          <div className="top-center text-[#444444] font-normal leading-[1.74]">
            We are open with limited hours and staff.
          </div>
          <div className="top-right flex">
            <h1 className="pr-[15px] border-r-[#dedfe2] border-r-[1px] flex items-center gap-1 font-black">
              USD <FaAngleDown className="mb-1" />
            </h1>{" "}
            <span className="ml-[15px]"> Log In / Sign Up</span>
          </div>
        </div>
      </div>
      <div className="header py-[18px] h-[110px] items-center flex justify-between max-w-[1450px] w-full px-[7px] mx-auto">
        <div className="logo">
          <img
            className="w-[160px]"
            src="../../src/assets/logo_300x300.webp"
            alt=""
          />
        </div>
        <div className="search 2xl:flex xl:hidden sm:hidden hidden" >
          <form action="search">
            <div className="flex items-center text-[15px] min-h-[52px] rounded-[5px] border-[#eee] w-[560px] outline-0 border-[2px] text-[#444] justify-between py-[3px] px-5 ">
              <input
                className="w-full outline-transparent"
                type="search"
                name="search"
                id="search"
                placeholder="Search our store"
              />{" "}
              <button>
                <CiSearch size={28} fill="#e52e06" />
              </button>
            </div>
          </form>
        </div>
        <div className="icons flex gap-2">
          <div className="like">
            <CiHeart size={40} />
          </div>
          <div className="shop">
            <CiShoppingBasket size={40} />
          </div>
          <div className="login">
            {" "}
            <CiUser size={40} />
          </div>
        </div>
      </div>
      <div className="header-bottom mb-[30px]  md:flex 2xl:flex hidden border-y-[#f3f3f3] border-x-transparent border-[1px]">
        <div className="category container flex justify-between max-w-[1450px] w-full px-[7px] mx-auto h-[82px] items-center">
          <form
              action="category "
              className="    flex items-center text-white font-semibold font-[roboto]"
            >
              <select name="category" id="category" className="px-[70px] rounded-[5px] bg-[#e52e06] py-[21px] border-[1px] border-[#e52e06]">
                <option value="category" className="text-black bg-white">
                  All CATEGORIES
                </option>
                <option value="category" className="text-black bg-white">
                  All CATEGORIES
                </option>
                <option value="category" className="text-black bg-white">
                  All CATEGORIES
                </option>
                <option value="category" className="text-black bg-white">
                  All CATEGORIES
                </option>
                <option value="category" className="text-black bg-white">
                  All CATEGORIES
                </option>
              </select>
            </form>
          <div className="pages">
            <ul className="hidden sm:hidden sm:px-5 2xl:flex 2xl:px-12 ">
              {navbar &&
                navbar.map((item, index) => (
                  <li key={index}>
                    <Link
                      className=" font-medium sm:text-[8px] 2xl:text-[15px] text-[#302f30] py-1 transition-all sm:px-[10px] 2xl:px-[15px] rounded-[5px] hover:text-[#e52e06]"
                      to={item.path}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="hotline flex items-center">
            <span className="text-[14px] font-normal mr-[10px]">Hotline</span>
            <p className="text-[#333] text-[18px] font-bold">1800-1102</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
