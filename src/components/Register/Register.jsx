import React from "react";
import Register from "../../assets/images/register.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import Bottomlogo from "../../assets/images/Bottomlogo.svg";

export default function Signup() {
  return (
    <div>
      <div className="grid grid-cols-12 items-center z-10">
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-green-dark h-auto lg:h-auto py-10 lg:py-[300px]">
            <img src={Register} className="w-[325px] h-full mx-auto" alt="" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 p-4 sm:p-20  bg-white">
          {/* <div className="text-center md:text-start">
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
          </div> */}

          <div className="mt-[78px] w-full 2xl:w-[450px]">
            <h1 className="f-f-r text-9xl font-medium text-[#404040]">
              Sign up For Account
            </h1>
            <form className="flex flex-col gap-[30px]">
              {/*First Name and Last Name */}
              <div className="flex gap-[55px]">
                <div className="flex flex-col gap-2 w-full">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="rounded-[5px] outline-none border-[1.5px] border-green-dark placeholder:text-green-dark/50 w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px]  text-red-vlight"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="rounded-[5px] outline-none border-[1.5px] border-green-dark placeholder:text-green-dark/50 w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px]  text-red-vlight"
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
                  className="rounded-[5px] outline-none border-[1.5px] border-green-dark placeholder:text-green-dark/50 w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px]  text-red-vlight"
                />
              </div>

              {/* Password and PasswordConfirm */}
              <div className="flex gap-[55px]">
                <div className="flex flex-col gap-2 w-full">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="rounded-[5px] outline-none border-[1.5px] border-green-dark placeholder:text-green-dark/50 w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px]  text-red-vlight"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="f-f-r text-2xl font-medium text-[#404040]">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm Your Password"
                    className="rounded-[5px] outline-none border-[1.5px] border-green-dark placeholder:text-green-dark/50 w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px]  text-red-vlight"
                  />
                </div>
              </div>

              {/* Terms and conditions */}
              <div className="flex gap-[20px] items-end">
                <input
                  type="checkbox"
                  className="appearance-none relative peer shrink-0 w-[26px] h-[26px] border-[1px] border-[#545454] rounded-sm checked:bg-green-dark checked:border-0"
                />
                <svg
                  className="
                  absolute 
                  w-[24px] h-[26px] pointer-events-none
                  hidden peer-checked:block stroke-white"
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
                <label className="text-[#404040] font-medium text-base">
                  I accept all{" "}
                  <a href="/terms-and-condition" className="text-green-dark">
                    terms and condition
                  </a>
                </label>
              </div>
              {/* Submit buttons */}
              <button className="bg-green-dark text-[25px] px-[105px] py-[17px] text-white rounded-[10px] w-fit mx-auto mt-[28px]">
                Sign Up
              </button>
            </form>
          </div>

          {/* <div className="mt-[78px] w-full 2xl:w-[450px] ">
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
          </div> */}

          <img
            src={Bottomlogo}
            className="w-[145px] h-[149px] mx-auto mt-[43px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
