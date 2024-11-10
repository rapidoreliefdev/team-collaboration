import React, { useState } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import Bottomlogo from "../../assets/images/Bottomlogo.svg";
import { useAuth } from "../services/authService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Super Admin");

  const handleLogin = async () => {
    const credentials = { email, password, activeTab };
    try {
      await login(credentials)
        .then((res) => {
          if (res) {
            if (res) {
              message.success("Super Admin login successfull");
              navigate("/dashboard");
            }
          } else {
            message.error("Invalid email or password");
          }
        })
        .catch(() => {});
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 items-center w-[900px] mx-auto">
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-green-dark h-auto lg:h-auto py-10 lg:py-[300px]">
            <img
              src={Loginmobile}
              className="w-[325px] h-full mx-auto"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 p-4 sm:p-20 bg-white">
          <div className="text-center md:text-start">
            <ul className="2xl:inline-flex items-center mt-3 2xl:mt-0 2xl:space-x-7">
              <li className="f-f-m text-green-dark text-7xl">Welcome Back</li>
              <li className="w-[280px] h-[50px] border-[2px] mt-3 2xl:mt-0 border-green-dark rounded-md p-[6px]  inline-flex space-x-2 items-center">
                <button
                  className={`hover:bg-green-dark hover:text-white w-[150px] h-[40px] rounded-[5px] f-f-r text-white text-2xl ${
                    activeTab === "Super Admin"
                      ? "bg-green-dark text-white"
                      : "bg-transparent text-green-dark"
                  }`}
                  onClick={() => setActiveTab("Super Admin")}
                >
                  Super Admin
                </button>
                <button
                  className={`hover:bg-green-dark hover:text-white w-[113px] h-[40px] rounded-[5px] f-f-r text-white text-2xl ${
                    activeTab === "Provider"
                      ? "bg-green-dark text-white"
                      : "bg-transparent text-green-dark"
                  }`}
                  onClick={() => setActiveTab("Provider")}
                >
                  Provider
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-[65px] w-full 2xl:w-[450px]">
            <h1 className="f-f-m text-xl text-green-dark ">
              Email Address/Phone Number
            </h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px] mt-3 text-red-vlight"
              placeholder="Email Address/Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="f-f-m text-tiny text-red-vlight">Required</p>
          </div>
          <div className="mt-[53px] w-full 2xl:w-[450px]">
            <h1 className="f-f-m text-xl text-green-dark ">Password</h1>
            <input
              type="password"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full 2xl:w-[450px] h-[50px] f-f-m text-lg pl-[18px] mt-3 text-red-vlight"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            className="w-[100px] h-10 rounded-[3px] bg-green-dark f-f-r text-xl text-white mt-[23px]"
            onClick={handleLogin}
          >
            Login
          </button>
          <h1 className="f-f-r text-green-dark text-lg mt-[10px]">
            Don’t have an account?{" "}
            <a href="/register" className="font-semibold">
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
          </div>
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
