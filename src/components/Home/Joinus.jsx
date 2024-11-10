import React from "react";
import Joinus from "../../assets/images/Joinus.svg";

export default function Jobs() {
  return (
    <div className="bg-white my-[66px]">
      <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
        <div className="mt-5 md:mt-16  bg-green-vlight p-2 rounded-b-[25px] ">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 p-6">
              <h1 className="text-[#749D1C] uppercase f-f-m text-[25px] font-medium leading-[32px] font-small-caps">
                rapido relief jobs
              </h1>

              <p className="text-[#1AA928] text-center md:text-start  mt-9 f-f-r text-6xl md:text-[40px] font-normal md:leading-[50px] tracking[-0.4px]">
                Join us, and help transform healthcare for everyone
              </p>

              <div className="text-center lg:text-start">
                <button className="w-[217px] h-[50px] lg:mx-0 bg-green-dark rounded-3xl text-white f-f-b font-extrabold text-xl  mt-[30px]">
                  View job openings
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <img src={Joinus} className="w-full h-auto lg:h-[400px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
