import React, { useState } from "react";
import arrow from "../../assets/Images/arrow.svg";
import { motion } from "framer-motion";
import BgImage from "../../assets/Images/GroupWebsitesBackground.png";
import { GroupWebsiteComponentdata } from "../../data.js";
import ContactSection from "../../Components/ContactSection1";
import Link from "react-scroll/modules/components/Link";

function GroupWebsiteComponent() {
  const [showmore, setshowmore] = useState(true);
  return (
    <>
      <div className="bg-white">
        {GroupWebsiteComponentdata.map((outerData) => (
          <div className="container w-screen text-gray-600" key={outerData.id}>
            <div
              className={
                outerData.id % 2 !== 0
                  ? "md:flex md:w-screen w-fit"
                  : "md:flex md:flex-row-reverse md:w-screen flex-col-reverse w-fit"
              }
            >
              <div className="flex flex-row items-center justify-center m-2 mt-4 md:hidden">
                <motion.img
                  whileInView={{ scale: [0.5, 1] }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  alt="profile_circle"
                  src={outerData.icon}
                  width="100"
                  className="pr-4"
                ></motion.img>
                <div className="font-display text-2xl font-bold leading-tight mb-4">
                  <h2 className="text-2xl self-center text-Heading font-bold link link-underline link-underline-black 2xl:pb-8 pb-2 2xl::mb-4 mb-2 ">
                    {outerData.heading}
                  </h2>
                </div>
              </div>
              <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info flex-1"
              >
                <div className={outerData.id % 2 !== 0 ? "md:5/12" : "md:5/12"}>
                  <div className="relative">
                    <div
                      className="md:h-groupmainimage lg:h-60vh xl:h-screen h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(${outerData.imageurl})` }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="md:6/12 flex-col flex content-center flex-1 md:mt-0 mt-8">
                <div className="md:6/12 flex-col flex content-center justify-center md:w-4/3 flex-1 self-start items-start m-4 laptop:ml-28 mt-2">
                  <div className="md:flex hidden flex-row items-center content-start mt-2 md:-ml-32 md:pl-28 pl-6">
                    <motion.img
                      whileInView={{ scale: [0.5, 1] }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      alt="profile_circle"
                      src={outerData.icon}
                      width="100"
                      className="pr-8"
                    ></motion.img>
                    <div className="font-display text-2xl font-bold leading-tight">
                      <h2 className="xl:text-5xl self-start text-Heading font-bold md:text-2xl link link-underline link-underline-black 2xl:pb-8 pb-2 2xl::mb-4 mb-2 ">
                        {outerData.heading}
                      </h2>
                    </div>
                  </div>
                  {outerData.desc.map((innerData) => (
                    <div
                      className="2xl:w-3/4 2xl:mt-4 md:mt-2 md:mx-0 mx-6 "
                      key={innerData.id}
                    >
                      {innerData.id === 1 ? (
                        <>
                          <p className="mt-2 text-Description font-desc text-descnew text-justify md:mr-6 2xl:mr-0">
                            {innerData.desc}
                          </p>
                          <div
                            className="text-lg underline text-sky-400 cursor-pointer hidden md:block lg:hidden"
                            onClick={() => {
                              setshowmore(!showmore);
                            }}
                          >
                            {showmore ? "Show More" : "Show less"}
                          </div>
                        </>
                      ) : (
                        <div
                          className={`lg:block block ${
                            showmore ? "md:hidden" : ""
                          }`}
                        >
                          <p className="mt-2 text-Description font-desc text-descnew text-justify md:mr-6 2xl:mr-0">
                            {innerData.desc}
                          </p>
                          {innerData.desc1 ? (
                            <div className="mt-2 md:mr-6 2xl:mr-0  ">
                              <p className="text-Description font-desc text-descnew text-justify ">
                                {innerData.desc1[0].head}
                              </p>
                              {innerData.desc1[0].desc.map((info) => (
                                <p
                                  key={info.id}
                                  className=" laptop:mt-2 text-Description font-desc text-descnew text-justify md:mt-2 mt-4"
                                >
                                  * {info.desc}
                                </p>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  ))}
                  {outerData.comingsoon ? (
                    <section className="centered-container">
                      <a className="link link--arrowed " href="#">
                        <div className="flex flex-row align-center justify-center pt-2">
                          <h2 className="text-md text-Lightblue font-semibold md:text-md text-center pr-4">
                            Coming soon
                          </h2>
                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#2175FF"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            >
                              <circle
                                className="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                className="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </section>
                  ) : (
                    <div className="md:w-fit w-full ">
                      <Link to="ContactSection" duration={1000} offset={-80}>
                        <button className="md:ml-0 md:mr-0 mr-4 text-white bg-yellow-bg md:px-4 md:p-2 p-4 font-semibold 2xl:mt-6 mt-2 rounded-md shadow-sm hover:shadow-md italic shadow-yellow-shadow transition-all hover:drop-shadow-md flex items-center justify-center w-full 2xl:text-xl md:text-md text-2xl ">
                          {outerData.cta.heading}
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GroupWebsiteComponent;
