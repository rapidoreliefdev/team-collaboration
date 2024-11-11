import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import flags from "../../assets/images/flags-pt-BR.svg";
import engFlag from "../../assets/images/eng-flag.png";
import Chatbot from "./Dilogbox/Chatboot";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import BlankImage from "../../assets/pageImages/blank-circle.svg";
import "./navbar.css";
import MenuItem from "./menu-item";
import AccountCreate from "./account-create";

export default function Navbar() {
  const navigate = useNavigate();
  const [drop, setdrop] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "English",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    if (selectedLanguage === "Portuguese" && window.location.pathname === "/") {
      // navigate("/homeportuguese");
      navigate("/homeportuguese");
    } else if (
      selectedLanguage === "English" &&
      window.location.pathname === "/homeportuguese"
    ) {
      navigate("/");
    }
    if (
      selectedLanguage === "Portuguese" &&
      window.location.pathname === "/aboutus"
    ) {
      // navigate("/aboutusportuguese");
      navigate("/aboutus");
    } else if (
      selectedLanguage === "English" &&
      window.location.pathname === "/aboutusportuguese"
    ) {
      navigate("/aboutus");
    }
  }, [selectedLanguage, window.location.pathname, navigate]);

  const handleOpen = () => setOpen(!open);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  function LanguageSelector() {
    return (
      <div className="relative">
        <button
          id="dropdownNavbarLink"
          onClick={toggleDropdown}
          className="flex w-full items-center justify-between px-3 py-2 md:w-auto lg:p-0"
        >
          {selectedLanguage === "English" ? (
            <>
              <img src={engFlag} className="h-[23px] w-[33px]" alt="English" />
              {/* <span className="ml-2">English</span> */}
            </>
          ) : (
            <>
              <img src={flags} className="h-[23px] w-[33px]" alt="Portuguese" />
              {/* <span className="ml-2">Portuguese</span> */}
            </>
          )}
          <svg
            className="ml-[9px]"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M0 1.11158L0.729927 0.325928L5 4.96131L9.27007 0.325928L10 1.11158L5 6.49333L0 1.11158Z"
              fill="white"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 top-full bg-white shadow-md">
            <li>
              <button
                className="w-full px-3 py-2 text-left"
                onClick={() => handleLanguageChange("English")}
              >
                <img
                  src={engFlag}
                  className="h-[23px] w-[33px]"
                  alt="English"
                />
                {/* <span className="ml-2">English</span> */}
              </button>
            </li>
            <li>
              <button
                className="w-full px-3 py-2 text-left"
                onClick={() => handleLanguageChange("Portuguese")}
              >
                <img
                  src={flags}
                  className="h-[23px] w-[33px]"
                  alt="Portuguese"
                />
                {/* <span className="ml-2">Portuguese</span> */}
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  }

  return (
    <>
      <nav className="border-gray-200 bg-[#336109]">
        <div className="mx-auto flex w-11/12 flex-wrap items-center justify-between p-4 xl:w-[1161px]">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="50"
              viewBox="0 0 49 50"
              fill="none"
            >
              <mask
                id="mask0_2426_985"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="10"
                y="0"
                width="39"
                height="39"
              >
                <path
                  d="M10.4515 0L48.4446 0V38.0034H10.4515V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_2426_985)">
                <path
                  d="M38.8904 27.2454C39.0351 27.8749 39.1532 28.5213 39.2325 29.1999C39.3855 30.5024 39.3807 31.7815 39.2309 33.021L48.4426 21.3934L45.4187 18.9949L38.8904 27.2454ZM18.0626 26.5375L28.666 34.918L26.2794 37.9506L15.6618 29.5721C12.7326 27.2597 11.0437 24.2548 10.6215 20.54C10.1736 16.8422 11.1206 13.5286 13.4358 10.6025L21.825 -0.0012207L24.8489 2.39763L16.472 12.9863C14.806 15.0918 14.1401 17.4455 14.4509 20.0917C14.7612 22.7383 15.9563 24.8878 18.0626 26.5375Z"
                  fill="#58FD0A"
                />
              </g>
              <mask
                id="mask1_2426_985"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="12"
                width="38"
                height="39"
              >
                <path
                  d="M0 12.0269H37.1385V50.0001H0L0 12.0269Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_2426_985)">
                <path
                  d="M4.38147 26.3274C3.22049 25.4237 1.55573 25.6191 0.649224 26.7642C-0.256883 27.9098 -0.0602826 29.5864 1.08682 30.4917C2.23392 31.397 3.89869 31.2016 4.81867 30.0545C5.72517 28.9094 5.52817 27.2324 4.38147 26.3274ZM29.5717 23.4625L18.9545 15.0839L21.3549 12.0493L31.9722 20.4278C34.9017 22.7403 36.5768 25.7468 37.0128 29.46C37.4469 33.1597 36.5134 36.4714 34.1986 39.3974L25.8094 50.0012L22.7712 47.6035L31.1624 37.0136C32.8144 34.9097 33.4938 32.5549 33.1835 29.9083C32.8727 27.2617 31.6642 25.1138 29.5717 23.4625Z"
                  fill="#58FD0A"
                />
              </g>
            </svg>
          </Link>
          <button
            onClick={() => setnavbar(!navbar)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center p-2 lg:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#B2FF87"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#B2FF87"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={` ${
              navbar ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col items-baseline rounded-lg border border-green-light bg-transparent p-4 text-left lg:mt-0 lg:flex-row lg:items-center lg:space-x-8 lg:border-0 lg:p-0 rtl:space-x-reverse">
              {selectedLanguage === "English" ? (
                <MenuItem
                  link="/aboutus"
                  label=" What is Rapido Relief?"
                  subItems={[
                    { label: "Our Story", link: "" },
                    { label: "Careers", link: "/career" },
                    { label: "Contact Us", link: "" },
                  ]}
                />
              ) : (
                <MenuItem
                  link="/aboutusportuguese"
                  label=" What is Rapido Relief?"
                />
              )}

              <MenuItem
                label="Explore"
                subItems={[
                  { label: "Our Providers", link: "" },
                  { label: "Blog", link: "" },
                  { label: "Our Solutions", link: "" },
                  { label: "Work with Us!", link: "" },
                  { label: "What it Cost", link: "" },
                  // { label: "Contact" },
                  // { label: "FAQ" },
                ]}
              />
              <MenuItem label="Mental Health" />
              {/* <MenuItem label="Partners" /> */}

              {/* <li>
                {selectedLanguage === "English" ? (
                  <MenuItem link="/aboutus" label="About us" />
                ) : (
                  <MenuItem link="/aboutusportuguese" label="About us" />
                )}
              </li>

              <MenuItem onClick={handleOpen} label="Rapido Chatbot" />
              <MenuItem onClick={handleOpen} label="   Contact Us" /> */}

              <AccountCreate />

              <li className="hidden lg:block">
                <p className="f-f-b block h-[27px] border border-white px-3 py-2 lg:p-0"></p>
              </li>
              {/* <li className=" relative  text-left w-full lg:w-auto py-2">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3  lg:p-0 md:w-auto ">
                  <img src={flags} className=" w-[33px] h-[23px] " />
                  <svg
                    className=" ml-[9px] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none">
                    <path
                      d="M0 1.11158L0.729927 0.325928L5 4.96131L9.27007 0.325928L10 1.11158L5 6.49333L0 1.11158Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li> */}

              <li className="w-full py-2 text-left lg:w-auto">
                <Link
                  to="/fundraise"
                  className="block rounded-[50px] bg-[#58fd09] p-[2px] pr-[5px]"
                >
                  <button className="f-f-r w-full rounded-[50px] bg-[#1A4402] p-4 text-[15px] font-normal uppercase leading-[1.5px] text-white">
                    SUPPORTS US!
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Chatbot open={open} setOpen={setOpen} handleOpen={handleOpen} /> */}

      {/* Explore modal */}
      <Modal
        title={<h3 className="modal-title">Browse Top Specialties</h3>}
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        footer={null}
        className="green-modal"
      >
        <div className="category-container">
          {/* 1st row */}
          <div className="category-row">
            <div className="category-item">Care Physicians</div>
            <div className="category-gap"></div>
            <div className="category-item">Therapist-Counselors</div>
            <div className="category-gap"></div>
            <div className="category-item">Psychologists</div>
            <div className="category-gap"></div>
            <div className="category-item">Orthopedic Surgeons</div>
            <div className="category-gap"></div>
          </div>
          {/* 2nd row */}
          <div className="category-row">
            <div className="category-item">Urgent Care</div>
            <div className="category-gap"></div>
            <div className="category-item">Pediatricians</div>
            <div className="category-gap"></div>
            <div className="category-item">Ophthalmologists</div>
            <div className="category-gap"></div>
            <div className="category-item">Optometrists</div>
            <div className="category-gap"></div>
          </div>
          {/* 3rd row */}
          <div className="category-row">
            <div className="category-item">OBGYNs</div>
            <div className="category-gap"></div>
            <div className="category-item">Chiropractors</div>
            <div className="category-gap"></div>
            <div className="category-item">Dermatologists</div>
            <div className="category-gap"></div>
            <div className="category-item">Podiatrists</div>
            <div className="category-gap"></div>
          </div>
          {/* 4th row */}
          <div className="category-row">
            <div className="category-item">Psychiatrists</div>
            <div className="category-gap"></div>
            <div className="category-item">Dentists</div>
            <div className="category-gap"></div>
            <div className="category-item">Cardiologists</div>
            <div className="category-gap"></div>
            <div className="category-item">Online Doctors</div>
            <div className="category-gap"></div>
          </div>

          {/* image div */}
          <div className="image-container gap-8">
            <img src={BlankImage} alt="blank-img" />
            <img src={BlankImage} alt="blank-img" />
            <img src={BlankImage} alt="blank-img" />
            <img src={BlankImage} alt="blank-img" />
          </div>
        </div>
      </Modal>
    </>
  );
}
