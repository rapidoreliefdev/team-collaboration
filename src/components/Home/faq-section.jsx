import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F6FCF3]">
      <div className="mx-auto w-11/12 py-20 2xl:max-w-[1161px]">
        <h1 className="f-f-m text-center text-[40px] font-semibold leading-[64px] tracking-[-0.4px] text-black">
          {t("home.faq.heading")}
        </h1>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-0">
          <div className="max-w-[399px] space-y-7">
            <div>
              <h1 className="f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] text-black">
                {t("home.faq.subHeading1")}
              </h1>

              <p className="f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px] text-[#647067]">
                {t("home.faq.body1")}
              </p>
            </div>
            <div>
              <h1 className="f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] text-black">
                {t("home.faq.subHeading2")}
              </h1>

              <p className="f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px] text-[#647067]">
                {t("home.faq.body2")}
              </p>
            </div>
          </div>
          <div className="max-w-[399px] space-y-7">
            <div>
              <h1 className="f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] text-black">
                {t("home.faq.subHeading3")}
              </h1>

              <p className="f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px] text-[#647067]">
                {t("home.faq.body3")}
              </p>
            </div>
            <div>
              <h1 className="f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px] text-black">
                {t("home.faq.subHeading4")}
              </h1>

              <p className="f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px] text-[#647067]">
                {t("home.faq.body4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
