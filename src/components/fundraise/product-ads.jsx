import React from "react";

const ProductAds = () => {
  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[104px] ">
      <div className=" flex flex-col xl:flex-row justify-between items-center gap-4">
        <div className=" flex flex-col-reverse gap-2 md:flex-row  justify-between items-center w-full bg-[#f5f5f5] py-6 px-8">
          <div>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[#D89F4B]  text-[24px] font-medium leading-normal">
              Products Essentials
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[#000] max-w-[190px] text-[28px] font-medium leading-[32px] underline">
              Bottle With Wooden Cork
            </p>
            <button class="text-[#000] border-[1px] mt-3 border-[#000] py-1 px-4 f-f-m text-[24px] font-medium uppercase">
              <span>Buy now/</span>
              <span className=" text-[#D89F4B]"> $59.25</span>
            </button>
          </div>
          <img className="h-[230px] " src="/productads2.png" />
        </div>
        <div className=" flex  flex-col-reverse gap-2 md:flex-row  justify-between items-center w-full bg-[#f5f5f5] py-6 px-8">
          <div>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[#D89F4B]  text-[24px] font-medium leading-normal">
              Products Furniture
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[#000] max-w-[190px] text-[28px] font-medium leading-[32px] underline">
              Hauteville Plywood Chair
            </p>
            <button class="text-[#000] border-[1px] mt-3 border-[#000] py-1 px-4 f-f-m text-[24px] font-medium uppercase">
              <span>Buy now/</span>
              <span className=" text-[#D89F4B]"> $59.25</span>
            </button>
          </div>
          <img className=" h-[230px] " src="/productads1.png" />
        </div>
      </div>
    </div>
  );
};

export default ProductAds;
