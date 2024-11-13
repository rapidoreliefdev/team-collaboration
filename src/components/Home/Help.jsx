import React from "react";
import Helpmobile from "../../assets/images/help.png";
// import add from "../../assets/images/add.svg";
// import robo from "../../assets/images/robo.svg";
import doctors from "../../assets/images/undraw_doctors_p6aq 1.svg";
import fastLoading from "../../assets/images/undraw_fast_loading_re_8oi3 1.svg";
import customerSupport from "../../assets/images/customer-support-24_7.svg";
import { useTranslation } from "react-i18next";

// const features = [
//   {
//     title: "Mental Health Support",
//     description:
//       "Our platform also provides mental health support with licensed therapists available for counseling sessions and emotional support.",
//     iconSrc: add,
//   },
//   {
//     title: "SmartAlert System",
//     description:
//       "Users can send emergency alerts with a simple press of a button.",
//     iconSrc: robo,
//   },
//   {
//     title: "Patient Records Management",
//     description:
//       "Our health records are securely stored and easily accessible.",
//     iconSrc: add,
//   },
// ];

export default function Help() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("home.help.featureTitle1"),
      description: t("home.help.featureDescription1"),
      iconSrc: doctors,
    },
    {
      title: t("home.help.featureTitle2"),
      description: t("home.help.featureDescription2"),
      iconSrc: fastLoading,
    },
    {
      title: t("home.help.featureTitle3"),
      description: t("home.help.featureDescription3"),
      iconSrc: customerSupport,
    },
  ];
  return (
    <section className="mx-auto w-11/12 py-[50px] 2xl:max-w-[1161px]">
      <div className="max-md:flex-col flex flex-col items-center justify-start gap-5 lg:flex-row">
        {/* Mobile-phone image */}
        <div className="max-md:ml-0 max-md:w-full flex w-[33%] flex-col">
          <img
            loading="lazy"
            src={Helpmobile}
            alt="Rapido Relief App illustration"
            className="max-md:mt-10 aspect-[0.58] w-full grow object-contain"
          />
        </div>

        <div className="max-md:ml-0 max-md:w-full flex flex-col md:w-[67%]">
          <div className="max-md:mt-10 max-md:max-w-full mt-2 flex w-full flex-col items-start">
            <h1 className="f-f-r text-center text-[40px] font-semibold leading-[64px] tracking-[-0.4px] text-black md:text-start">
              {t("home.help.aboutHeading")}
            </h1>

            <p className="f-f-r text-[18px] font-medium leading-[28.8px] tracking-[-0.18px] text-[#647067]">
              {t("home.help.aboutBody")}
            </p>
            <div className="mt-6 flex w-full flex-wrap justify-center gap-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description, iconSrc }) {
  return (
    <div className="flex h-[250px] w-[220px] flex-col items-center gap-[25px] text-nowrap rounded-b-[20px] px-[22px] py-[28px] shadow-custom">
      <img
        loading="lazy"
        src={iconSrc}
        alt={`${title} icon`}
        className="aspect-square h-[125px] w-20 object-contain"
      />
      <div>
        <h5 className="f-f-r text-center text-[25px] font-bold leading-[32px] tracking-[-0.72px] text-green-dark">
          {title}
        </h5>
        <p className="f-f-r mt-2 text-center text-[15px] font-medium leading-[21.6px] tracking-[-0.18px] text-[#000000]">
          {description}
        </p>
      </div>
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /*<div className="flex  justify-start items-center gap-5">
      <img
        loading="lazy"
        src={iconSrc}
        alt={`${title} icon`}
        className="object-contain w-20 aspect-square"
      />
      <div>
        <h5 className="text-[#2F3C33]  f-f-r  text-[24px] font-extrabold leading-[32px] tracking-[-0.72px]">
          {title}
        </h5>
        <p className="text-[#647067] f-f-r mt-2   text-[18px] font-normal leading-[21.6px] tracking-[-0.18px]">
          {description}
        </p>
      </div>
    </div>*/
}
