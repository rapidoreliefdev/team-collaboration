const HelpSection = () => {
  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[104px]">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-[35px]">
        <div className="w-full space-y-[18px]">
          <div className=" w-full bg-[#749D1C] h-[225px] rounded-[25px] "></div>
          <div className=" w-full gap-[18px] flex justify-between items-center">
            <div className="w-[40%] bg-[#FCB83F] h-[225px]  rounded-[25px] "></div>
            <div className=" w-[60%] bg-[#75BD4A] h-[225px]   rounded-[25px]"></div>
          </div>
        </div>
        <div className=" w-full">
          <h1 class="text-[#000] f-f-b text-[35px] md:text-[45px] font-bold leading-[50px] max-w-[476px]">
            How You Can Help Build Rapido Relief App
          </h1>
          <p className="text-[rgba(38,38,38,0.76)] f-f-r text-[18px] md:text-[22px] font-normal leading-[35px] mt-4">
            Building an app that transforms lives requires resources. With your
            help, we can bring Rapido Relief App to those who need it the most.
            <br />
            There are two ways you can support us: by donating or purchasing one
            of our carefully selected healthy products. Every contribution
            brings us one step closer to our goal.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-start items-center gap-4 ">
            <button
              style={{ fontVariant: "small-caps" }}
              className="text-[#FFF] rounded-[13px] border-[1px] border-[#58FD0A]  f-f-m text-[24px] font-medium leading-normal px-3 bg-[#1A4402] ">
              Donate Now
            </button>
            <button
              style={{ fontVariant: "small-caps" }}
              className="text-[#FFF] rounded-[13px] border-[1px] border-[#58FD0A]  f-f-m text-[24px] font-medium leading-normal px-3 bg-[#1A4402] ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
