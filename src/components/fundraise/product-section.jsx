import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const productData = [
  {
    img: "/product1.jpeg",
    description: t("fundraise.description1"),
    buyLink: "#",
  },
  {
    img: "/product2.jpeg",
    description: t("fundraise.description2"),
    buyLink: "#",
  },
  {
    img: "/product3.jpeg",
    description: t("fundraise.description3"),
    buyLink: "#",
  },
];

const ProductSection = () => {
  return (
    <div className="bg-[rgba(116,157,28,0.29)]">
      <div className="mx-auto w-11/12 py-[104px] 2xl:max-w-[1161px]">
        <div className="flex flex-col items-center text-center">
          <h1 class="f-f-b text-[35px] font-bold leading-normal text-[#000] lg:text-[45px]">
            {t("fundraise.productSectionHeader")}
          </h1>
          <h4 class="f-f-r text-[24px] font-normal leading-normal text-[#000] lg:text-[30px]">
            {t("fundraise.productSectionSecondHeader")}
          </h4>
          <p class="f-f-r mt-4 max-w-[1086px] text-center text-[18px] font-normal text-[rgba(38,38,38,0.76)] lg:text-[25px] lg:leading-[35px]">
            {t("fundraise.productSectionBody")}
          </p>
        </div>
        <div className="mt-7 grid w-full grid-cols-1 gap-3 md:grid-cols-3">
          {productData.map((product, index) => (
            <Card
              img={product.img}
              description={product.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

function Card({ img, description, buyLink }) {
  return (
    <div className="w-full overflow-hidden rounded-bl-none rounded-br-none rounded-tl-[25px] rounded-tr-[25px] border border-[rgba(26,68,2,0.50)] bg-[#EAF9D6]">
      <img
        src={img}
        alt={description}
        className="h-[160px] w-full object-cover"
      />
      <div className="px-2 pt-4 lg:px-6 lg:pt-9">
        <p class="f-f-r text-center text-[18px] text-[#000]">{description}</p>
        <div className="my-3 flex w-full items-center justify-center lg:my-5 lg:mb-7">
          <Link
            to={buyLink}
            class="f-f-m rounded-lg bg-[#1A4402] px-3 text-[24px] font-medium leading-normal text-[#6F0]"
          >
            {t("fundraise.buyNow")}
          </Link>
        </div>
      </div>
    </div>
  );
}
