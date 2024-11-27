import React from "react";
import Register from "../../assets/images/register.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import Bottomlogo from "../../assets/images/Bottomlogo.svg";

export default function Signup() {
  return (
    <div>
      <div className="z-10 grid h-full w-full grid-cols-12 items-center">
        <div className="col-span-12 hidden h-full lg:col-span-6 lg:block">
          <div className="h-auto bg-green-dark py-10 lg:h-auto lg:py-[300px]">
            <img src={Register} className="mx-auto h-full w-[325px]" alt="" />
          </div>
        </div>

        <div className="col-span-12 h-full bg-white p-4 sm:p-20 lg:col-span-6">
          <img
            src={Bottomlogo}
            className="#mt-[43px] mx-auto mt-5 h-[149px] w-[145px] lg:hidden"
            alt=""
          />
          <div className="mt-10 w-full lg:mt-[78px] 2xl:w-[450px]">
            <h1 className="f-f-r mb-10 text-9xl font-medium text-[#404040] sm:mb-5">
              Sign up For Account
            </h1>

            {/* Signup form */}
            <form className="flex flex-col gap-4 sm:gap-[30px]">
              {/*First Name and Last Name */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-[55px] lg:gap-5">
                <div className="flex w-full flex-col gap-2">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="f-f-m h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight outline-none placeholder:text-green-dark/50 2xl:w-[450px]"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="f-f-m h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight outline-none placeholder:text-green-dark/50 2xl:w-[450px]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="f-f-r text-2xl font-medium text-[#404040]">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Your email Address"
                  className="f-f-m h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight outline-none placeholder:text-green-dark/50 2xl:w-[450px]"
                />
              </div>

              {/* Password and PasswordConfirm */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-[55px] lg:items-end lg:gap-5">
                <div className="flex w-full flex-col gap-2">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="f-f-m h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight outline-none placeholder:text-green-dark/50 2xl:w-[450px]"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm Your Password"
                    className="f-f-m h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight outline-none placeholder:text-green-dark/50 2xl:w-[450px]"
                  />
                </div>
              </div>

              {/* Terms and conditions */}
              <div className="flex items-end gap-[20px]">
                <input
                  type="checkbox"
                  className="peer relative h-[26px] w-[26px] shrink-0 appearance-none rounded-sm border-[1px] border-[#545454] checked:border-0 checked:bg-green-dark"
                />
                <svg
                  className="pointer-events-none absolute hidden h-[26px] w-[24px] stroke-white peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <label className="text-base font-medium text-[#404040]">
                  I accept all{" "}
                  <a href="/terms-and-condition" className="text-green-dark">
                    terms and condition
                  </a>
                </label>
              </div>
              {/* Submit buttons */}
              <button className="mx-auto mt-[28px] w-full rounded-[10px] bg-green-dark px-10 py-[17px] text-[25px] text-white sm:w-fit sm:px-[105px]">
                Sign Up
              </button>
            </form>
          </div>

          <img
            src={Bottomlogo}
            className="mx-auto mt-[43px] hidden h-[149px] w-[145px] lg:block"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="text-center md:text-start">
            <ul className="2xl:inline-flex items-center mt-3 2xl:mt-0 2xl:space-x-7">
              <li className="f-f-m text-green-dark text-7xl">Welcome Back</li>
              <li className="w-[280px] h-[50px] border-[2px] mt-3 2xl:mt-0 border-green-dark rounded-md p-[6px]  inline-flex space-x-2 items-center">
                <button className=" w-[150px] h-[40px] bg-green-dark rounded-[5px] f-f-r text-white text-2xl ">
                  Supper Admin
                </button>

                <button className="hover:bg-green-dark hover:text-white w-[113px] h-[40px] bg-transparent rounded-[5px] f-f-r text-green-dark text-2xl ">
                  Providers
                </button>
              </li>
            </ul>
          </div> */
}

{
  /* <div className="mt-[78px] w-full 2xl:w-[450px] ">
            <h1 className="f-f-m text-xl text-green-dark ">
              Email Address/Phone Number
            </h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px] mt-7 text-red-vlight"
              placeholder="Email Address/Phone Number"
            />
            <p className="f-f-m text-tiny text-red-vlight">Required</p>
          </div>
          <div className="mt-[53px] w-full 2xl:w-[450px] ">
            <h1 className="f-f-m text-xl text-green-dark ">Password</h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px] mt-7 text-red-vlight"
              placeholder="Password"
            />
            <ul className="inline-flex items-center w-full">
              <li>
                <p className="f-f-m text-tiny text-red-vlight">Required</p>
              </li>
              <li className="ml-auto">
                <a href="" className="f-f-r text-lg text-green-dark ">
                  Forgot password?
                </a>
              </li>
            </ul>
          </div>
          <button className="w-[100px] h-10 rounded-[3px] bg-green-dark f-f-r text-xl text-white mt-[23px]">
            Login
          </button>

          <h1 className="f-f-r text-green-dark text-lg mt-[10px]">
            Don’t have an account? 
            <a href="/register" className="font-semibold">
              {" "}
              Create Account
            </a>
          </h1>

          <h2 className="connectset mt-[45px] f-f-li-k text-tiny">
            Or connect with
          </h2>

          <div className="justify-center w-full inline-flex space-x-4 sm:space-x-[39px] items-center mt-5">
            <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Googlered} className="w-6 h-6 mx-auto" alt="" />
            </button>
            <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Appleblack} className="w-6 h-6 mx-auto" alt="" />
            </button>
            <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Facebookblue} className="w-6 h-6 mx-auto" alt="" />
            </button>
          </div> */
}
