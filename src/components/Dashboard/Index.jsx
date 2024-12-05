import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Hero from "./Hero";

export default function index() {
  return (
    <>
      <div className="bg-grey-light">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="px-5 lg:ml-[200px] lg:p-5 lg:pb-[42px] lg:pl-[41px] lg:pr-[27px] lg:pt-[21px]">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}
