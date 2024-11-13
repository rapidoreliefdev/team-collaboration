import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-11/12 pb-[35px] pt-[204px] 2xl:max-w-[1200px]">
      <ul className="inline-flex items-center">
        <li>
          <div className="h-[1px] w-[100px] bg-green"></div>
        </li>
        <li className="ml-[22px]">
          <h2 className="f-f-m text-4xl text-green">
            {t("aboutPage.aboutUs")}
          </h2>
        </li>
      </ul>
    </div>
  );
}
