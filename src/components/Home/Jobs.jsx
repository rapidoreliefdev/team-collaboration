import React from "react";
import Joinus from "../../assets/images/Joinus.svg";
import Helathmedical from "../../assets/images/Helathmedical.svg";
import Handmedical from "../../assets/images/Handmedical.svg";
import Healthcaremedical from "../../assets/images/Healthcaremedical.svg";
import Hearmedical from "../../assets/images/Hearmedical.svg";
import Storagemedical from "../../assets/images/Storagemedical.svg";
import Plusmedical from "../../assets/images/Plusmedical.svg";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const { t } = useTranslation();
  return (
    <div className="my-[66px] bg-white">
      <div className="mx-auto w-11/12 2xl:max-w-[1161px]">
        <h1 className="f-f-r mb-5 text-center text-[40px] font-medium leading-normal text-[#1A4402]">
          {t("home.jobsHeading")}
        </h1>

        <Slider {...settings}>
          <div>
            <img
              src={Helathmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Hearmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Plusmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Healthcaremedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Handmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Storagemedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Helathmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Helathmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <img
              src={Helathmedical}
              className="mx-auto h-[121px] w-full sm:w-[90%]"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
