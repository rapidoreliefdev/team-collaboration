import React from "react";
import { Link } from "react-router-dom";
import Heroimg from "../../assets/images/fandr.png";
import { t } from "i18next";

const HeroSection = () => {
  return (
    <div className="mx-auto w-11/12 2xl:max-w-[1161px]">
      <div className="relative pb-[90px] pt-[108px]">
        <div className="">
          <h1 className="max-w-[595px] font-[outfit] text-[45px] font-bold capitalize leading-[45px] text-[#58FD0A] xl:text-[75px] xl:leading-[75px]">
            {t("fundraise.heading")}
          </h1>
          <p className="f-f-r mt-7 max-w-[560px] text-[20px] font-normal leading-[120%] text-[#FEFEFE] xl:text-[30px]">
            {t("fundraise.body")}
          </p>
          <div className="mt-7 flex flex-col items-center justify-start gap-4 md:flex-row">
            <button className="f-f-m rounded-[13px] border-[1px] border-[#58FD0A] px-3 text-[26px] font-medium uppercase leading-normal text-[#58FD0A]">
              {t("fundraise.donate")}
            </button>
            <button className="f-f-m rounded-[13px] border-[1px] border-[#58FD0A] px-3 text-[26px] font-medium uppercase leading-normal text-[#58FD0A]">
              {t("fundraise.supportByShopping")}
            </button>
          </div>

          <h1
            style={{ fontWeight: 500 }}
            className="f-f-r mt-3 text-[25px] leading-normal text-white xl:mt-[24px]"
          >
            {t("fundraise.invitation")}
            <Link to="#" className="pl-4 text-[#58FD0A]">
              {t("fundraise.signUp")}
            </Link>
          </h1>
        </div>

        <img
          src={Heroimg}
          className="mt-10 h-auto w-auto lg:absolute lg:-right-0 lg:top-20 lg:mt-0 lg:w-[40%] xl:w-[51%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
