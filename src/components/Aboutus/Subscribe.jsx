import React from "react";
import Rock from "../../assets/images/Rock.svg";
import Grightarrow from "../../assets/images/Grightarrow.svg";

export default function Subscribe() {
  return (
    <div>
      <div className="mt-20 bg-grey-vlight py-9">
        <div className="mx-auto w-11/12 2xl:max-w-[964px]">
          <div className="grid grid-cols-12 items-center gap-4 xl:gap-16">
            <div className="col-span-12 lg:col-span-4">
              <img src={Rock} className="h-[120px] w-[189px]" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="f-f-r namein mt-3 h-11 w-full rounded-[50px] border border-green-dark py-4 pl-10 text-base text-grey-dark outline-none sm:mt-0 sm:h-[50px] sm:rounded-none sm:rounded-l-[50px]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="f-f-r namein mt-3 h-11 w-full rounded-[50px] border border-green-dark py-4 pl-10 text-base text-grey-dark outline-none sm:mt-0 sm:h-[50px] sm:rounded-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <button className="f-f-m mt-3 h-11 w-full rounded-[50px] bg-green-dark text-xl text-green sm:mt-0 sm:h-[50px] sm:rounded-none sm:rounded-r-[50px] md:text-5xl">
                    <ul className="inline-flex items-center space-x-3">
                      <li>SUBSCRIBE</li>
                      <li>
                        <img
                          src={Grightarrow}
                          className="h-[30px] w-[30px]"
                          alt=""
                        />
                      </li>
                    </ul>
                  </button>
                </div>
              </div>

              <div className="mt-[18px] flex">
                <div className="flex h-5 items-center">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="subscribe-set h-4 w-4 rounded-[5px] border border-green-dark bg-white checked:bg-green-dark"
                  />
                </div>

                <div className="f-f-r ml-2 text-sm text-red-vdark sm:text-base">
                  <label for="helper-checkbox">
                    {" "}
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[rgba(26, 68, 2, 0.50)] mt-20 border-b"></div>
    </div>
  );
}
