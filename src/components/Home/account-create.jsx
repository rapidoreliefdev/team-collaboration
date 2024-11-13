import React, { useState } from "react";
import { useModal } from "../../Contexts/ModalContext";
import { useTranslation } from "react-i18next";

const AccountCreate = () => {
  const [drop, setDrop] = useState(false);

  const { t } = useTranslation();

  const { openModal } = useModal();

  return (
    <li className="relative w-full text-left lg:w-auto">
      <div
        onClick={() => setDrop(!drop)}
        className="flex cursor-pointer items-center justify-start gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 21L12 23L10 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H14ZM19 19V5H5V19H10.8284L12 20.1716L13.1716 19H19ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"
            fill="white"
          />
        </svg>
        <p className="f-f-b f-f-b block rounded py-2 text-base text-green-light hover:bg-gray-100 md:border-0 md:hover:bg-transparent lg:p-0">
          {t("navigation.account.title")}
        </p>
      </div>

      {drop && (
        <div
          id="dropdownNavbar"
          className="z-10 w-full rounded-lg bg-green-light px-[28px] py-[49px] shadow lg:absolute lg:right-0 lg:top-[35px] lg:w-[250px]"
        >
          {/* <a href="/login" target="_blank" rel="noopener noreferrer"> */}
          {/*onClick should be leading to the opening of the login modal, (openModal function)*/}
          <button
            className="f-f-b h-[40px] w-full rounded-[25px] bg-green-dark text-sm text-white-light"
            onClick={() => openModal("login")}
          >
            {t("navigation.account.login")}
          </button>
          {/* </a> */}
          {/* <a href="/signup" target="_blank" rel="noopener noreferrer"> */}
          {/*onClick should be leading to the opening of the signup modal, (openModal function)*/}
          <button
            className="f-f-b w-full border-0 pt-[10px] text-center text-sm text-green-dark"
            onClick={() => openModal("signup")}
          >
            {t("navigation.account.signup")}
          </button>
          {/* </a> */}
        </div>
      )}
    </li>
  );
};

export default AccountCreate;
