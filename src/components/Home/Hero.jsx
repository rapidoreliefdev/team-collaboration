import React, { useState } from "react";
// import Rapidologo from "../../assets/images/Group 17155.svg";
import { DialogDefault } from "./Dilogbox/individul";
import { Link } from "react-router-dom";
import DownloadButton from "./download-btn";
import { Dialog } from "@material-tailwind/react";
import WatchVideo from "./watch-video";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const settings = {
    dots: true, // Enables dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: i === 0 ? "#6CBF24" : "#D3D3D3", // Customize active/inactive colors
        }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb", // Custom class for dots
  };

  const handleOpen = () => setOpen(!open);

  const { t } = useTranslation();
  return (
    <div className="mx-auto w-11/12 2xl:max-w-[1161px]">
      <div className="grid grid-cols-1 gap-10 py-20 pt-10 lg:grid-cols-12 lg:gap-5 xl:gap-0">
        <div className="col-span-1 mt-14 lg:col-span-7">
          <h1 className="f-f-m mt-2 text-[45px] uppercase text-green xl:text-[65px]">
            Rápido Relief
          </h1>
          <div className="w-full lg:max-w-[475px]">
            <h1 className="f-f-m text-[35px] leading-[46px] text-white xl:text-[40px]">
              {t("home.heroHeading")}
            </h1>
          </div>

          <div className="mt-5 w-full lg:max-w-[560px] xl:mt-[40px]">
            <h5 className="f-f-r mt-6 text-[20px] font-normal leading-[140%] text-white xl:text-[30px]">
              {t("home.heroSubHeading")}
            </h5>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-start gap-5 xl:mt-[60px]">
            <DownloadButton
              imageSrc="../../assets/images/Google play2.svg"
              primaryText={t("getItOn")}
              secondaryText={t("googlePlay")}
            />
            <DownloadButton
              imageSrc="../../assets/images/Appss.svg"
              primaryText={t("downloadOn")}
              secondaryText={t("appStore")}
            />
            <WatchVideo />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 xl:gap-5">
            <button
              onClick={() => handleOpen()}
              className="f-f-m text-nowrap rounded-[10px] bg-[#58FD0A] px-[17px] py-2 text-[25px] uppercase text-green-dark"
            >
              {t("home.subscribeNow")}
            </button>
            <h1
              style={{ fontWeight: 500 }}
              className="f-f-r text-[25px] leading-normal text-white"
            >
              {t("home.invitationText")}
            </h1>
          </div>
        </div>

        {/* Image Slider */}
        <div className="col-span-1 lg:col-span-5">
          <Slider {...settings}>
            <div>
              <img
                src="../../assets/images/landing-hero.svg"
                className="h-auto w-full lg:h-full"
                alt=""
              />
            </div>
            <div>
              <img
                src="../../assets/images/landing-hero.svg"
                className="h-auto w-full lg:h-full"
                alt=""
              />
            </div>
            <div>
              <img
                src="../../assets/images/landing-hero.svg"
                className="h-auto w-full lg:h-full"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="mt-14 text-center lg:mt-[92px]">
        <ul className="items-center pb-5 sm:space-x-5 sm:pb-[45px] lg:inline-flex">
          <li className="f-f-m text-xl text-green md:text-5xl">
            do you want to Get Involved with our Case Studies reviews
          </li>
          <li>
            <button className="f-f-m mb-3 mt-4 h-[38px] w-full cursor-pointer rounded-xl bg-white text-xl text-green-dark sm:w-[230px] sm:text-3xl md:h-[45px] md:text-5xl lg:mb-0 lg:mt-0">
              then, Click here
            </button>
          </li>
        </ul>
      </div> */}

      {/* <Indivial open={open} setOpen={setOpen} handleOpen={handleOpen} /> */}
      <DialogDefault open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
}
