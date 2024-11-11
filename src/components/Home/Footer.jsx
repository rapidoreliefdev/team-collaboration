import React, { useState } from "react";
import Rapidologo from "../../assets/images/Group 17155.svg";
import Email from "../../assets/images/Email.svg";
import Google from "../../assets/images/Google play2.svg";
import Apple from "../../assets/images/Appss.svg";
import Gfacebook from "../../assets/images/Gfacebook.svg";
import Ginstagram from "../../assets/images/Ginstagram.svg";
import Gsocial from "../../assets/images/Gsocial.svg";
import Glinkedin from "../../assets/images/Glinkedin.svg";
// import Gyoutube from "../../assets/images/Gyoutube.svg";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-select";

export default function Footer() {
  return (
    <div className="bg-green-dark">
      <div className="relative mx-auto w-10/12 py-9 2xl:max-w-[1161px]">
        <div className="absolute -right-6 bottom-16 hidden md:block xl:-right-6">
          <HoverPersistentComponent />
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 xl:col-span-3">
            <div className="text-center xl:text-start">
              <ul className="w-full items-center space-x-2 xl:inline-flex">
                <li>
                  <img src={Rapidologo} className="mx-auto h-12 w-12" alt="" />
                </li>
                <li>
                  <h1 className="f-f-r text-[32px] font-semibold text-white">
                    RapidoRelief
                  </h1>
                </li>
              </ul>

              <ul className="mt-4 w-full items-center space-x-4 md:space-x-4 xl:mt-[47px] xl:inline-flex">
                <li>
                  <img
                    src={Email}
                    className="mx-auto h-[35px] w-[38px]"
                    alt=""
                  />
                </li>
                <div className="xl:w-[160px]">
                  <li>
                    <h1 className="f-f-r mt-3 text-sm text-white xl:mt-0">
                      For support or any-related inquiries, please write to us
                      at{" "}
                      <span className="f-f-li text-green">
                        contact@rapidorelief.com
                      </span>{" "}
                    </h1>
                  </li>
                </div>
              </ul>
              <h3 className="f-f-r mt-4 text-xl text-white">
                Follow Us On Social Media
              </h3>
              <div className="mt-[17px] px-6">
                <ul className="inline-flex items-center space-x-[10px]">
                  <li>
                    <a href="https://web.facebook.com/RapidoReliefApp/">
                      <img src={Gfacebook} className="h-6 w-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rapidreliefapp/">
                      <img src={Ginstagram} className="h-6 w-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/rapidoreliefapp">
                      <img src={Gsocial} className="h-6 w-6" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/rapidreliefapp">
                      <img src={Glinkedin} className="h-6 w-6" alt="" />
                    </a>
                  </li>
                  {/* <li>
                    <button>
                      <img src={Gyoutube} className="w-6 h-6" alt="" />
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="mt-3 text-center xl:mt-0 xl:pl-20">
              <h1 className="f-f-r text-xl font-semibold text-white">
                Solution
              </h1>
              <h1 className="f-f-r mt-4 text-xl text-white">Find Doctors</h1>
              <h1 className="f-f-r mt-3 text-xl text-white">Find Pharmacy </h1>
              <h1 className="f-f-r mt-3 text-xl text-white">
                Healthcare Expertise
              </h1>
              <h1 className="f-f-r mt-3 text-xl text-white">
                Patient Communication
              </h1>
              <h1 className="f-f-r mt-3 text-xl text-white">
                rovider Collaboration
              </h1>
              <h1 className="f-f-r mt-3 text-xl text-white">
                Workflow Automation
              </h1>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="mt-3 text-center xl:mt-0 xl:pl-20">
              <h1 className="f-f-r text-xl font-semibold text-white">
                Resources
              </h1>
              <h1 className="f-f-r mt-4 text-xl text-white">About Us</h1>
              <h1 className="f-f-r mt-2 text-xl text-white">Blog </h1>
              <h1 className="f-f-r mt-2 text-xl text-white">Success stories</h1>
              <h1 className="f-f-r mt-2 text-xl text-white">White papers</h1>
              <h1 className="f-f-r mt-2 text-xl text-white"> Career / CSR</h1>
              <h1 className="f-f-r mt-2 text-xl text-white">
                Podcasts / Videos
              </h1>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <div className="mt-3 text-center xl:mt-0 xl:text-end">
              <h1 className="f-f-m f text-2xl text-white">Coming Soon on </h1>
              <div className="sm:space-x-4 xl:space-x-0">
                <button className="mt-3 h-[39px] w-full cursor-pointer rounded-[10px] border border-green sm:w-[170px]">
                  <ul className="inline-flex items-center space-x-2">
                    <li>
                      <img src={Google} className="h-[26px] w-[30px]" alt="" />
                    </li>
                    <li>
                      <h5 className="f-f-r text-start text-xs text-white">
                        GET IT ON
                      </h5>
                      <h3 className="f-f-m text-lg leading-4 text-white sm:text-2xl">
                        Google Play
                      </h3>
                    </li>
                  </ul>
                </button>
                <button className="mt-[14px] h-[39px] w-full cursor-pointer rounded-[10px] border border-green sm:w-[152px]">
                  <ul className="inline-flex items-center space-x-2">
                    <li>
                      <img src={Apple} className="h-[30px] w-[35px]" alt="" />
                    </li>
                    <li>
                      <h5 className="f-f-r text-start text-xs text-white">
                        Download on the
                      </h5>
                      <h3 className="f-f-m text-lg leading-4 text-white sm:text-2xl">
                        App Store
                      </h3>
                    </li>
                  </ul>
                </button>
                <div className="mt-10">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 h-[2px] w-full bg-white"></div>

        <div className="mt-6 grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-4">
            <h1 className="f-f-m md:text-star text-center text-base text-white lg:text-base">
              © 2024 © RapidoRelief. All Rights Reserved.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="mt-3 text-center md:mt-0 md:text-end">
              <ul className="inline-flex items-center space-x-3 uppercase sm:space-x-5">
                <Link to="/privacy-policy">
                  <li className="f-f-m text-sm text-white">Privacy Policy </li>
                </Link>
                <li>
                  <div className="h-3 w-[2px] bg-white"></div>
                </li>
                <li className="f-f-m text-sm text-white">legal</li>
                <li>
                  <div className="h-3 w-[2px] bg-white"></div>
                </li>
                <li className="f-f-m text-sm text-white">cookies </li>
                <li>
                  <div className="h-3 w-[2px] bg-white"></div>
                </li>
                <li className="f-f-m text-sm text-white">terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HoverPersistentComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="group relative flex h-[122.027px] w-[121.971px] cursor-pointer items-center justify-center rounded-full bg-[#456c0f]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="54"
        viewBox="0 0 53 54"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.7463 53.8666V13.691L48.2555 32.2086L52.8824 27.4133L26.4412 0.959961L0 27.4133L4.62705 32.0422L23.136 13.691V53.8666H29.7463V53.8666Z"
          fill="#1A4402"
        />
      </svg>

      {/* Hidden Items Initially, will become visible when hovered */}
      <div
        className={`absolute -top-[380px] h-[25.594px] w-[25.594px] translate-y-full rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}
      ></div>

      <div
        className={`absolute -top-[305px] h-[25.594px] w-[25.594px] translate-y-full rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}
      ></div>

      <div
        className={`absolute -top-[235px] h-[25.594px] w-[25.594px] translate-y-full rotate-[-45deg] rounded-[7px] border-4 border-[#749D1C] bg-[#749D1C] shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`absolute -top-[250px] right-20 translate-y-full rounded-[7px] bg-[#749D1C] px-3 text-[32px] font-normal leading-normal text-white transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-100" : "opacity-0"
        }`}
      >
        Services
      </div>

      <div
        className={`absolute -top-[150px] h-[25.594px] w-[25.594px] translate-y-full rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}
      ></div>

      <div
        className={`absolute -top-[75px] h-[25.594px] w-[25.594px] translate-y-full rotate-[-45deg] rounded-[7px] border-4 border-[#1A4402] bg-white shadow-[0_0_49px_-2px_rgba(0,0,0,0.19)] transition-all duration-500 ease-out ${
          isHovered ? "translate-y-0 opacity-30" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};
