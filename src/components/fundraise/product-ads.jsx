import { t } from "i18next";
import React from "react";

const ProductAds = () => {
  return (
    <div className="mx-auto w-11/12 py-[104px] 2xl:max-w-[1161px]">
      <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-2 bg-[#f5f5f5] px-8 py-6 md:flex-row">
          <div>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[24px] font-medium leading-normal text-[#D89F4B]"
            >
              {t("productAds.productEssentials")}
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              class="max-w-[190px] text-[28px] font-medium leading-[32px] text-[#000] underline"
            >
              {t("productAds.bottleWithCork")}
            </p>
            <button class="f-f-m mt-3 border-[1px] border-[#000] px-4 py-1 text-[24px] font-medium uppercase text-[#000]">
              <span>{t("fundraise.buyNow")}/</span>
              <span className="text-[#D89F4B]"> $59.25</span>
            </button>
          </div>
          <img className="h-[230px]" src="/productads2.png" />
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-2 bg-[#f5f5f5] px-8 py-6 md:flex-row">
          <div>
            <p
              style={{ fontFamily: "Inter" }}
              class="text-[24px] font-medium leading-normal text-[#D89F4B]"
            >
              {t("productAds.productFurniture")}
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              class="max-w-[190px] text-[28px] font-medium leading-[32px] text-[#000] underline"
            >
              {t("productAds.plywoodChair")}
            </p>
            <button class="f-f-m mt-3 border-[1px] border-[#000] px-4 py-1 text-[24px] font-medium uppercase text-[#000]">
              <span>{t("fundraise.buyNow")}/</span>
              <span className="text-[#D89F4B]"> $59.25</span>
            </button>
          </div>
          <img className="h-[230px]" src="/productads1.png" />
        </div>
      </div>
    </div>
  );
};

export default ProductAds;
