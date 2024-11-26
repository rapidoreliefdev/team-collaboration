import React from "react";
import Navbar from "../components/Home/Navbar";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../components/Home/Footer";
import "./style.css";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <div className="f-f-r mx-auto w-10/12 sm:w-8/12 2xl:max-w-[1154px]">
          <div className="mt-24 grid grid-cols-12 gap-5 2xl:gap-20">
            <div className="col-span-12 xl:col-span-6">
              <ul className="inline-flex items-center space-x-1">
                <li>
                  <div className="h-[2px] w-[100px] bg-parrot sm:w-[100px]"></div>
                </li>
                <li>
                  <h4 className="f-f-m secondary-color pb-8 pl-10 text-xl text-white sm:text-2xl">
                    {t("privacyPolicy.mainHeader")}
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
        <p className="mt-5">{t("privacyPolicy.introBody")}</p>
        <br />

        <p>{t("privacyPolicy.lastUpdated")}</p>
        <br />

        <p>
          {t("privacyPolicy.welcomeBody").replaceAll("'", '"')}
          <br />
        </p>
        <br />

        <p>{t("privacyPolicy.consentMessage")}</p>
        <br />

        <h3 className="text-css">{t("privacyPolicy.subHeading1")}</h3>
        <br />

        <article>
          <p>{t("privacyPolicy.body1")}</p>
          <h3 className="text-css">{t("privacyPolicy.subHeading2")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list1.item1")}</li>
            <li>{t("privacyPolicy.list1.item2")}</li>
            <li>{t("privacyPolicy.list1.item3")}</li>
          </ul>
          <h3 className="text-css">{t("privacyPolicy.subHeading3")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list2.item1")}</li>
            <li>{t("privacyPolicy.list2.item2")}</li>
          </ul>
          <p className="text-css">{t("privacyPolicy.subHeading4")}</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list3.item1")}</li>
            <li>{t("privacyPolicy.list3.item2")}</li>
            <li>{t("privacyPolicy.list3.item3")}</li>
          </ul>
          <h3 className="text-css">{t("privacyPolicy.subHeading5")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list4.item1")} </li>
            <li>{t("privacyPolicy.list4.item2")}</li>
          </ul>
          <h3 className="text-css">{t("privacyPolicy.subHeading6")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list5.item1")} </li>
            <li>{t("privacyPolicy.list5.item2")}</li>
          </ul>
          <h3 className="text-css">{t("privacyPolicy.subHeading7")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list6.item1")} </li>
            <li>{t("privacyPolicy.list6.item2")}</li>
            <li>{t("privacyPolicy.list6.item3")}</li>
          </ul>
          <h3 className="text-css">{t("privacyPolicy.subHeading8")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list7.item1")} </li>
            <li>{t("privacyPolicy.list7.item2")}</li>
          </ul>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading9")}</h3>
          <p>{t("privacyPolicy.body2")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading10")}</h3>
          <p>{t("privacyPolicy.body3").replaceAll("&quot;", '"')}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading11")}</h3>
          <p>{t("privacyPolicy.body4").replaceAll("&quot;", '"')}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading12")}</h3>
          <p>{t("privacyPolicy.body5")}</p>
          <br />

          <p>{t("privacyPolicy.body6")}</p>
          <br />

          <p>{t("privacyPolicy.body7")}</p>
          <br />

          <p>{t("privacyPolicy.body8")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading13")}</h3>
          <p>{t("privacyPolicy.body9")}</p>
        </article>
        <br />

        <article>
          <h3>{t("privacyPolicy.subHeading14")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list8.item1")}</li>
            <li>{t("privacyPolicy.list8.item2")}</li>
            <li> {t("privacyPolicy.list8.item3")} </li>
          </ul>
          <p>{t("privacyPolicy.body10")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading15")}</h3>
          <p>{t("privacyPolicy.body11")}</p>
        </article>
        <br />

        <p>{t("privacyPolicy.body12")}</p>
        <br />

        <p>{t("privacyPolicy.body13")}</p>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading16")}</h3>
          <p>{t("privacyPolicy.body14")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css"> {t("privacyPolicy.subHeading17")}</h3>
          <p>{t("privacyPolicy.body15")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading18")}</h3>
          <p>{t("privacyPolicy.body16").replaceAll("&quot;", '"')}</p>
        </article>
        <br />

        <p>{t("privacyPolicy.body17")}</p>
        <br />

        <p>
          <h3 className="text-css">{t("privacyPolicy.subHeading19")}</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
            <li>{t("privacyPolicy.list9.item1")}</li>
            <li>{t("privacyPolicy.list9.item2")} </li>
            <li>{t("privacyPolicy.list9.item3")} </li>
            <li>{t("privacyPolicy.list9.item4")}</li>
          </ul>
        </p>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading20")}</h3>
          <p>{t("privacyPolicy.body18")}</p>
        </article>
        <br />

        <article>
          <h3 className="text-css">{t("privacyPolicy.subHeading21")}</h3>
          <p>{t("privacyPolicy.body19")}</p>
          <h3 className="text-css">{t("privacyPolicy.subHeading22")}</h3>
        </article>
        <br />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
