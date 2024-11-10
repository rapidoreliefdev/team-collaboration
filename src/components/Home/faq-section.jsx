const FAQSection = () => {
  return (
    <div className="bg-[#F6FCF3]">
      <div className="w-11/12  mx-auto 2xl:max-w-[1161px] py-20">
        <h1 className="text-black f-f-m text-[40px] text-center font-semibold leading-[64px] tracking-[-0.4px]">
          FAQ's
        </h1>
        <div className=" flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-start ">
          <div className=" max-w-[399px] space-y-7">
            <div>
              <h1 className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px]">
                Swift access
              </h1>

              <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                Our telehealthcare platform offers immediate assistance from
                qualified healthcare professionals, ensuring rapid response in
                emergency situations.
              </p>
            </div>
            <div>
              <h1 className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px]">
                Quick assistance
              </h1>

              <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                Our platform facilitates quick connections with healthcare
                experts, providing swift solutions to medical emergencies.
              </p>
            </div>
          </div>
          <div className=" max-w-[399px] space-y-7">
            <div>
              <h1 className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px]">
                Rapid connections
              </h1>

              <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                Need urgent help? Our app connects you with healthcare
                professionals swiftly, ensuring timely assistance in
                emergencies.
              </p>
            </div>
            <div>
              <h1 className="text-black f-f-m text-[30px] font-semibold leading-[48px] tracking-[-0.3px]">
                Immediate help
              </h1>

              <p className="text-[#647067] f-f-r text-[18px] font-normal leading-[28.8px] tracking-[-0.18px]">
                Rapidly access qualified healthcare professionals through our
                app, receiving immediate help when you need it most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
