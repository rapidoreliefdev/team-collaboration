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
    message.success("Logout successful");
  };

  return (
    <div className="rapido-side #bg-white fixed left-0 top-0 z-50 h-screen max-h-screen w-[200px] overflow-y-auto overflow-x-hidden bg-green-dark py-[14px]">
      <div className="pl-[36px]">
        <img src={rapidologodashboard} alt="" className="h-[30px] w-[142px]" />
      </div>
      <h2 className="f-f-r ml-[50px] mt-[36px] text-base text-grey-light">
        Supper Admin
      </h2>
      <div className="pl-[54px]">
        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={Dashbord} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-green-light">Dashbord</li>
        </ul>

        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={individual2} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-light">Individual</li>
        </ul>

        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={Doctors} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-light">Doctors</li>
        </ul>

        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={Pharmacies} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-light">Pharmacies</li>
        </ul>

        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={Patients} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-light">Patients</li>
        </ul>

        <ul className="mt-4 inline-flex items-center space-x-[10px]">
          <li>
            <img src={Payments} className="h-3 w-3" alt="" />
          </li>
          <li className="f-f-b text-base text-blue-light">Payments</li>
        </ul>
      </div>
      <div className="mt-4 h-[1px] w-full bg-[#E8E8E8]"></div>

      <ul className="mt-[17px] inline-flex items-center space-x-[10px] pl-[54px]">
        <li>
          <img src={Help} className="h-3 w-3" alt="" />
        </li>
        <li className="f-f-b text-base text-blue-light">Help</li>
      </ul>
      <ul
        className="mt-[85px] inline-flex items-center space-x-[10px] pl-[54px]"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <li>
          <img src={Logout} className="h-[30px] w-[30px]" alt="" />
        </li>
        <li className="f-f-b text-base text-blue-light">Logout</li>
      </ul>

      <div className="whitebutton ml-[70px] mt-[140px] h-10 w-10"></div>
    </div>
  );
}
