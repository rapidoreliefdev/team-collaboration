import React from "react";
import rapidologodashboard from "../../assets/images/rapidologodashboard.svg";
import Dashbord from "../../assets/images/Dashbord.svg";
import individual2 from "../../assets/images/individual2.svg";
import Doctors from "../../assets/images/Doctors.svg";
import Pharmacies from "../../assets/images/Pharmacies.svg";
import Patients from "../../assets/images/Patients.svg";
import Payments from "../../assets/images/Payments.svg";
import Help from "../../assets/images/Help.svg";
import Logout from "../../assets/images/Logout.svg";
import { useAuth } from "../services/authService";
import { message } from "antd";

export default function Header() {
  const { logout } = useAuth();
  // Function to handle logout
  const handleLogout = () => {
    logout();
    message.success("Logout successful")
  };

  return (
    <div className="rapido-side bg-white w-[200px] fixed top-0 left-0 z-50  py-[14px] h-screen max-h-screen overflow-y-auto overflow-x-hidden">
      <div className=" pl-[36px] ">
        <img
          src={rapidologodashboard}
          alt=""
          className=" w-[142px] h-[30px] "
        />
      </div>
      <h2 className=" f-f-r text-base text-grey-vdark ml-[50px] mt-[36px] ">
        Supper Admin
      </h2>
      <div className=" pl-[54px] ">
        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={Dashbord} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-green-dark">Dashbord</li>
        </ul>

        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={individual2} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-vdark">Individual</li>
        </ul>

        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={Doctors} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-vdark">Doctors</li>
        </ul>

        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={Pharmacies} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-vdark">Pharmacies</li>
        </ul>

        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={Patients} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-vdark">Patients</li>
        </ul>

        <ul className="inline-flex items-center space-x-[10px] mt-4">
          <li>
            <img src={Payments} className="w-3 h-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-vdark">Payments</li>
        </ul>
      </div>
      <div className="h-[1px] w-full bg-[#E8E8E8] mt-4"></div>

      <ul className="inline-flex items-center space-x-[10px] mt-[17px] pl-[54px]">
        <li>
          <img src={Help} className="w-3 h-3" alt="" />
        </li>
        <li className="f-f-b text-base text-blue-vdark">Help</li>
      </ul>
      <ul
        className="inline-flex items-center space-x-[10px] mt-[85px] pl-[54px]"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <li>
          <img src={Logout} className="w-[30px] h-[30px]" alt="" />
        </li>
        <li className="f-f-b text-base text-blue-vdark">Logout</li>
      </ul>

      <div className="w-10 h-10 whitebutton ml-[70px] mt-[140px]"></div>
    </div>
  );
}
