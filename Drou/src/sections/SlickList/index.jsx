import React from "react";

const SlickList = () => {
  return (
    <div className="container flex max-w-[1450px]  px-[7px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-2.5  h-[574px]">
        <div className="grid md:col-span-8 col-span-12 bg-[url('./src/assets/new-s1_b9ecc0a5-4779-4351-86ac-7947dd6afc81.webp')] bg-cover bg-no-repeat bg-center">
          <div className="title flex flex-col justify-center px-[60px] pb-[50px] text-white">
            <h1 className="text-[18px] leading-[1.74] font-normal">New Iphone Series</h1>
            <h2 className="text-[34px] leading-[48px] font-medium">
              Up To 40% Off <br />
              Premium Smart watch
            </h2>
            <p className="mt-[19px] mb-[27px]">
              We work with global brand and have create an smart <br />
              gadget for you to make easiest life.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex md:grid md:col-span-4 col-span-12 gap-2.5">
          <div className="grid col-span-12  w-full bg-[url('./src/assets/bnr1_grande.webp')] bg-cover bg-no-repeat bg-center">
            <div className="text flex flex-col justify-center px-[60px] pb-[50px] text-white">
              <h1>MODERN MOBILE</h1>
              <h2 className="my-3 text-[24px]">New Collection</h2>
              <h3 className="text-[24px] text-[#e4573d] font-bold">$99.00</h3>
            </div>
          </div>
          <div className="grid col-span-12  w-full bg-[url('./src/assets/nbnr22_grande.webp')] bg-cover bg-no-repeat bg-center">
            <div className="text flex flex-col justify-center px-[60px] pb-[50px] text-white">
              <h1>SMART WATCH</h1>
              <h2 className="my-3 text-[24px]">Best Seller Product</h2>
              <h3 className="text-[24px] text-[#e4573d] font-bold">$15.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickList;
