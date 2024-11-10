import React from "react";

export default function Vision() {
  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] pt-[40px] #pb-[86px]">
      <div className="grid lg:grid-cols-3 gap-[24px]">
        <Card
          name=" Telemedicine Consultations"
          description="On-demand teleconsultations with general physicians for
              preliminary medical advice and non-emergency healthcare concerns."
        />
        <Card
          name="Virtual Therapy Sessions"
          description="Access to virtual mental health
sessions with licensed therapists
to provide support and guidance
in times of need."
        />
        <Card
          name="Prescription Consultations"
          description="Immediate access to prescription
consultations with experienced
pharmacists for quick and
convenient medication assistance."
        />
      </div>
    </div>
  );
}

const Card = ({ name, description }) => {
  return (
    <div className=" w-full flex justify-center">
      <div className=" p-[24px] pb-10 bg-[#EAF9D6]">
        <div className=" text-[#000] text-[25px] font-semibold  f-f-r leading-[30px]">
          {name}
        </div>
        <p className=" text-[#647067] font-normal leading-[30px] f-f-r text-[20px] mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};
