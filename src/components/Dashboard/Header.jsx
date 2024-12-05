import React from "react";
import Greentik from "../../assets/images/Greentick.svg";
import Drawerr from "./Drawer";
import Calendar from "./Calendar";
export default function Header() {
  return (
    <header>
      <div className="#grid #grid-cols-12 flex h-[82px] items-center justify-between py-5">
        <div className="f-f-b flex h-full w-[50px] items-center gap-2 text-4xl text-green-dark">
          <img
            src="assets/images/rapido-relief-logo-small.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="#col-span-4 h-full w-[50px]">
          {/* <Calendar/> */}
          <div className="flex h-full w-full items-center lg:hidden">
            <Drawerr />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="f-f-b #col-span-8 text-center text-3xl text-[#4E4E4E] sm:text-[25px]">
          Welcome, <span className="text-green-dark">Supper Admin - </span>{" "}
          <br className="sm:hidden" />
          <span className="text-green">Michael Tosin Adesanwo</span>
        </h1>
        <SearchAndProfileBar />
      </div>
    </header>
  );
}

const SearchAndProfileBar = () => {
  return (
    <div className="h-fit w-full bg-green-vlight p-[10px] lg:h-[61px] lg:rounded-[30px]">
      <div className="flex h-16 w-full">
        <img
          src="assets/images/icon-bell-small.svg"
          alt=""
          className="h-6 w-6"
        />
        <img src="assets/images/moon-solid-1.svg" alt="" className="h-6 w-6" />
        <img src="assets/images/info_outline.svg" alt="" className="h-6 w-6" />
        <img src="" alt="" />
      </div>
      <div className="flex h-[41px] w-full items-center gap-4 rounded-[30px] bg-[#EAF9D6] px-4">
        <img
          src="assets/images/Search-Icon.svg"
          alt=""
          className="h-[11px] w-[11px] stroke-green-dark"
        />
        <input
          type="text"
          className="h-full w-full rounded-r-[30px] border bg-inherit text-[14px] text-[#749D1C] outline-none placeholder:text-[14px] placeholder:text-[#749D1C]"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

{
  /* <div className="col-span-8">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <img src={Greentik} className="h-5 w-5" alt="" />
            </li>
            <li className="f-f-m text-lg text-black-vdark">LIVE</li>
          </ul>
        </div> */
}
