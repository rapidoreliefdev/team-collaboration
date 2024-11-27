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
      <div className="#w-[900px] mx-auto grid h-full w-full grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="h-auto bg-green-dark py-10 lg:h-auto lg:py-[300px]">
            <img
              src={Loginmobile}
              className="mx-auto h-full w-[325px]"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-12 h-full bg-white p-4 sm:p-20 lg:col-span-6">
          <div className="text-center md:text-start">
            <ul className="mt-3 items-center 2xl:mt-0 2xl:inline-flex 2xl:space-x-7">
              <li className="f-f-m text-7xl text-green-dark">Welcome Back</li>
              <li className="mt-3 inline-flex h-[50px] w-[280px] items-center space-x-2 rounded-md border-[2px] border-green-dark p-[6px] 2xl:mt-0">
                <button
                  className={`f-f-r h-[40px] w-[150px] rounded-[5px] text-2xl text-white hover:bg-green-dark hover:text-white ${
                    activeTab === "Super Admin"
                      ? "bg-green-dark text-white"
                      : "bg-transparent text-green-dark"
                  }`}
                  onClick={() => setActiveTab("Super Admin")}
                >
                  Super Admin
                </button>
                <button
                  className={`f-f-r h-[40px] w-[113px] rounded-[5px] text-2xl text-white hover:bg-green-dark hover:text-white ${
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
            <h1 className="f-f-m text-xl text-green-dark">
              Email Address/Phone Number
            </h1>
            <input
              type="text"
              className="f-f-m mt-3 h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight 2xl:w-[450px]"
              placeholder="Email Address/Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="f-f-m text-tiny text-red-vlight">Required</p>
          </div>
          <div className="mt-[53px] w-full 2xl:w-[450px]">
            <h1 className="f-f-m text-xl text-green-dark">Password</h1>
            <input
              type="password"
              className="f-f-m mt-3 h-[50px] w-full rounded-[5px] border-[1.5px] border-green-dark pl-[18px] text-lg text-red-vlight 2xl:w-[450px]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ul className="inline-flex w-full items-center">
              <li>
                <p className="f-f-m text-tiny text-red-vlight">Required</p>
              </li>
              <li className="ml-auto">
                <a href="" className="f-f-r text-lg text-green-dark">
                  Forgot password?
                </a>
              </li>
            </ul>
          </div>
          <button
            className="f-f-r mt-[23px] h-10 w-[100px] rounded-[3px] bg-green-dark text-xl text-white"
            onClick={handleLogin}
          >
            Login
          </button>
          <h1 className="f-f-r mt-[10px] text-lg text-green-dark">
            Don’t have an account?{" "}
            <a href="/register" className="font-semibold">
              Create Account
            </a>
          </h1>
          <h2 className="connectset f-f-li-k mt-[45px] text-tiny">
            Or connect with
          </h2>
          <div className="mt-5 inline-flex w-full items-center justify-center space-x-4 sm:space-x-[39px]">
            <button className="h-[61px] w-[94px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Googlered} className="mx-auto h-6 w-6" alt="" />
            </button>
            <button className="h-[61px] w-[94px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Appleblack} className="mx-auto h-6 w-6" alt="" />
            </button>
            <button className="h-[61px] w-[94px] rounded-[5px] bg-white-vdark shadow-md shadow-red-dark">
              <img src={Facebookblue} className="mx-auto h-6 w-6" alt="" />
            </button>
          </div>
          <img
            src={Bottomlogo}
            className="mx-auto mt-[43px] h-[149px] w-[145px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
