import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import RightArrow from "../../assets/icons/right-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import { Avatar, Card, Spin } from "antd";
import Subscribe from "../../components/Home/Subscribe";
import "./style.css";
import Footer from "../Home/Footer.jsx";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import CustomLoader from "../Loader/index.jsx";
import CardComponent from "../Reuseable/Cards/index.jsx";

const { Meta } = Card;

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
                        _id,
                        _type,
                        _createdAt,
                        _updatedAt,
                        title,
                        slug,
                        author->,
                        mainImage {
                            ...,
                            asset->
                        },
                        categories[]->,
                        publishedAt,
                        body
                        }`,
      )
      .then((data) => setBlogs(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  console.log(blogs, "blogsdata");

  // Function to filter blogs by category
  const filterBlogsByCategory = (category) => {
    return blogs.filter((blog) =>
      blog.categories.some((cat) => cat.title === category),
    );
  };

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <div className="main-wrapper">
            <Navbar />
            <div className="mx-auto w-11/12 2xl:max-w-[1154px]">
              <div className="mt-24 grid grid-cols-12 gap-5 2xl:gap-20">
                <div className="col-span-12 xl:col-span-6">
                  <ul className="inline-flex items-center space-x-1">
                    <li>
                      <div className="dash-line h-[2px] w-[100px] bg-parrot sm:w-[100px]"></div>
                    </li>
                    <li>
                      <h4 className="small-screen-heading f-f-m pl-10 text-xl text-white sm:text-2xl">
                        RAPIDO RELIEF
                      </h4>
                    </li>
                    <li>
                      <img
                        className="small-screen-arrow pl-4"
                        src={RightArrow}
                        alt="right-arrow"
                      />
                    </li>
                    <li>
                      <h4 className="f-f-m small-screen-text pl-4 text-xl text-white sm:text-2xl">
                        Blog
                      </h4>
                    </li>
                  </ul>

                  <h1 className="f-f-m mt-2 text-[55px] text-green sm:text-12xl">
                    Welcome
                  </h1>
                  <div className="w-full sm:w-[435px]">
                    <h5 className="f-f-r mt-2 text-xl text-white sm:text-4xl">
                      Check out the resources below for more proof on how Our
                      App leading and making lasting impart in the general
                      healthcare sector
                    </h5>
                  </div>

                  <h3 className="f-f-m mt-12 flex pb-5 text-2xl text-white sm:mt-[76px]">
                    <img className="" src={DownArrow} alt="right-arrow" />
                    <h3 className="dicoverHeading pl-3">Discover</h3>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 w-11/12 2xl:max-w-[1154px]">
            <ul
              style={{ listStyleType: "disc" }}
              className="w-12/12 mx-4 flex flex-wrap justify-between"
            >
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Healthcare Trends
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Telemedicine
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Mental Health
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Medical Tourism
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Patient Stories
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Diversity & Inclusion
              </li>
            </ul>
            <div className="primary-color-bg mt-10 h-[2px] w-full"></div>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-10 w-11/12 2xl:max-w-[1154px]">
            {/* Blogs category */}
            <div className="flex gap-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {filterBlogsByCategory("Blogs").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>

            <div className="primary-color-bg mt-10 h-[2px] w-full"></div>
            {/* Healthcare category */}
            <div className="mt-10">
              <div className="heading-css primary-color flex w-full justify-center pb-10">
                <h2>Top Healthcare Trends</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {filterBlogsByCategory("Healthcare").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className="primary-color-bg mt-10 h-[2px] w-full"></div>
            {/* Mental Heal Tips */}
            <div className="mt-10">
              <div className="heading-css primary-color flex w-full justify-center pb-10">
                <h2>Mental Heal Tips</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {filterBlogsByCategory("Mental Heal Tips").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className="primary-color-bg mt-10 h-[2px] w-full"></div>
            {/* Patient Stories */}
            <div className="heading-css primary-color mt-10 flex w-full justify-center">
              <h2>Patient Stories</h2>
            </div>
            <div className="mt-10 flex gap-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {filterBlogsByCategory("Patient Stories").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
};

export default Blogs;
