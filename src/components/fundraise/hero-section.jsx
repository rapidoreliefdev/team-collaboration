import React from "react";
import { Link } from "react-router-dom";
import Heroimg from "../../assets/images/fandr.png";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px]">
      <div className="relative pt-[108px] pb-[90px] ">
        <div className="">
          <h1 className="text-[#58FD0A] font-[outfit] max-w-[595px] text-[45px] xl:text-[75px] font-bold leading-[45px] xl:leading-[75px] capitalize">
            Help build The Future of Instant Medical Care
          </h1>
          <p className="mt-7 text-[#FEFEFE] f-f-r text-[20px] xl:text-[30px] max-w-[560px] font-normal leading-[120%]">
            Your support helps connect individuals to life-saving medical care
            when they need it most. Join us in making healthcare accessible to
            everyone, everywhere.
          </p>
          <div className=" mt-7 flex flex-col md:flex-row justify-start items-center gap-4 ">
            <button className="text-[#58FD0A] rounded-[13px] border-[1px] border-[#58FD0A] uppercase f-f-m text-[26px] font-medium leading-normal px-3 ">
              Donate Now
            </button>
            <button className="text-[#58FD0A] rounded-[13px] border-[1px] border-[#58FD0A] uppercase f-f-m text-[26px] font-medium leading-normal px-3 ">
              Support by Shopping
            </button>
          </div>

          <h1
            style={{ fontWeight: 500 }}
            className="f-f-r text-[25px] leading-normal text-white mt-3 xl:mt-[24px] ">
            Become member of our community?
            <Link to="#" className=" text-[#58FD0A] pl-4">
              Sign up
            </Link>
          </h1>
        </div>

        <img
          src={Heroimg}
          className=" w-auto mt-10 lg:mt-0 lg:w-[40%] xl:w-[51%] h-auto  lg:absolute   lg:-right-0 lg:top-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
