import React from "react";
import Carimg from "../../assets/images/Carimg.svg";
import Zeowaiting from "../../assets/images/Zeowaiting.svg";
import Certifieddoctor from "../../assets/images/Certifieddoctor.svg";
import { useTranslation } from "react-i18next";

export default function Travaltime() {
  const { t } = useTranslation();
  return (
    <div className="bg-parrot-dark">
      <div className="mx-auto w-11/12 py-14 2xl:max-w-[1154px]">
        <div className="grid grid-cols-12 gap-2 sm:gap-10 2xl:gap-20">
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="text-center">
              <ul className="items-center space-x-5 sm:inline-flex">
                <img
                  src={Carimg}
                  className="mx-auto h-[76px] w-[91px] sm:mx-0"
                  alt=""
                />
                <h1 className="f-f-r mt-2 text-center text-2xl text-white sm:mt-0 sm:text-start lg:text-5xl">
                  {t("travalTime.cutDownOnTime")}
                </h1>
              </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="text-center">
              <ul className="items-center space-x-5 sm:inline-flex">
                <img
                  src={Zeowaiting}
                  className="sm:mx-06px] mx-auto h-[76px] w-[91px]"
                  alt=""
                />
                <h1 className="f-f-r mt-2 text-center text-2xl text-white sm:mt-0 sm:text-start lg:text-5xl">
                  {t("travalTime.zeroWaitingPeriod")}{" "}
                </h1>
              </ul>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="text-center">
              <ul className="items-center space-x-5 sm:inline-flex">
                <img
                  src={Certifieddoctor}
                  className="mx-auto h-[76px] w-[91px] sm:mx-0"
                  alt=""
                />
                <h1 className="f-f-r mt-2 text-center text-2xl text-white sm:mt-0 sm:text-start lg:text-5xl">
                  {t("travalTime.certifiedExperts")}
                </h1>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
