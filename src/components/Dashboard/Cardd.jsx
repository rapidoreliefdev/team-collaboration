import React from "react";
import Vistor from "../../assets/images/Visitorimg.svg";
import Registervistors from "../../assets/images/Registervistors.svg";
import Circle from "../../assets/images/Circle.svg";
import registeryformecy from "../../assets/images/registeryformecy.svg";
import moonsolid from "../../assets/images/moon-solid-1.svg";
import infooutline from "../../assets/images/info_outline.svg";
import Manpic from "../../assets/images/Manpic.svg";
import Billicon from "../../assets/images/Billicon.svg";

export default function Cardd() {
  return (
    <div>
      {/* card section start */}
      <div className="mt-[26px] grid grid-cols-12 gap-[17px]">
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="visitorset h-[135px] w-full rounded-[15px] px-4 pb-[29px] pt-[26px]">
            <img
              src={Vistor}
              className="mx-auto h-[38.785px] w-[38.785px]"
              alt=""
            />
            <h1 className="f-f-b mt-[25px] text-center text-tiny text-white">
              Number of Visitor
            </h1>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="Registervistor h-[135px] w-full rounded-[15px] px-4 pb-[20px] pt-[26px]">
            <img
              src={Registervistors}
              className="h-[ 41.371px] mx-auto w-[31.028px]"
              alt=""
            />
            <h1 className="f-f-b mt-[16px] text-center text-tiny leading-tight text-white">
              Number of Register Visitor
            </h1>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="circleset h-[135px] w-full rounded-[15px] px-4 pb-[20px] pt-[22px]">
            <img src={Circle} className="mx-auto h-[50px] w-[50px]" alt="" />
            <h1 className="f-f-b mt-[11px] text-center text-tiny leading-tight text-white">
              Number of Register Professional
            </h1>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="registerpharmacy h-[135px] w-full rounded-[15px] px-4 pb-[20px] pt-[22px]">
            <img
              src={registeryformecy}
              className="mx-auto h-[50px] w-[50px]"
              alt=""
            />
            <h1 className="f-f-b mt-[11px] text-center text-tiny leading-tight text-white">
              Number of Register Pharmacies
            </h1>
          </div>
        </div>
      </div>
      {/* card section end  */}
      <div className="mt-[17px] grid grid-cols-12 items-center gap-4 sm:gap-0">
        <div className="col-span-12 sm:col-span-7">
          <div className="relative items-center">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pl-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
              >
                <g clip-path="url(#clip0_120_3571)">
                  <path
                    d="M8.69664 8.42635C8.6173 8.34701 8.60644 8.21007 8.6673 8.11552C9.14549 7.37975 9.42589 6.50379 9.42589 5.56261C9.42589 2.96296 7.31096 0.849121 4.71349 0.849121C2.11384 0.849121 0 2.96296 0 5.56261C0 8.16117 2.11384 10.275 4.71349 10.275C5.72531 10.275 6.66214 9.95006 7.4316 9.40448C7.5218 9.33927 7.65765 9.34796 7.73699 9.42621L9.42154 11.1108C9.43241 11.1216 9.44437 11.1325 9.45632 11.1412C9.47588 11.1575 9.55739 11.2336 9.63564 11.3129L9.83562 11.5118C9.91495 11.59 10.0432 11.59 10.1214 11.5118L10.8083 10.8249C10.8876 10.7456 10.8876 10.6174 10.8094 10.538L8.69664 8.42635ZM7.56419 7.75796C7.40877 7.96011 7.2338 8.14487 7.04035 8.30897C6.41217 8.8426 5.60032 9.16647 4.71349 9.16647C2.72572 9.16647 1.10854 7.5493 1.10854 5.56261C1.10854 3.57592 2.72572 1.95767 4.71349 1.95767C6.70017 1.95767 8.31734 3.57484 8.31734 5.56261C8.31734 6.38858 8.03369 7.14935 7.56419 7.75796Z"
                    fill="#CACCCF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_120_3571">
                    <rect
                      width="10.8681"
                      height="10.8681"
                      fill="white"
                      transform="translate(0 0.776367)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="f-f-r-l h-[35px] w-full rounded-[77.629px] bg-white pl-[33.18px] text-[10.092px] text-grey-vdark"
              placeholder="Search "
              required
            />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <div className="sm:text-end">
            <ul className="inline-flex items-center space-x-5">
              <li>
                <img src={moonsolid} className="h-[18px] w-[18px]" alt="" />
              </li>
              <li>
                <img src={infooutline} className="h-[24px] w-[24px]" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-2">
          <div className="text-end">
            <ul className="inline-flex items-center space-x-3">
              <li>
                <img
                  src={Billicon}
                  className="h-[ 31.052px] w-[29.085px]"
                  alt=""
                />
              </li>
              <li>
                <img
                  src={Manpic}
                  className="h-[ 31.052px] w-[29.085px]"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
