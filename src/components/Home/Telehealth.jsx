import React from "react";
import Talkrapido from "../../assets/images/telehealth1.png";
import { useTranslation } from "react-i18next";

export default function Telehealth() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-11/12 py-[75px] 2xl:max-w-[1161px]">
      <h1 className="f-f-b mx-0 mb-[75px] w-[300px] text-center text-[40px] font-extrabold leading-[45px] tracking-[-1.05px] text-[#2F3C33] sm:min-w-[380px] sm:text-right">
        {t("home.telehealth.heading")}
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <div className="text-center md:text-start">
            <p className="f-f-b text-[40px] font-extrabold leading-[56px] tracking-[-1.2px] text-[#2F3C33]">
              {t("home.telehealth.subHeading1")}
            </p>
            <p className="f-f-r mt-6 max-w-[327px] text-[18px] font-normal leading-[160%] tracking-[-0.18px] text-[#647067]">
              {t("home.telehealth.body1")}
            </p>
            <p className="f-f-r mt-5 max-w-[327px] text-[18px] font-normal leading-[160%] tracking-[-0.18px] text-[#647067]">
              {t("home.telehealth.body2")}
            </p>
            <h5 className="f-f-r mt-5 text-[14px] font-black uppercase tracking-[1.4px] text-[#647067]">
              {t("home.telehealth.text")}
            </h5>
            <div className="w-full rounded-[3px] bg-[#F5F5F5] md:w-[388px]">
              <div className="mt-2 h-[8px] w-[90%] rounded-[3px] bg-[#84CC16] md:w-[339px]"></div>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-10 flex w-full justify-center md:col-span-6 md:mt-0 xl:col-span-3">
          <img
            src={Talkrapido}
            className="h-[450px] max-w-[262.507px]"
            alt=""
          />
        </div>

        <div className="col-span-12 mt-8 flex justify-center xl:col-span-5 xl:ml-[70px] xl:mt-0 xl:justify-start">
          <div className="mt-4 text-center lg:mt-0 xl:text-start">
            <h1 className="f-f-b mb-[45px] max-w-[388px] text-[35px] font-extrabold leading-[45px] tracking-[-1.05px] text-[#2F3C33]">
              {t("home.telehealth.subHeading2")}
            </h1>

            <div className="flex flex-col gap-[30px]">
              <article className="text-left">
                <h1 className="text-[25px] font-extrabold text-[#2F3C33]">
                  {t("home.telehealth.subHeading3")}
                </h1>
                <p className="text-lg font-normal leading-[28.8px] text-[#647067]">
                  {t("home.telehealth.body3")}
                </p>
              </article>
              <article className="text-left">
                <h1 className="text-[25px] font-extrabold text-[#2F3C33]">
                  {t("home.telehealth.subHeading4")}
                </h1>
                <p className="text-lg font-normal leading-[28.8px] text-[#647067]">
                  {t("home.telehealth.body4")}
                </p>
              </article>
            </div>

            {/* <h1 className="text-[#2F3C33] max-w-[388px] f-f-b text-[35px] font-extrabold leading-[45px] tracking-[-1.05px]">
              Check providers and read reviews from users
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
