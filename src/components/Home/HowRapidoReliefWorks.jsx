import contact from "../../assets/images/contacts-fill.svg";
import survey from "../../assets/images/survey-fill.svg";
import heart from "../../assets/images/heart-pulse-fill.svg";

export default function HowRapidoReliefWorks() {
  return (
    <div className="w-11/12 xl:w-[1161px] mx-auto py-[81px]">
      <div className="flex items-center gap-[27px] justify-center mb-8">
        <h1 className="text-[35px] font-medium text-green-dark">
          How Rapido Relief Works
        </h1>
        <h2 className="bg-green-dark px-[22px] f-f-li text-[40px] italic text-[#58fd0a] rounded-[10px]">
          it's very simple
        </h2>
      </div>
      <div className="flex gap-[25px]">
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
    <div className="bg-[#EAF9D6] flex px-[13px] py-4 rounded-b-[15px] gap-4 w-full">
      <div className="w-[66px] h-[66px]">
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
