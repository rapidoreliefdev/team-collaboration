import React from "react";
import insta from "../../assets/images/instagraram.svg";
// import Twitter from '../../assets/images/twitter-logo-2429 1.svg'
// import Indeed from '../../assets/images/Indeed.svg'
import Michel from "../../assets/images/image 29.svg";
import Isa from "../../assets/images/image 30.svg";
import Collins from "../../assets/images/image 32.svg";
import Sergio from "../../assets/images/image 31.svg";
import facebook from "../../assets/images/facebook.svg";
import Vectorx from "../../assets/images/Vectorx.svg";
import linkedin from "../../assets/images/linkedin.svg";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

export default function Members() {
  const { t } = useTranslation();
  const members = [
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: Michel,
      name: "Michael Tosin Adesanwo",
      role: "CEO / Founder",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "",
    },
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: Isa,
      name: "Isa Mariana Afonso Bigi",
      role: " Web/Content Manager",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "https://www.linkedin.com/in/isamarianaafonso/",
    },
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: "",
      name: "FULL NAME",
      role: "Product Manager",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "",
    },
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: Collins,
      name: "Achusiogu Chidozie Collins",
      role: "CTO Personnel",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "",
    },
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: "",
      name: "FULL NAME",
      role: "MTK Manager",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink: "",
    },
    {
      className: "col-span-12 sm:col-span-6 xl:col-span-4",
      displayPicture: Sergio,
      name: "Sergio Maciel",
      role: "Advisor & Mentor",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      linkedinLink:
        "https://www.linkedin.com/in/sergio-maciel-kronardt-724033a/",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="mx-auto w-11/12 2xl:max-w-[1200px]">
        <h1 className="f-f-r-s text-center text-9xl font-semibold text-grey-dark">
          {" "}
          <span className="text-green-dark">{t("aboutPage.our")} </span>
          {t("aboutPage.teamMembers")}
        </h1>
        <p className="f-f-r-s mt-[14px] text-center text-lg text-green-dark">
          {t("aboutPage.teamIntro")}
        </p>

        <div className="mx-auto mt-14 grid grid-cols-12 gap-6 md:gap-12 xl:gap-[75px]">
          {members.map((member) => {
            const {
              className,
              displayPicture,
              name,
              role,
              facebookLink,
              instagramLink,
              twitterLink,
              linkedinLink,
            } = member;
            return (
              <Member
                className={className}
                displayPicture={displayPicture}
                name={name}
                role={role}
                linkedinLink={linkedinLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Member = ({
  className,
  displayPicture,
  name,
  role,
  facebookLink,
  instagramLink,
  twitterLink,
  linkedinLink,
}) => {
  return (
    <div className={className}>
      <div className="mx-auto w-[300px] rounded-b-[25px] bg-green-dark px-6 pb-[26px]">
        {displayPicture === "" && (
          <div className="h-[215px] w-full rounded-b-[25px] bg-red-light"></div>
        )}
        {displayPicture !== "" && (
          <img
            src={displayPicture}
            className="h-[215px] w-full rounded-b-[25px]"
          />
        )}

        <div className="flex h-[212px] flex-col justify-between">
          <h2 className="f-f-r-s mt-4 text-center text-xl font-semibold uppercase text-white">
            {name}
          </h2>

          <div className="text-center">
            <button className="Memberbutton f-f-r-s mt-4 h-11 w-[202px] rounded-[100px] border border-green text-lg text-white">
              {role}
            </button>
          </div>
          <div className="mt-3 text-center xl:mt-0">
            <ul className="mt-[15px] inline-flex items-center space-x-2 md:space-x-4">
              <li>
                <button className="socialbtn h-[52px] w-[52px] rounded-[66px] border border-grey-dark p-4">
                  <img src={facebook} className="h-5 w-5" alt="" />
                </button>
              </li>
              <li>
                <button className="socialbtn h-[52px] w-[52px] rounded-[66px] border border-grey-dark p-4">
                  <img src={insta} className="h-5 w-5" alt="" />
                </button>
              </li>
              <li>
                <button className="socialbtn h-[52px] w-[52px] rounded-[66px] border border-grey-dark p-4">
                  <img src={Vectorx} className="h-5 w-5" alt="" />
                </button>
              </li>
              <li>
                <a
                  href={linkedinLink}
                  className="socialbtn mt-2 inline-block h-[52px] w-[52px] rounded-[66px] border border-grey-dark p-4"
                >
                  <img src={linkedin} className="h-5 w-5" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <img
                src={Michel}
                className=" rounded-b-[25px] w-full h-[215px] "
              />
              <h2 className="mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  ">
                Michael Tosin Adesanwo
              </h2>

              <div className="text-center">
                <button className="Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4">
                  CEO / Founder
                </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
                <ul className="inline-flex mt-[15px] space-x-2 md:space-x-4 items-center">
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={facebook} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={insta} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={Vectorx} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sergio-maciel-kronardt-724033a/"
                      className="socialbtn inline-block mt-2 rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4"
                    >
                      <img src={linkedin} className="w-5 h-5" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">//</div>
              <img src={Isa} className=" rounded-b-[25px] w-full h-[215px] " />
              <h2 className="mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  ">
                Isa Mariana Afonso Bigi
              </h2>

              <div className="text-center">
                <button className="Memberbutton w-[202px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4">
                  Web/Content Manager
                </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
                <ul className="inline-flex mt-[15px] space-x-2 md:space-x-4 items-center">
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={facebook} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={insta} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={Vectorx} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/isamarianaafonso/"
                      className="socialbtn inline-block mt-2 rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4"
                    >
                      <img src={linkedin} className="w-5 h-5" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]"></div>
              <h2 className="mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  ">
                FULL NAME
              </h2>

              <div className="text-center">
                <button className="Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4">
                  Project Manager
                </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
                <ul className="inline-flex mt-[15px] space-x-2 md:space-x-4 items-center">
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={facebook} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={insta} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={Vectorx} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="socialbtn inline-block mt-2 rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4"
                    >
                      <img src={linkedin} className="w-5 h-5" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]"></div>
              <h2 className="mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  ">
                {" "}
                FULL NAME
              </h2>

              <div className="text-center">
                <button className="Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4">
                  CTO Personnel
                </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
                <ul className="inline-flex mt-[15px] space-x-2 md:space-x-4 items-center">
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={facebook} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={insta} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={Vectorx} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={linkedin} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]"></div>
              <h2 className="mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  ">
                FULL NAME
              </h2>

              <div className="text-center">
                <button className="Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4">
                  MTK Manager
                </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
                <ul className="inline-flex mt-[15px] space-x-2 md:space-x-4 items-center">
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={facebook} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={insta} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={Vectorx} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                  <li>
                    <button className="socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4">
                      <img src={linkedin} className="w-5 h-5" alt="" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div> */
}
