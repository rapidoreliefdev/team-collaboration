import React, { useEffect, useState } from "react";
import Tableimg1 from "../../assets/images/Tableimg1.svg";
import pen from "../../assets/images/pen.svg";
import Delete from "../../assets/images/delete.svg";
import Drag from "../../assets/images/drag.svg";
import Dotss from "../../assets/images/3dot.svg";
import MAP from "../../assets/images/MAP.svg";
import Right from "../../assets/images/right.svg";
import { deleteUser, getUsers } from "../services/api";
import { message } from "antd";

export default function Table() {
  const [userList, setUserList] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeSelection, setActiveSelection] = useState("Waiting List");
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [regionCounts, setRegionCounts] = useState({});
  const [countryCounts, setCountryCounts] = useState({});
  const [asiaCount, setAsiaCount] = useState();
  const [europeCount, setEuropeCount] = useState();
  const [africaCount, setAfricaCount] = useState();
  const [americaCount, setAmericaCount] = useState();
  const [australiaCount, setAustraliaCount] = useState({
    NorthAmerica: 0,
    SouthAmerica: 0,
    Europe: 0,
    Asia: 0,
    Africa: 0,
    Oceania: 0,
    Antarctica: 0,
  });

  useEffect(() => {
    getUsers().then((response) => {
      setUserList(response.data);
      filterUserList(response.data, activeSelection);
      setLoading(false);
      countRegionUsers(response.data);
    });
  }, [activeSelection]);

  // Function to format date
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Function to format visit time
  const formatVisitTime = (createdAt) => {
    const date = new Date(createdAt);
    const startTime = `${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
    const endTime = `${("0" + (date.getHours() + 1)).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
    return `${startTime}-${endTime}${date.getHours() >= 12 ? "pm" : "am"}`;
  };

  const filterUserList = (users, selection) => {
    switch (selection) {
      case "Waiting List":
        setFilteredUserList(users.filter((user) => user.role === "individual"));
        break;
      case "Doctors":
        setFilteredUserList(
          users.filter(
            (user) =>
              user.role === "professional" &&
              user.profession.toLowerCase().includes("doctor"),
          ),
        );
        break;
      case "Pharmacies":
        setFilteredUserList(
          users.filter(
            (user) =>
              user.role === "professional" &&
              user.profession.toLowerCase().includes("pharma"),
          ),
        );
        break;
      default:
        setFilteredUserList([]);
        break;
    }
  };

  const handleDelete = (userId) => {
    deleteUser(userId)
      .then((response) => {
        if (response) {
          message.success("User deleted successfully");
          setUserList(userList.filter((user) => user._id !== userId));
          setFilteredUserList(
            filteredUserList.filter((user) => user._id !== userId),
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const continentToCountry = {
    NA: "North America",
    SA: "South America",
    EU: "Europe",
    AS: "Asia",
    AF: "Africa",
    OC: "Oceania",
    AN: "Antarctica",
  };

  const countRegionUsers = (users) => {
    // Reset country counts
    const newCountryCounts = {};

    // Initialize continent counts variables
    let asiaCount = 0;
    let europeCount = 0;
    let africaCount = 0;
    let americaCount = 0;
    let australiaCount = 0;

    // Iterate through users to count regions
    users.forEach((user) => {
      if (user.region && user.region in continentToCountry) {
        const countryName = continentToCountry[user.region];
        const continentName = user.region;

        // Update country counts
        if (newCountryCounts[countryName]) {
          newCountryCounts[countryName]++;
        } else {
          newCountryCounts[countryName] = 1;
        }

        // Update continent counts
        switch (continentName) {
          case "AS":
            asiaCount++;
            break;
          case "EU":
            europeCount++;
            break;
          case "AF":
            africaCount++;
            break;
          case "NA":
          case "SA":
            americaCount++;
            break;
          case "OC":
            australiaCount++;
            break;
          default:
            break;
        }
      }
    });

    // Set new country counts
    setCountryCounts(newCountryCounts);

    // Set continent counts
    setAsiaCount(asiaCount);
    setEuropeCount(europeCount);
    setAfricaCount(africaCount);
    setAmericaCount(americaCount);
    setAustraliaCount(australiaCount);
  };

  return (
    <div>
      {loading ? (
        <div className="loader">
          {/* You can style this loader as per your design */}
          Loading...
        </div>
      ) : (
        <div>
          <h1 className="f-f-r mt-4 text-7xl text-[#749D1C]">Supper Admin</h1>
          {/* Tabs */}
          <ul className="min-600:flex-nowrap min-600:gap-0 min-600:justify-start min-600:pl-8 mt-4 flex w-full flex-wrap items-center justify-center gap-4">
            {[
              {
                text: "Waiting List",
                position: "translate-x-0",
                zIndex: "z-30",
              },
              { text: "Doctors", position: "-translate-x-4", zIndex: "z-20" },
              {
                text: "Pharmacies",
                position: "-translate-x-8",
                zIndex: "z-10",
              },
            ].map((el, index) => (
              <li
                className={`min-600:rounded-b-none min-600:rounded-t-[32px] shadow-left-lg w-32 overflow-hidden rounded-lg [@media(min-width:344px)]:w-36 [@media(min-width:376px)]:w-40 [@media(min-width:408px)]:w-44 ${el.position} ${el.zIndex}`}
                key={index}
              >
                <button
                  className={`f-f-m-m h-[49px] w-full bg-white text-2xl ${
                    activeSelection === el.text
                      ? "text-black"
                      : "text-brown-vdark"
                  }`}
                  onClick={() => setActiveSelection(el.text)}
                >
                  {el.text}
                </button>
              </li>
            ))}
            {/* <li className="w-full">
              <button
                className={`f-f-m-m h-[49px] w-full rounded-3xl bg-white text-2xl sm:w-44 ${
                  activeSelection === "Doctors"
                    ? "text-black"
                    : "text-brown-vdark"
                }`}
                onClick={() => setActiveSelection("Doctors")}
              >
                Doctors
              </button>
            </li>
            <li className="w-full">
              <button
                className={`f-f-m-m h-[49px] w-full rounded-3xl bg-white text-2xl sm:w-44 ${
                  activeSelection === "Pharmacies"
                    ? "text-black"
                    : "text-brown-vdark"
                }`}
                onClick={() => setActiveSelection("Pharmacies")}
              >
                Pharmacies
              </button>
            </li> */}
          </ul>

          {/* table section start */}

          <div className="tableset min-600:mt-0 relative z-40 mt-5 h-[341px] overflow-x-auto overflow-y-auto rounded-[15px] bg-white py-5 lg:pl-5">
            <table className="w-full text-left rtl:text-right">
              <thead className="f-f-b-l table-head h-[43px] text-sm text-[#25282B]">
                <tr className=" ">
                  <th
                    scope="col"
                    className="min-w-[175px] px-6 py-3 md:min-w-full"
                  >
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th
                    scope="col"
                    className="min-w-[150px] px-6 py-3 md:min-w-full"
                  >
                    Visit Time
                  </th>
                  <th
                    scope="col"
                    className="min-w-[100px] px-6 py-3 md:min-w-full"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {filteredUserList?.map((user, index) => (
                  <tr
                    key={index}
                    className="f-f-r-l h-[43px] items-center border-b border-[#E8E8E8] bg-white px-5 py-[10px] text-sm text-blue-vdark"
                  >
                    <td scope="row" className="px-6">
                      <ul className="inline-flex items-center space-x-2">
                        <li>
                          <img src={Tableimg1} className="h-6 w-6" alt="" />
                        </li>
                        <li>{user.name}</li>
                      </ul>
                    </td>
                    <td className="px-6">{user.email}</td>
                    <td className="px-6">{formatDate(user.createdAt)}</td>
                    <td className="px-6">{formatVisitTime(user.createdAt)}</td>
                    <td className="px-6 text-right">
                      <ul className="inline-flex items-center space-x-2">
                        <li>
                          <button>
                            <img src={pen} className="h-3 w-3" alt="" />
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleDelete(user._id)}>
                            <img src={Delete} className="h-3 w-3" alt="" />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* table section end */}

          {/* progress bar start */}

          <div className="mt-[20px] h-auto w-full rounded-[15px] bg-white pt-5 sm:mt-[35px]">
            <div className="grid grid-cols-12 pl-5 pr-5 sm:pr-0">
              <div className="col-span-10">
                <ul className="inline-flex items-center space-x-5">
                  <li>
                    <img src={Drag} className="h-8 w-8" alt="" />
                  </li>
                  <li>
                    <h1 className="f-f-m text-lg text-brown">
                      Audience Map Location
                    </h1>
                    <p className="f-f-r text-tiny text-brown-dark">
                      Report Center
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <img src={Dotss} className="ml-auto h-8 w-8" alt="" />
              </div>
            </div>
            <div className="mt-[18px] h-[1px] w-full bg-brown-light"></div>
            <div className="pl-5 pr-5 pt-5 sm:pr-0">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 sm:col-span-4">
                  <div className="">
                    <ul className="inline-flex w-full items-center justify-between">
                      <li className="f-f-m text-sm text-brown">Europe</li>
                      <li className="f-f-m text-sm text-brown-dark">
                        {europeCount || 0} Users
                      </li>
                    </ul>

                    <div className="mt-2 h-[15px] w-full rounded-full bg-gray-200">
                      <div className="h-[15px] w-[35%] rounded-full bg-blue-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <ul className="inline-flex w-full items-center justify-between">
                      <li className="f-f-m text-sm text-brown">Asia</li>
                      <li className="f-f-m text-sm text-brown-dark">
                        {asiaCount || 0} Users
                      </li>
                    </ul>
                    <div className="mt-2 h-[15px] w-full rounded-full bg-gray-200">
                      <div className="h-[15px] w-[20%] rounded-full bg-blue-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <ul className="inline-flex w-full items-center justify-between">
                      <li className="f-f-m text-sm text-brown">Africa</li>
                      <li className="f-f-m text-sm text-brown-dark">
                        {africaCount || 0} Users
                      </li>
                    </ul>
                    <div className="mt-2 h-[15px] w-full rounded-full bg-gray-200">
                      <div className="h-[15px] w-[25%] rounded-full bg-blue-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <ul className="inline-flex w-full items-center justify-between">
                      <li className="f-f-m text-sm text-brown">Australia</li>
                      <li className="f-f-m text-sm text-brown-dark">
                        {australiaCount || 0} Users
                      </li>
                    </ul>
                    <div className="mt-2 h-[15px] w-full rounded-full bg-gray-200">
                      <div className="h-[15px] w-[15%] rounded-full bg-blue-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <ul className="inline-flex w-full items-center justify-between">
                      <li className="f-f-m text-sm text-brown">America</li>
                      <li className="f-f-m text-sm text-brown-dark">
                        {americaCount || 0} Users
                      </li>
                    </ul>
                    <div className="mt-2 h-[15px] w-full rounded-full bg-gray-200">
                      <div className="h-[15px] w-[30%] rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <img src={MAP} className="h-aut mt-[29px] w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-[22px] h-[1px] w-full bg-brown-light"></div>
            <div className="py-[18px] pr-5 text-end">
              <ul className="inline-flex items-center space-x-3">
                <li className="f-f-m text-lg text-brown">SEE DETAILS</li>
                <li>
                  <img src={Right} className="h-6 w-6" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
