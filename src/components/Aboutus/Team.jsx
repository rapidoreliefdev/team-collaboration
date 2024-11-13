import React from "react";
import Subscribe from "./Subscribe";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  const storyText = t("aboutPage.founderStory", {
    founderName: "Michael Tosin Adesanwo",
  });

  const paragraphs = storyText.split("\n\n");

  return (
    <div className="bg-grey-vlight pt-16">
      <div className="mx-auto w-11/12 2xl:max-w-[1200px]">
        <h1 className="f-f-r text-2xl text-black">
          {t("aboutPage.Greetings")}
        </h1>
        {paragraphs.map((para, index) => (
          <React.Fragment>
            <p className="f-f-r text-2xl text-black" key={index}>
              {para.split("\n").map((line, i) => (
                <React.Fragment key={i}>{line}</React.Fragment>
              ))}
            </p>
            <br />
          </React.Fragment>
        ))}
        <h2 className="f-f-w text-10xl text-black">Michael Tosin Adesanwo</h2>
        <p className="f-f-r text-2xl text-black">
          {t("aboutPage.founder")}, Rapido Relief
        </p>
      </div>
      <Subscribe />
    </div>
  );
}
