import React, { useState } from "react";
import Google from "../../assets/images/Google play2.svg";
import Apple from "../../assets/images/Appss.svg";
import Rapidologo from "../../assets/images/Group 17155.svg";
import Heroimg from "../../assets/images/landing-hero.png";
import { DialogDefault } from "./Dilogbox/individul";
import { Link } from "react-router-dom";
import DownloadButton from "./download-btn";
import { Dialog } from "@material-tailwind/react";
import WatchVideo from "./watch-video";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="mx-auto w-11/12 2xl:max-w-[1161px]">
      <div className="grid grid-cols-1 gap-10 py-20 pt-10 lg:grid-cols-12 lg:gap-5 xl:gap-0">
        <div className="col-span-1 mt-14 lg:col-span-7">
          <h1 className="f-f-m mt-2 text-[45px] uppercase text-green xl:text-[65px]">
            Rápido Relief
          </h1>
          <div className="w-full lg:max-w-[475px]">
            <div className="f-f-m text-[35px] leading-[46px] text-white xl:text-[40px]">
              Revolutionary Healthcare for the 21st Century
            </div>
          </div>

          <div className="mt-5 w-full lg:max-w-[560px] xl:mt-[40px]">
            <h5 className="f-f-r mt-6 text-[20px] font-normal leading-[140%] text-white xl:text-[30px]">
              We're pioneering the future of healthcare with cutting-edge
              telehealth and telemedicine solution
            </h5>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-start gap-5 xl:mt-[60px]">
            <DownloadButton
              imageSrc={Google}
              primaryText="GET IT ON"
              secondaryText="Google Play"
            />
            <DownloadButton
              imageSrc={Apple}
              primaryText="Download on the"
              secondaryText="App Store"
            />
            <WatchVideo />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 xl:gap-5">
            <button
              onClick={() => handleOpen()}
              className="text-nowrap rounded-[10px] bg-[#58FD0A] px-[17px] py-2 text-[25px] font-medium text-green-dark"
            >
              Subscribe Now
            </button>
            <h1
              style={{ fontWeight: 500 }}
              className="f-f-r text-[25px] leading-normal text-white"
            >
              To become community member
            </h1>
          </div>

          {/* <h1
            style={{ fontWeight: 500 }}
            className="f-f-r text-[25px] leading-normal text-white mt-3 xl:mt-[24px] "
          >
            Become member of our community?
            <span
              onClick={() => handleOpen()}
              className=" text-[#58FD0A] pl-4 cursor-pointer"
            >
              Sign up
            </span>
          </h1> */}
        </div>
        <div className="col-span-1 lg:col-span-5">
          <img src={Heroimg} className="h-auto w-full lg:h-full" alt="" />
        </div>
      </div>
      {/* <div className="text-center mt-14 lg:mt-[92px]">
        <ul className="lg:inline-flex items-center sm:space-x-5 pb-5 sm:pb-[45px]">
          <li className="f-f-m  text-xl md:text-5xl text-green">
            do you want to Get Involved with our Case Studies reviews
          </li>
          <li>
            <button className="w-full sm:w-[230px] h-[38px] md:h-[45px] mt-4 lg:mt-0 mb-3 lg:mb-0 bg-white rounded-xl f-f-m text-xl sm:text-3xl md:text-5xl text-green-dark cursor-pointer">
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
