import { t } from "i18next";

const HelpSection = () => {
  return (
    <div className="mx-auto w-11/12 py-[104px] 2xl:max-w-[1161px]">
      <div className="flex flex-col items-center justify-between gap-[35px] lg:flex-row">
        <div className="w-full space-y-[18px]">
          <div className="h-[225px] w-full rounded-[25px] bg-[#749D1C]"></div>
          <div className="flex w-full items-center justify-between gap-[18px]">
            <div className="h-[225px] w-[40%] rounded-[25px] bg-[#FCB83F]"></div>
            <div className="h-[225px] w-[60%] rounded-[25px] bg-[#75BD4A]"></div>
          </div>
        </div>
        <div className="w-full">
          <h1 class="f-f-b max-w-[476px] text-[35px] font-bold leading-[50px] text-[#000] md:text-[45px]">
            {t("fundraise.howYouCanHelp")}
          </h1>
          <p className="f-f-r mt-4 text-[18px] font-normal leading-[35px] text-[rgba(38,38,38,0.76)] md:text-[22px]">
            {t("fundraise.ctaBody")}
          </p>
          <div className="mt-6 flex flex-col items-center justify-start gap-4 md:flex-row">
            <button
              style={{ fontVariant: "small-caps" }}
              className="f-f-m rounded-[13px] border-[1px] border-[#58FD0A] bg-[#1A4402] px-3 text-[24px] font-medium leading-normal text-[#FFF]"
            >
              {t("fundraise.donate")}
            </button>
            <button
              style={{ fontVariant: "small-caps" }}
              className="f-f-m rounded-[13px] border-[1px] border-[#58FD0A] bg-[#1A4402] px-3 text-[24px] font-medium leading-normal text-[#FFF]"
            >
              {t("fundraise.shopNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
