import contact from "../../assets/images/contacts-fill.svg";
import survey from "../../assets/images/survey-fill.svg";
import heart from "../../assets/images/heart-pulse-fill.svg";

export default function HowRapidoReliefWorks() {
  return (
    <div className="mx-auto w-11/12 py-[81px] xl:w-[1161px]">
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-[27px]">
        <h1 className="text-5xl font-medium text-green-dark md:text-7xl">
          How Rapido Relief Works
        </h1>
        <h2 className="f-f-li w-full rounded-[10px] bg-green-dark px-3 text-center text-6xl italic text-[#58fd0a] sm:w-fit md:px-[22px] md:text-7xl lg:text-[40px]">
          it's very simple
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-[25px]">
        {[
          {
            image: contact,
            topic: "Sign Up and Confirm Your Registration",
            listItems: [
              "Create an account quickly with your email or social login.",
              "Confirm your registration to get started!",
            ],
          },
          {
            image: survey,
            topic: "Choose a Plan & Access Exclusive Services",
            listItems: [
              "Select a subscription that fits your needs and make a secure payment.",
              "Unlock exclusive access to healthcare services, support, and resources.",
            ],
          },
          {
            image: heart,
            topic: "Connect & Start Your Health Journey",
            listItems: [
              "Enjoy seamless access to healthcare professionals and a range of support options.",
              "Get the care you need anytime, anywhere!",
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
