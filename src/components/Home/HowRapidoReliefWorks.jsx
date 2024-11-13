import contact from "../../assets/images/contacts-fill.svg";
import survey from "../../assets/images/survey-fill.svg";
import heart from "../../assets/images/heart-pulse-fill.svg";
import { useTranslation } from "react-i18next";

export default function HowRapidoReliefWorks() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-11/12 py-[81px] xl:w-[1161px]">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-[27px]">
        <h1 className="text-5xl font-medium text-green-dark md:text-7xl">
          {t("home.howRapidoReliefWorks")}
        </h1>
        <h2 className="f-f-li w-full rounded-[10px] bg-green-dark px-3 text-center text-6xl italic text-[#58fd0a] sm:w-fit md:px-[22px] md:text-7xl lg:text-[40px]">
          {t("home.itIsSimple")}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-[25px]">
        {[
          {
            image: contact,
            topic: t("home.firstSection.item1.topic"),
            listItems: [
              t("home.firstSection.item1.text1"),
              t("home.firstSection.item1.text2"),
            ],
          },
          {
            image: survey,
            topic: t("home.firstSection.item2.topic"),
            listItems: [
              t("home.firstSection.item2.text1"),
              t("home.firstSection.item2.text2"),
            ],
          },
          {
            image: heart,
            topic: t("home.firstSection.item3.topic"),
            listItems: [
              t("home.firstSection.item3.text1"),
              t("home.firstSection.item3.text2"),
            ],
          },
        ].map((item) => (
          <Card
            image={item.image}
            topic={item.topic}
            listItems={item.listItems}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ image, topic, listItems }) => {
  return (
    <div className="flex w-[360px] gap-4 rounded-b-[15px] bg-[#EAF9D6] px-[13px] py-4">
      <div className="h-[66px] w-[66px]">
        <img src={image} alt="" classname="w-full h-full" />
      </div>
      <section>
        <h2 className="text-[25px] font-medium text-black">{topic}</h2>
        <ol className="list-disc">
          {listItems.map((item) => (
            <li className="text-lg font-normal text-[#647067]">{item}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};
