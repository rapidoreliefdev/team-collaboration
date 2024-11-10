import React from "react";
import { Link } from "react-router-dom";

const productData = [
  {
    img: "/product1.jpeg",
    description:
      "Support your immune system with our trusted organic multivitamin. 10% of proceeds go towards Rapido Relief.",
    buyLink: "#",
  },
  {
    img: "/product2.jpeg",
    description:
      "Track your health and fitness with this sleek wearable. Support our app development while improving your well-being.",
    buyLink: "#",
  },
  {
    img: "/product3.jpeg",
    description:
      "Relax and relieve stress with this calming aromatherapy diffuser. Every purchase helps build the Rapido Relief App",
    buyLink: "#",
  },
];

const ProductSection = () => {
  return (
    <div className="bg-[rgba(116,157,28,0.29)]">
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px] py-[104px] ">
        <div className=" flex flex-col items-center text-center">
          <h1 class="text-[#000] f-f-b text-[35px] lg:text-[45px] font-bold leading-normal">
            Featured Healthy Affiliate Products
          </h1>
          <h4 class="text-[#000] f-f-r text-[24px] lg:text-[30px] font-normal leading-normal">
            Shop Our Health & Wellness Products to Support Rapido Relief
          </h4>
          <p class="text-[rgba(38,38,38,0.76)] mt-4 max-w-[1086px] text-center f-f-r text-[18px] lg:text-[25px] font-normal lg:leading-[35px]">
            By purchasing any of these products, a percentage of the proceeds
            will go directly to the development of the Rapido Relief App. Not
            only will you be supporting our project, but you’ll also be
            investing in your health and well-being
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 w-full mt-7">
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
    <div className=" w-full overflow-hidden rounded-tl-[25px] rounded-tr-[25px] rounded-br-none rounded-bl-none border border-[rgba(26,68,2,0.50)] bg-[#EAF9D6]">
      <img
        src={img}
        alt={description}
        className="w-full h-[160px] object-cover"
      />
      <div className=" pt-4 lg:pt-9  px-2 lg:px-6">
        <p class="text-[#000] text-center f-f-r text-[18px] ">{description}</p>
        <div className=" flex justify-center items-center w-full my-3 lg:my-5 lg:mb-7">
          <Link
            to={buyLink}
            class="text-[#6F0] px-3 rounded-lg bg-[#1A4402] f-f-m text-[24px] font-medium leading-normal">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
