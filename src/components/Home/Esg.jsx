import React from "react";
import Button1 from "../../assets/images/Button1.svg";
import News from "../../assets/images/News.svg";
import OslerPillow from "../../assets/images/OslerPillow.svg";
import { useTranslation } from "react-i18next";

export default function Esg() {
  const { t } = useTranslation();
  return (
    <div className="py-20 pt-0">
      <div className="mx-auto max-w-[1440px]">
        <div className="group mb-3 flex h-28 w-full flex-col items-end justify-end gap-2">
          <div className="hidden rounded-[25px_1px_25px_25px] bg-[#58FD0A] px-4 py-2 text-[20px] font-semibold leading-normal text-[#1A4402] group-hover:block">
            {t("Esg.areYouACustomer")}
          </div>
          <div className="group flex h-11 cursor-pointer items-center justify-start gap-1 rounded-[25px_1px_25px_25px] bg-[#58FD0A] px-4 py-2 text-[20px] font-semibold leading-normal text-[#1A4402]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M0 25.1193L1.76568 18.6689C0.676128 16.7807 0.103617 14.6404 0.104664 12.4456C0.107804 5.58381 5.69162 0 12.5523 0C15.8817 0.00104664 19.0069 1.29783 21.3577 3.65067C23.7074 6.00352 25.001 9.13087 25 12.4571C24.9969 19.3199 19.413 24.9037 12.5523 24.9037C10.4695 24.9027 8.41706 24.3804 6.59905 23.3882L0 25.1193ZM6.90467 21.1348C8.65884 22.1762 10.3335 22.8 12.5481 22.801C18.2502 22.801 22.8952 18.1602 22.8983 12.455C22.9004 6.73826 18.2774 2.10374 12.5565 2.10165C6.85025 2.10165 2.20841 6.74244 2.20631 12.4466C2.20527 14.7754 2.88767 16.5191 4.03374 18.3434L2.98815 22.1615L6.90467 21.1348ZM18.8227 15.4159C18.7453 15.2861 18.5381 15.2087 18.2262 15.0527C17.9153 14.8968 16.3862 14.1443 16.1004 14.0407C15.8157 13.937 15.6085 13.8847 15.4002 14.1966C15.193 14.5075 14.5964 15.2087 14.4153 15.4159C14.2343 15.6232 14.0522 15.6493 13.7413 15.4934C13.4305 15.3374 12.4278 15.0098 11.2398 13.9496C10.3157 13.1248 9.69082 12.1065 9.50975 11.7946C9.32868 11.4837 9.49091 11.3152 9.64582 11.1603C9.78607 11.0211 9.95667 10.7971 10.1126 10.615C10.2707 10.435 10.3219 10.3052 10.4266 10.0969C10.5302 9.88968 10.4789 9.70757 10.4004 9.55162C10.3219 9.39672 9.70024 7.86549 9.44172 7.24274C9.18844 6.63673 8.93201 6.71837 8.74152 6.70895L8.14494 6.69848C7.9377 6.69848 7.60069 6.77594 7.316 7.08783C7.03131 7.39973 6.2275 8.15122 6.2275 9.68245C6.2275 11.2137 7.34217 12.6926 7.49707 12.8998C7.65302 13.107 9.68978 16.2491 12.8098 17.5961C13.5519 17.9164 14.1317 18.1079 14.5828 18.2513C15.328 18.4878 16.0062 18.4543 16.5421 18.3748C17.1397 18.2858 18.3821 17.6222 18.6417 16.8959C18.9012 16.1685 18.9012 15.5457 18.8227 15.4159Z"
                fill="#1A4402"
              />
            </svg>
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:w-auto group-hover:opacity-100">
              {t("Esg.talkOnWhatsapp")}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 2xl:max-w-[1161px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <h1 className="f-f-b tracking[-1.35px] text-[45px] font-bold leading-[56px] text-[#1A4402]">
              <span className="">ESG | Latest trends</span>
              <span className="text-[32px]"> & </span>
              <span
                style={{ fontFamily: "Rock Salt" }}
                className="tracking[-0.96px] text-[32px] text-[#58FD0A]"
              >
                {t("Esg.insights")}
              </span>
            </h1>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="mt-4 text-end sm:mt-0">
              <button className="h-[50px] w-full rounded-3xl bg-green-dark px-8 sm:w-fit lg:h-[64px]">
                <ul className="inline-flex items-center space-x-4">
                  <li className="f-f-b text-xl font-extrabold text-white">
                    {t("Esg.seeAllNews")}
                  </li>
                  <li>
                    <img src={Button1} className="h-6 w-6" alt="" />
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[41px] grid grid-cols-12 gap-[18px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="h-auto max-h-fit rounded-b-[24px] bg-grey-light p-[9px] md:min-h-[440px] xl:min-h-[430px]">
              <div className="h-[256px] w-full rounded-b-[25px] bg-white py-[91px]">
                <img src={News} className="mx-auto h-[72px] w-[72px]" alt="" />{" "}
              </div>
              <div className="mt-[15px] text-center">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    {t("Esg.date1")}
                  </li>
                  <li>
                    <img src={OslerPillow} className="h-1 w-1" alt="" />
                  </li>
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m mt-3 text-xl font-bold leading-normal text-green-dark">
                  {t("Esg.topic1")}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="mb-3 mt-[14px] inline-flex items-center space-x-3">
                  <li>
                    <button className="f-f-b h-[34px] w-[114px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="f-f-b h-[34px] w-[131px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="h-auto max-h-fit rounded-b-[24px] bg-grey-light p-[9px] md:min-h-[440px] xl:min-h-[430px]">
              <div className="h-[256px] w-full rounded-b-[25px] bg-white py-[91px]">
                <img src={News} className="mx-auto h-[72px] w-[72px]" alt="" />{" "}
              </div>
              <div className="mt-[15px] text-center">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    {t("Esg.date1")}
                  </li>
                  <li>
                    <img src={OslerPillow} className="h-1 w-1" alt="" />
                  </li>
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m mt-3 text-xl font-bold leading-normal text-green-dark">
                  {t("Esg.topic2")}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="mb-3 mt-[14px] inline-flex items-center space-x-3">
                  <li>
                    <button className="f-f-b h-[34px] w-[114px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="f-f-b h-[34px] w-[131px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="h-auto max-h-fit rounded-b-[24px] bg-grey-light p-[9px] md:min-h-[440px] xl:min-h-[430px]">
              <div className="h-[256px] w-full rounded-b-[25px] bg-white py-[91px]">
                <img src={News} className="mx-auto h-[72px] w-[72px]" alt="" />{" "}
              </div>
              <div className="mt-[15px] text-center">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    {t("Esg.date1")}
                  </li>
                  <li>
                    <img src={OslerPillow} className="h-1 w-1" alt="" />
                  </li>
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m mt-3 text-xl font-bold leading-normal text-green-dark">
                  {t("Esg.topic3")}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="mb-3 mt-[14px] inline-flex items-center space-x-3">
                  <li>
                    <button className="f-f-b h-[34px] w-[114px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telehealth
                    </button>
                  </li>
                  <li>
                    <button className="f-f-b h-[34px] w-[131px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      Telemedicine
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="h-auto max-h-fit rounded-b-[24px] bg-grey-light p-[9px] md:min-h-[440px] xl:min-h-[430px]">
              <div className="h-[256px] w-full rounded-b-[25px] bg-white py-[91px]">
                <img src={News} className="mx-auto h-[72px] w-[72px]" alt="" />
              </div>
              <div className="mt-[15px] text-center">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    {t("Esg.date1")}
                  </li>
                  <li>
                    <img src={OslerPillow} className="h-1 w-1" alt="" />
                  </li>
                  <li className="f-f-b text-sm font-extrabold uppercase text-grey-dark">
                    author name
                  </li>
                </ul>
                <h1 className="f-f-m mt-3 text-xl font-bold leading-normal text-green-dark">
                  {t("Esg.topic4")}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="mb-3 mt-[14px] inline-flex items-center space-x-3">
                  <li>
                    <button className="f-f-b h-[35px] w-[59px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
                      AI
                    </button>
                  </li>
                  <li>
                    <button className="f-f-b h-[35px] w-[178px] rounded-[24px] border border-green-dark text-xl font-extrabold text-green-dark">
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
