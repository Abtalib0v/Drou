import React from 'react'

const Banner = () => {
  return (
    <div className="container flex max-w-[1450px] mx-auto mt-[80px]">
        <div className="  w-full min-h-[700px] bg-[url('./src/assets/slide61.webp')] bg-cover bg-no-repeat bg-center">
            <div className="text flex flex-col justify-center px-[60px] pb-[50px] text-center pt-[100px]">
              <h1>30 NOV - 03 DEC</h1>
              <h2 className="my-3 text-[24px]">The wait is on iPhone 14 max pro</h2>
              <h3 className="text-[24px] text-[#e4573d] font-bold">$999.00</h3>
            </div>
          </div>
    </div>
    
  )
}

export default Banner