import React from "react";
import Joinus from "../../assets/images/Joinus.svg";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  const { t } = useTranslation();
  return (
    <div className="my-[66px] bg-white">
      <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
        <div className="mt-5 rounded-b-[25px] bg-green-vlight p-2 md:mt-16">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 p-6 lg:col-span-6">
              <h1 className="f-f-m font-small-caps text-[25px] font-medium uppercase leading-[32px] text-[#749D1C]">
                {t("home.joinUs.heading")}
              </h1>

              <p className="f-f-r tracking[-0.4px] mt-9 text-center text-6xl font-normal text-[#1AA928] md:text-start md:text-[40px] md:leading-[50px]">
                {t("home.joinUs.body")}
              </p>

              <div className="text-center lg:text-start">
                <button className="f-f-b mt-[30px] h-[50px] w-[217px] rounded-3xl bg-green-dark text-xl font-extrabold text-white lg:mx-0">
                  {t("home.joinUs.buttonText")}
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <img src={Joinus} className="h-auto w-full lg:h-[400px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
