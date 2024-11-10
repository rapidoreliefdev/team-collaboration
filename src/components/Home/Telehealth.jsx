import React from "react";
import Talkrapido from "../../assets/images/telehealth1.png";

export default function Telehealth() {
  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[75px]">
      <h1 className="text-[#2F3C33] min-w-[380px] w-fit f-f-b text-[40px] font-extrabold leading-[45px] tracking-[-1.05px] mx-auto mb-[75px]">
        Let’s get you a doctor who gets you
      </h1>
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <div className="text-center md:text-start">
            <p className="text-[#2F3C33] f-f-b text-[40px] font-extrabold leading-[56px] tracking-[-1.2px]">
              Telehealth AI Chatbot
            </p>
            <p className="f-f-r max-w-[327px] mt-6 text-[#647067]  text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
              With Rapido, patients can schedule have virtual consultations with
              our telehealth Chatbot, whether you're seeking routine check-ups,
              specialist opinions, or mental health support.
            </p>
            <p className="f-f-r max-w-[327px] mt-5 text-[#647067]  text-[18px] font-normal leading-[160%] tracking-[-0.18px]">
              Join us on this inspiring journey as we harness the potential of
              AI to redefine healthcare, one innovative solution at a time.
            </p>
            <h5 className="text-[#647067] mt-5 f-f-r text-[14px] font-black tracking-[1.4px] uppercase">
              rapido chatbot booking Appointments
            </h5>
            <div className=" w-full md:w-[388px] bg-[#F5F5F5] rounded-[3px]">
              <div className=" w-[90%] md:w-[339px] h-[8px] bg-[#84CC16] rounded-[3px] mt-2"></div>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex justify-center w-full mt-10 md:mt-0 md:col-span-6 xl:col-span-3">
          <img
            src={Talkrapido}
            className="max-w-[262.507px] h-[450px]"
            alt=""
          />
        </div>

        <div className="col-span-12 mt-8 xl:mt-0 flex justify-center xl:justify-start xl:col-span-5 xl:ml-[70px]">
          <div className="text-center xl:text-start mt-4 lg:mt-0">
            <h1 className="text-[#2F3C33] mb-[45px] max-w-[388px] f-f-b text-[35px] font-extrabold leading-[45px] tracking-[-1.05px]">
              See specialists who accept your health insurance on our platform
            </h1>

            <div className="flex flex-col gap-[30px]">
              <article className="text-left">
                <h1 className="text-[25px] font-extrabold text-[#2F3C33]">
                  Mental Health Support
                </h1>
                <p className="text-lg font-normal text-[#647067] leading-[28.8px]">
                  Our platform also provides mental health support with licensed
                  therapists available for counseling sessions and emotional
                  support.
                </p>
              </article>
              <article className="text-left">
                <h1 className="text-[25px] font-extrabold text-[#2F3C33]">
                  SmartAlert System
                </h1>
                <p className="text-lg font-normal text-[#647067] leading-[28.8px]">
                  Users can send emergency alerts with a simple press of a
                  button.
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
