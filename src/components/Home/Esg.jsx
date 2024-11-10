import React from "react";
import Button1 from "../../assets/images/Button1.svg";
import News from "../../assets/images/News.svg";
import OslerPillow from "../../assets/images/OslerPillow.svg";

export default function Esg() {
  return (
    <div className="py-20 pt-0">
      <div className=" max-w-[1440px] mx-auto">
        <div className="w-full h-28 flex flex-col justify-end items-end gap-2 mb-3 group">
          <div className="hidden group-hover:block text-[20px] font-semibold leading-normal text-[#1A4402] rounded-[25px_1px_25px_25px] bg-[#58FD0A] py-2 px-4">
            Are you already a customer and need support?
          </div>
          <div className="text-[20px] h-11 cursor-pointer group font-semibold leading-normal text-[#1A4402] rounded-[25px_1px_25px_25px] bg-[#58FD0A] py-2 px-4 flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none">
              <path
                d="M0 25.1193L1.76568 18.6689C0.676128 16.7807 0.103617 14.6404 0.104664 12.4456C0.107804 5.58381 5.69162 0 12.5523 0C15.8817 0.00104664 19.0069 1.29783 21.3577 3.65067C23.7074 6.00352 25.001 9.13087 25 12.4571C24.9969 19.3199 19.413 24.9037 12.5523 24.9037C10.4695 24.9027 8.41706 24.3804 6.59905 23.3882L0 25.1193ZM6.90467 21.1348C8.65884 22.1762 10.3335 22.8 12.5481 22.801C18.2502 22.801 22.8952 18.1602 22.8983 12.455C22.9004 6.73826 18.2774 2.10374 12.5565 2.10165C6.85025 2.10165 2.20841 6.74244 2.20631 12.4466C2.20527 14.7754 2.88767 16.5191 4.03374 18.3434L2.98815 22.1615L6.90467 21.1348ZM18.8227 15.4159C18.7453 15.2861 18.5381 15.2087 18.2262 15.0527C17.9153 14.8968 16.3862 14.1443 16.1004 14.0407C15.8157 13.937 15.6085 13.8847 15.4002 14.1966C15.193 14.5075 14.5964 15.2087 14.4153 15.4159C14.2343 15.6232 14.0522 15.6493 13.7413 15.4934C13.4305 15.3374 12.4278 15.0098 11.2398 13.9496C10.3157 13.1248 9.69082 12.1065 9.50975 11.7946C9.32868 11.4837 9.49091 11.3152 9.64582 11.1603C9.78607 11.0211 9.95667 10.7971 10.1126 10.615C10.2707 10.435 10.3219 10.3052 10.4266 10.0969C10.5302 9.88968 10.4789 9.70757 10.4004 9.55162C10.3219 9.39672 9.70024 7.86549 9.44172 7.24274C9.18844 6.63673 8.93201 6.71837 8.74152 6.70895L8.14494 6.69848C7.9377 6.69848 7.60069 6.77594 7.316 7.08783C7.03131 7.39973 6.2275 8.15122 6.2275 9.68245C6.2275 11.2137 7.34217 12.6926 7.49707 12.8998C7.65302 13.107 9.68978 16.2491 12.8098 17.5961C13.5519 17.9164 14.1317 18.1079 14.5828 18.2513C15.328 18.4878 16.0062 18.4543 16.5421 18.3748C17.1397 18.2858 18.3821 17.6222 18.6417 16.8959C18.9012 16.1685 18.9012 15.5457 18.8227 15.4159Z"
                fill="#1A4402"
              />
            </svg>
            <span className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
              Talk on WhatsApp
            </span>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <h1 className="text-[#1A4402]  f-f-b text-[45px] font-bold leading-[56px] tracking[-1.35px]">
              <span className="">ESG | Latest trends</span>
              <span className="text-[32px]"> & </span>
              <span
                style={{ fontFamily: "Rock Salt" }}
                className="text-[32px]  text-[#58FD0A] tracking[-0.96px]">
                insights
              </span>
            </h1>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="text-end mt-4 sm:mt-0">
              <button className="w-full sm:w-[215px] h-[50px] lg:h-[64px] bg-green-dark rounded-3xl  ">
                <ul className="inline-flex items-center space-x-4">
                  <li className="f-f-b font-extrabold text-xl text-white">
                    See All News
                  </li>
                  <li>
                    <img src={Button1} className="h-6 w-6" alt="" />
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[18px] mt-[41px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className="w-[72px] h-[72px] mx-auto" alt="" />{" "}
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    Jun 25, 2024
                  </li>
                  <li>
                    <img src={OslerPillow} className="w-1 h-1" alt="" />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-xl mt-3 leading-normal">
                  Breaking Barriers: How Rapido AI Transforms Mental Health
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className="w-[72px] h-[72px] mx-auto" alt="" />{" "}
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    Jun 25, 2024
                  </li>
                  <li>
                    <img src={OslerPillow} className="w-1 h-1" alt="" />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-xl mt-3 leading-normal">
                  Empowering Patients: Rapido’s Telehealth Success Stories
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className="w-[72px] h-[72px] mx-auto" alt="" />{" "}
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    Jun 25, 2024
                  </li>
                  <li>
                    <img src={OslerPillow} className="w-1 h-1" alt="" />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-xl mt-3 leading-normal">
                  Rapido’s AI-Driven Telehealth: Bridging the Gap Healthcare
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px] ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className="w-[72px] h-[72px] mx-auto" alt="" />
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    Jun 25, 2024
                  </li>
                  <li>
                    <img src={OslerPillow} className="w-1 h-1" alt="" />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-xl mt-3 leading-normal">
                  The Future of Telemedicine: Insights from Experts
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[59px] h-[35px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      AI
                    </button>
                  </li>
                  <li>
                    <button className="w-[178px] h-[35px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark">
                      Machine Learning
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
