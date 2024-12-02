import React from "react";
import Slider from "react-slick";
import Navbar from "../../components/Home/Navbar";
import "./style.css";
import { Button, Input } from "antd";
import WatchVideo from "../../assets/icons/watch-video.svg";
import Doctors from "../../assets/pageImages/well-qualified-doctors.svg";
import Appointment from "../../assets/pageImages/book-appointment.svg";
import Mental from "../../assets/images/Mentalnew.svg";
import SearchIcon from "../../assets/pageImages/search-icon.svg";
import LocationIcon from "../../assets/pageImages/location-icon.svg";
import SecurityIcon from "../../assets/pageImages/security-icon.svg";
import Consult from "../../assets/images/Consultnew.svg";
import Find from "../../assets/images/Findnew.svg";
import Doctor from "../../assets/images/Doctornew.svg";
import Hospital from "../../assets/images/hospitalnew.svg";
import Ambulance from "../../assets/images/Ambulancenew.svg";
import Esg from "../../components/Home/Esg";
import Footer from "../../components/Home/Footer";
import Jobs from "../../components/Home/Travaltime";
import DoctorProfileCard from "../../components/Reuseable/Cards/DoctorProfileCards";
import ProfileImage from "../../assets/pageImages/doctor-profile.svg";
import Helpmobile from "../../assets/images/how-it-works.svg";
import PatientCare from "../../assets/pageImages/primary-patient.svg";
import WeightManagement from "../../assets/pageImages/weight-management.svg";
import UrgentCare from "../../assets/pageImages/urgent-care.svg";
import MentalHealth from "../../assets/pageImages/mental-health.svg";
import RightIcon from "../../assets/icons/right-icon.svg";
import iconClinic from "../../assets/images/icon-clinic.svg";
import iconMail from "../../assets/images/icon-mail.svg";
import iconTelephone from "../../assets/images/icon-telefone.svg";
import imgTamarin from "../../assets/images/ellipse-img1.jpeg";
import imgCharlie from "../../assets/images/ellipse-img2.jpeg";
import imgColinLay from "../../assets/images/ellipse-img3.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#1a4402",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <img
        src={
          direction === "prev"
            ? "src/assets/images/arrow-prev.svg"
            : "src/assets/images/arrow-next.svg"
        }
      />
    </button>
  );
};

