import React from "react";
import Helpmobile from "../../assets/images/help.png";
// import add from "../../assets/images/add.svg";
// import robo from "../../assets/images/robo.svg";
import doctors from "../../assets/images/undraw_doctors_p6aq 1.svg";
import fastLoading from "../../assets/images/undraw_fast_loading_re_8oi3 1.svg";
import customerSupport from "../../assets/images/customer-support-24_7.svg";

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
const features = [
  {
    title: "All-in-one",
    description: "Complete healthcare",
    iconSrc: doctors,
  },
  {
    title: "Fast & Accurate",
    description: "Test reports",
    iconSrc: fastLoading,
  },
  {
    title: "24/7",
    description: "Customer support",
    iconSrc: customerSupport,
  },
];

export default function Help() {
  return (
    <section className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[50px]">
      <div className="flex flex-col justify-start items-center lg:flex-row gap-5 max-md:flex-col">
        {/* Mobile-phone image */}
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={Helpmobile}
            alt="Rapido Relief App illustration"
            className="object-contain grow w-full aspect-[0.58] max-md:mt-10"
          />
        </div>

        <div className="flex flex-col md:w-[67%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col items-start mt-2 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-black text-center md:text-start f-f-r text-[40px] font-semibold leading-[64px] tracking-[-0.4px]">
              About Rapido Relief App
            </h1>

            <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
              Rapido Relief App is revolutionizing emergency healthcare by
              offering immediate access to qualified professionals through our
              innovative telehealthcare platform. We prioritize rapid response
              and efficient care to ensure your peace of mind during
              emergencies.
              <br />
              <br />
              Experience peace of mind knowing that Rapido Relief App offers
              immediate access to quality healthcare professionals. From medical
              advice to urgent care, we ensure swift and efficient connections
              when you need it the most.
            </p>
            <div className="flex flex-wrap gap-6 mt-6 w-full">
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
    <div className="flex flex-col items-center gap-[25px] px-[22px] py-[28px] rounded-b-[20px] shadow-custom w-1/4 text-nowrap">
      <img
        loading="lazy"
        src={iconSrc}
        alt={`${title} icon`}
        className="object-contain w-20 aspect-square"
      />
      <div>
        <h5 className="text-green-dark text-center  f-f-r  text-[25px] font-bold leading-[32px] tracking-[-0.72px]">
          {title}
        </h5>
        <p className="text-[#000000] f-f-r mt-2 text-center text-[15px] font-medium leading-[21.6px] tracking-[-0.18px]">
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
