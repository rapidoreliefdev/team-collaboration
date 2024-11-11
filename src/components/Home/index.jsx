import React from "react";
import Header from "./header";
import Hero from "./Hero";
import Option from "./Option";
import Vision from "./Vision";
import Help from "./Help";
import Telehealth from "./Telehealth";
import Relief from "./Relief";
import Feature from "./Feature";
import Jobs from "./Jobs";
import Esg from "./Esg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import Joinus from "./Joinus";
import Travaltime from "./Travaltime";
// import ChatBot from "../Chatbot";
import ProviderMarketplace from "./provider-arketplace";
import FAQSection from "./faq-section";
import HowRapidoReliefWorks from "./HowRapidoReliefWorks";
import Modal from "../Modal/index";
import { useModal } from "../../Contexts/ModalContext";
import Signup from "../Register/Register";
import Login from "../Login";

export default function Index() {
  const { isModalVisible, modalContent } = useModal();
  return (
    <div className="f-f-r m-0 w-screen p-0">
      {/* <ChatBot/> */}
      <div className={`herobg w-full bg-cover bg-center bg-no-repeat`}>
        {/* <Header /> */}
        <Navbar />
        <Hero />
      </div>
      <Modal isVisible={isModalVisible}>
        {modalContent === "signup" ? <Signup /> : <Login />}
      </Modal>
      <HowRapidoReliefWorks />
      <div className="bg-[#f6fbf4] py-[88px]">
        <h1 className="mx-auto mb-[34px] w-fit text-10xl font-extrabold text-green-dark">
          See a doctor with or without insurance!
        </h1>
        <Option />
        <Vision />
      </div>
      <Help />
      <ProviderMarketplace />
      <Telehealth />
      <FAQSection />
      <Jobs />
      <Travaltime />
      <Joinus />
      <Esg />
      <Subscribe />

      {/* <Relief />
      <Feature /> */}
      <Footer />
    </div>
  );
}