const Explore = () => {
  const { t } = useTranslation();

  const doctor = {
    profileImage: ProfileImage,
    name: "Dr. Rapido Relief",
    country: "Sao Paulo, Brazil",
    rating: 4.5,
    reviewCount: 15,
    experience: 10,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Tamarind",
      role: t("explore.patientsTestimonial.testimonialRole1"),
      rating: 5,
      feedback: t("explore.patientsTestimonial.testimonialFeedback1"),
      image: imgTamarin, // Replace with your image URL
    },
    {
      name: "Charlie",
      role: t("explore.patientsTestimonial.testimonialRole2"),
      rating: 5,
      feedback: t("explore.patientsTestimonial.testimonialFeedback2"),
      image: imgCharlie,
    },
    {
      name: "Colin Lay",
      role: t("explore.patientsTestimonial.testimonialRole3"),
      rating: 5,
      feedback: t("explore.patientsTestimonial.testimonialFeedback3"),
      image: imgColinLay,
    },
  ];

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true, // Enables spacing around the active slide
    // centerPadding: "10px", // Add space on either side of each slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const contentData = [
    {
      imgSrc: PatientCare,
      title: "Primary Care",
      tags: ["Type 2 diabetes", "Acid reflex", "Migrane"],
    },
    {
      imgSrc: WeightManagement,
      author: "author name",
      title: "Weight Management",
      tags: ["Type 2 diabetes", "Acid reflex", "Migrane"],
    },
    {
      imgSrc: UrgentCare,
      author: "author name",
      title: "Urgent Care",
      tags: ["Type 2 diabetes", "Acid reflex", "Migrane"],
    },
    {
      imgSrc: MentalHealth,
      title: "Mental Health",
      tags: ["Type 2 diabetes", "Acid reflex", "Migrane"],
    },
  ];

  return (
    <>
      <div id="explore">
        <div className="main-wrapper-explore text-black">
          <Navbar />
          <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
            <div className="mt-10 grid grid-cols-12 gap-5 2xl:gap-20">
              <div className="col-span-12 xl:col-span-6">
                <div className="explore-header-titles">
                  <h2 className="f-f-m explore-header-h2 primary-color text-[45px] sm:text-11xl">
                    {t("explore.header")}
                    <br />
                    <span className="f-f-m text-[45px] text-white sm:text-11xl">
                      {t("explore.headerHighlighted")}
                    </span>
                  </h2>
                </div>
                <div className="w-full sm:w-[435px]">
                  <h5 className="f-f-r p-title-explore mt-2 text-lg text-white sm:text-2xl">
                    {t("explore.heroSupportingText")}
                  </h5>
                </div>

                <div className="f-f-m mt-5 pb-5 text-2xl text-white sm:mt-[76px]">
                  <div className="flex gap-5">
                    <Button className="explore-hero-button primary-color-bg">
                      {t("explore.buttonText1")}
                    </Button>
                    <Button></Button>
                    {/* <img
                      className="img-explore-watch"
                      src=""
                      width={130}
                      height={100}
                      alt="watch-video"
                    /> */}
                  </div>
                  <p className="subtitle-explore mt-3">
                    {t("explore.invitation")}
                  </p>
                </div>
              </div>
              <div className="hero-text-card-explore col-span-12 hidden xl:col-span-6 xl:block">
                <div className="image-explores">
                  <img src={Doctors} alt="well-qualified-doctors" width={270} />
                  <img
                    src={Appointment}
                    alt="book-online-appointment"
                    width={270}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search bars */}
        <div className="explore-second-wrapper">
          <div className="mx-auto w-11/12 pt-[72px] 2xl:max-w-[1154px]">
            <div className="searchtabs flex flex-col px-5 pb-5 pt-3 sm:flex-row">
              <div className="smClass">
                <label className="labelclass ml-3">{t("search")}</label>
                <Input
                  className="inputclass sm:text-sm"
                  size="large"
                  placeholder="Condition, Physician or Pharmacy"
                  prefix={<img src={SearchIcon} alt="search-icon" />}
                />
              </div>
              <div className="smClass">
                <label className="labelclass ml-3">
                  {t("explore.location")}
                </label>
                <Input
                  className="inputclass sm:text-sm"
                  size="large"
                  placeholder="City, State or Zip/Post Code"
                  prefix={<img src={LocationIcon} alt="search-icon" />}
                />
              </div>
              <div className="smClass">
                <label className="labelclass ml-3">
                  {t("explore.haveInsurance")}
                </label>
                <Input
                  className="inputclass sm:text-sm"
                  size="large"
                  placeholder="Choose Insurance"
                  prefix={<img src={SecurityIcon} alt="search-icon" />}
                />
              </div>
            </div>
            <div className="rounded-b-[25px] bg-green-vlight pt-8">
              <div className="mx-auto w-11/12">
                <div className="grid grid-cols-12 items-center gap-5">
                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Consult}
                        className="ml-auto h-[50px] w-[61px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.consultOnline")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Find}
                        className="ml-auto h-[50px] w-[46px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.findPharmacy")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Doctor}
                        className="ml-auto h-[50px] w-[49px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.findDoctor")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Hospital}
                        className="ml-auto h-[50px] w-[50px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.findHospital")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Ambulance}
                        className="ml-auto h-[50px] w-[54px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.emergencyAmbulance")}
                      </h5>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-4 xl:col-span-2">
                    <div className="optionsetting mb-[25px] mt-[15px] h-[160px] bg-white px-5 py-3">
                      <img
                        src={Mental}
                        className="ml-auto h-[50px] w-[51px]"
                        alt=""
                      />
                      <h5 className="f-f-r mt-[35px] text-2xl leading-normal text-green-dark hover:text-white">
                        {t("explore.mentalHealth")}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Speciality */}
          <div className="mx-auto w-11/12 pb-10 pt-[72px] 2xl:max-w-[1154px]">
            <div className="available-speciality-header flex justify-center">
              <h1 className="available-speciality-title">
                {t("explore.availableSpecialty")}
              </h1>
            </div>
            <div>
              <Slider {...settings}>
                <DoctorProfileCard doctor={doctor} />
                <DoctorProfileCard doctor={doctor} />
                <DoctorProfileCard doctor={doctor} />
                <DoctorProfileCard doctor={doctor} />
                <DoctorProfileCard doctor={doctor} />
                <DoctorProfileCard doctor={doctor} />
              </Slider>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white-light pt-[71px]">
          <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
            <div className="grid grid-cols-12 gap-5 pb-[70px] sm:pt-10 lg:py-[70px]">
              <div className="col-span-12 lg:col-span-5">
                <img
                  src={Helpmobile}
                  className="mb-5 h-[525px] w-full lg:mb-0"
                  alt=""
                />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <h1 className="f-f-e text-center text-[48px] font-normal text-black sm:text-[64px] lg:text-left">
                  {t("explore.howItWorks")}
                </h1>

                <div className="ml-5 pl-10">
                  <ul className="mt-9 inline-flex items-center space-x-5">
                    {/* <li><img src={Intuitive} className='h-[80px] w-80px]' alt="" /></li> */}
                    <li>
                      <h1 className="f-f-b mb-3 text-xl font-extrabold text-black sm:text-2xl">
                        {t("explore.createAccount")}
                      </h1>
                      <h2 className="f-f-r text-md sm:text-1xl">
                        {t("explore.signUp")}
                      </h2>
                    </li>
                  </ul>
                  <ul className="mt-9 inline-flex items-center space-x-5">
                    {/* <li><img src={Patientrecord} className='h-[80px] w-80px]' alt="" /></li> */}
                    <li>
                      <h1 className="f-f-b mb-3 text-xl font-extrabold text-black sm:text-2xl">
                        {t("explore.chooseProvider")}
                      </h1>
                      <h2 className="f-f-r sm:text-1xl text-lg">
                        {t("explore.chooseProviderBody")}
                      </h2>
                    </li>
                  </ul>
                  <ul className="mt-9 inline-flex items-center space-x-5">
                    {/* <li><img src={Smart} className='h-[80px] w-80px]' alt="" /></li> */}
                    <li>
                      <h1 className="f-f-b mb-3 text-xl font-bold text-black sm:text-2xl">
                        {t("explore.subHeading1")}
                      </h1>
                      <h2 className="f-f-r sm:text-1xl text-lg">
                        {t("explore.supportingText")}
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health is our speciality */}
        <div className="pt-16">
          <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12 sm:col-span-12">
                <h4 className="f-f-m text-center text-black">
                  {t("explore.healthIsOurSpecialty")}
                </h4>
              </div>
            </div>

            <div className="mt-[41px] grid grid-cols-12 gap-[18px]">
              {contentData.map((data, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
                >
                  <div className="h-auto rounded-b-[24px] bg-grey-light p-[9px] sm:h-[400px] md:h-[440px] xl:h-[430px]">
                    <div className="h-[256px] w-full rounded-b-[25px]">
                      <img
                        style={{ width: "inherit" }}
                        src={data.imgSrc}
                        alt=""
                      />
                    </div>
                    <div className="for-smallscreen-title text-start sm:mt-[15px]">
                      <h1 className="font-for-title mt-3 pl-3 text-sm leading-normal text-black">
                        {data.title}
                      </h1>
                    </div>
                    <div className="text-center xl:text-start">
                      <ul className="mb-3 mt-[14px] inline-flex items-center space-x-3">
                        {data.tags.map((tag, tagIndex) => (
                          <li key={tagIndex}>
                            <button className="font-for-tags h-[25px] w-auto rounded-[24px] border border-green-dark px-3 text-sm text-black">
                              {tag}
                            </button>
                            <button className="font-for-tags mt-1 h-[25px] w-auto rounded-[24px] border border-green-dark px-3 text-sm text-black">
                              {tag}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="flex w-full justify-between px-2">
                        <div className="mt-2">
                          <h2 className="primary-color">
                            {t("explore.learnMore")}
                          </h2>
                        </div>
                        <div className="right-arrow-down">
                          <img
                            className="primary-color"
                            src={RightIcon}
                            alt="RightIcon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <section className="mx-auto mt-10 flex w-11/12 flex-col justify-center 2xl:max-w-[1154px]">
          <h1 className="f-f-e text-center text-11xl text-[#2E333E] sm:text-[64px]">
            {t("explore.bookAppointmentSection.title")}
          </h1>
          <p className="mx-auto mt-[30px] w-10/12 text-center text-2xl text-[#2E333E] lg:w-[672px]">
            {t("explore.bookAppointmentSection.supportingText")}{" "}
          </p>
          <div className="mt-[43px] flex w-full flex-wrap justify-center gap-10 xl:flex-nowrap xl:justify-between">
            <div className="flex w-[384px] flex-col items-center gap-3">
              <img src={iconTelephone} alt="" />
              <h3 className="f-f-e text-[32px]"></h3>
              <p className="mx-auto w-9/12 text-center text-xl">
                {t("explore.bookAppointmentSection.body1")}
              </p>
              <p className="text-xl text-[#1A4402]">(12) 345-67890</p>
            </div>
            <div className="flex w-[394px] flex-col items-center gap-3">
              <img src={iconMail} alt="" />
              <h3 className="f-f-e text-[32px]"></h3>
              <p className="mx-auto w-9/12 text-center text-xl">
                {t("explore.bookAppointmentSection.body2")}
              </p>
              <p className="text-xl text-[#1A4402]">contact@example.com</p>
            </div>
            <div className="flex w-[394px] flex-col items-center gap-3">
              <img src={iconClinic} alt="" />
              <h3 className="f-f-e text-[32px]"></h3>
              <p className="mx-auto w-9/12 text-center text-xl">
                {t("explore.bookAppointmentSection.body3")}
              </p>
              <p className="text-xl text-[#1A4402]">
                {t("explore.bookAppointmentSection.address")}
              </p>
            </div>
          </div>
          {/* <img src={BookAppointment} alt="" /> */}
        </section>
      </div>

      <div className="mt-10">
        <Jobs />
      </div>

      {/* Patients Testimonial */}
      <section className="mx-auto w-11/12 2xl:max-w-[1154px]">
        <h1 className="f-f-m-p text-center text-[48px] text-[#1A4402]/50">
          {t("explore.patientsTestimonial.title")}
        </h1>
        <h3 className="text-center text-xl text-[#749D1C]">
          {t("explore.patientsTestimonial.supportingText")}
        </h3>
        <div className="testimonial-slider">
          <Slider {...settings2}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-image-container rounded-full bg-[#749D1C]/50">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="testimonial-image relative left-[12.2px]"
                  />
                </div>
                <div className="w-[174px]">
                  <h3 className="f-f-m-p text-xl text-[#404040]">
                    {testimonial.name}
                  </h3>
                  <p className="f-f-m-p text-sm text-[#767676]">
                    {testimonial.role}
                  </p>
                  <div className="testimonial-rating">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p className="f-f-li-p text-sm font-normal text-[#404040]">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <form className="flex w-full flex-col items-center gap-[51px] lg:flex-row">
          <div className="flex w-full flex-col gap-[30px]">
            <div className="flex w-full flex-col gap-[30px] sm:flex-row">
              <div className="flex w-full flex-col">
                <label
                  htmlFor=""
                  className="mb-[15px] text-xl font-semibold text-[#1A4402]"
                >
                  {t("explore.patientsTestimonial.form.name")}
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-[#E0E0E0] p-5 text-xl outline-none"
                />
              </div>
              <div className="flex w-full flex-col">
                <label
                  htmlFor=""
                  className="mb-[15px] text-xl font-semibold text-[#1A4402]"
                >
                  {t("explore.patientsTestimonial.form.phoneNumber")}
                </label>
                <input
                  type="tel"
                  placeholder="(123) 456 7890"
                  className="w-full rounded-lg border border-[#E0E0E0] p-5 text-xl outline-none"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-[30px] sm:flex-row">
              <div className="flex w-full flex-col">
                <label
                  htmlFor=""
                  className="mb-[15px] text-xl font-semibold text-[#1A4402]"
                >
                  {t("explore.patientsTestimonial.form.email")}
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-lg border border-[#E0E0E0] p-5 text-xl outline-none"
                />
              </div>
              <div className="flex w-full flex-col">
                <label
                  htmlFor=""
                  className="mb-[15px] text-xl font-semibold text-[#1A4402]"
                >
                  {t("explore.patientsTestimonial.form.service")}
                </label>
                <input
                  type="text"
                  placeholder="Ex. Dental Implants"
                  className="w-full rounded-lg border border-[#E0E0E0] p-5 text-xl outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[30px]">
            <div className="flex w-full flex-col">
              <label
                htmlFor=""
                className="mb-[10px] text-xl font-semibold text-[#1A4402]"
              >
                {t("explore.patientsTestimonial.form.message")}
              </label>
              <textarea
                name=""
                id=""
                placeholder="Please describe what service you are interested in"
                className="min-h-[90px] resize-none text-wrap rounded-lg border border-[#E0E0E0] px-5 py-[15px] text-xl outline-none"
              />
            </div>

            <button className="w-full rounded-lg bg-[#1A4402] px-[30px] py-[15px] text-[25px] font-semibold text-white hover:bg-[#1A4402]/90">
              {t("explore.patientsTestimonial.form.submit")}
            </button>
          </div>
        </form>
      </section>

      <Esg />
      <Footer />
    </>
  );
};

export default Explore;
