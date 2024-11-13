import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Vision() {
  const { t } = useTranslation();
  return (
    <div className="#pb-[86px] mx-auto w-11/12 pt-[40px] 2xl:max-w-[1161px]">
      <div className="grid gap-[24px] lg:grid-cols-3">
        <Card
          name={t("home.vision.cardName1")}
          description={t("home.vision.cardDescription1")}
        />
        <Card
          name={t("home.vision.cardName2")}
          description={t("home.vision.cardDescription2")}
        />
        <Card
          name={t("home.vision.cardName3")}
          description={t("home.vision.cardDescription3")}
        />
      </div>
    </div>
  );
}

const Card = ({ name, description }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-[#EAF9D6] p-[24px] pb-10">
        <div className="f-f-r text-[25px] font-semibold leading-[30px] text-[#4d3e3e]">
          {name}
        </div>
        <p className="f-f-r mt-3 text-[20px] font-normal leading-[30px] text-[#647067]">
          {description}
        </p>
      </div>
    </div>
  );
};
