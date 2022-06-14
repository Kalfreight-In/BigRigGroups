import React from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll, Link } from 'react-scroll';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
import styled from 'styled-components';
import { Businessdata } from '../../data';
import Accordion from '../Accordion';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../Hooks/Hover';
import { NavLink as LinkR } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';
var mydata = Businessdata[0];
export const NavLinks = styled(LinkR)`
  // background: ${(props) => `url(${props.Mimage})`};

  // @media (max-width: 768px) {
  //   background: ${(props) => `url(${props.Mimage})`};
  // }
  // cursor: pointer;
`;
export default function Business() {
  const [hoverRef, isHovered] = useHover();
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)',
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <>
      {/* <div class="social"></div> */}
      <div className="bg-businessbackground">
        <div className="lg:p-12 p-2 drop-shadow-2xl">
          <div className="flex justify-center items-center font-semibold">
            <h1 className="lg:text-5xl text-3xl font-bold link link-underline link-underline-black text-Heading mb-6 pb-2"> 
              {mydata.heading}
            </h1>
          </div>

          <div className={`flex w-full lg:flex-row flex-col`}>
            <div class=" flex w-full">
              <div class={`gallery-wrap flex lg:flex-row flex-col w-fill`}>
                {mydata.thebox.map((element) =>
                  isMobile ? (
                    <NavLinks
                      to={element.url}
                      className="h-businessImage lg:bg-cover  bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${element.Mimageurl})`,
                      }}
                      // whileHover={{
                      //   transition: {
                      //     duration: 0.5,
                      //     ease: 'easeInOut',
                      //   },
                      // }}
                    >
                      {' '}
                    </NavLinks>
                  ) : (
                    <NavLinks
                      to={element.url}
                      className={`item `}
                      style={{
                        backgroundImage: `url(${element.imageurl})`,
                      }}
                      // whileHover={{
                      //   transition: {
                      //     duration: 0.5,
                      //     ease: 'easeInOut',
                      //   },
                      // }}
                    >
                      {/* <Accordion title={element.heading} text={element.desc} /> */}

                      {/* <div
                        id="backgroundd"
                        className="h-65vh  mx-2 mt-8 "
                        style={{
                          // backgroundImage:
                          //   'url(' +
                          //   'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/businessback.svg' +
                          //   ')',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div id="box">
                          <div>
                            <img
                              src={element.logo}
                              alt="logo"
                              className="w-56 h-20"
                            />
                          </div>
                          <div>
                            <h1 className="text-Heading text-5xl font-sub-heading font-semibold w-4/5 leading-44px pt-6">
                              {element.heading}
                            </h1>
                          </div>
                          <div>
                            <p className="text-2xl pt-12 font-normal w-64">
                              {element.desc}
                            </p>
                          </div>

                          <div id="imagemain" className="flex justify-between">
                            <div></div>
                            <div>
                              <img src={element.logotwo} alt="" />
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div id="btn">
                        <button className="bg-Lightblue w-50rem h-14 ml-4">
                          {element.btn}
                        </button>
                      </div> */}
                    </NavLinks>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
