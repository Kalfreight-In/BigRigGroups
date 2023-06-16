import React from 'react';
import { AboutusSec } from '../../data';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';



export default function Abouthome() {
  const aboutdata = AboutusSec[0];
  return (
    <>
      <div id="aboutus" className="h-medium-height lg:h-mobileSecondImage">
        <div
          // className="h-medium-height "
          className="h-medium-height lg:h-75vh xl:h-mobileSecondImage md:bg-cover bg-contain bg-no-repeat md:bg-center bg-bottom "
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/abouthomeimage.png' +
              ')',
          }}
        >
          <div>
            <div className="mt-20">
              <div>
                <div>
                  <div className="flex justify-center items-center ">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl md:text-Heading  w-fit 2xl:mt-18 xl:mt-16 lg:mt-12 mb-6 text-center   p-2 font-bold  link link-underline link-underline-black ">
                      {aboutdata.headingmain}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className=" leading-6 sm:leading-10 text-base mx-8 sm:mx-0 md:text-xl lg:text-2xl   lg:text-Description  2xl:w-3/5 xl:w-3/5 lg:w-4/5 w-fit tracking-wide md:font-medium lg:font-semibold  flex justify-center items-center text-justify md:px-16 lg:px-0">
                      {aboutdata.desc}
                      {/* <br /> <br />
                  {aboutdata.descOne} */}
                    </p>
                  </div>

                  <div className="flex justify-center itesm-center lg:mt-16 mt-8">
                  <ScrollLink to="ContactSection" smooth={true} duration={500}>
                    <button className="  text-white bg-Lightblue  font-bold  rounded-md shadow-sm hover:shadow-md shadow-blue-shadow hover:shadow-blue-shadowhover p-4 md:px-8 w-60 2xl:text-2xl lg:text-md ">
                      Reach Us
                    </button>
                    </ScrollLink>
                  </div>
                </div>

                {/* <div
            id="secondmain"
            className="flex lg:flex-row flex-col justify-center items-center mt-8 "
          >
            {aboutdata.aboutimg.map((element) => (
              <div id="logo" key={element.id}>
                <img
                  className="mx-2"
                  src={element.logo}
                  alt={element.heading} 
                />
              </div>
            ))}
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
