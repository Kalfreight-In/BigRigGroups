import React from 'react';
import Navbar from '../../Components/Navbar';
import {AiOutlineClockCircle} from "react-icons/ai"

export default function Footer() {
  return (
    <>
      <div className="bg-Lightblue">
        <div className="flex lg:flex-row flex-col 2xl:pt-16 lg:pt-4 lg:flex lg:justify-between">
          <div
            className="flex-1 lg:w-1/2  lg:block "
            // className="flex-1 lg:block hidden"
            style={{
              backgroundImage:
                'url(' +
                'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/backmapfooter.svg' +
                ')',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: 'full',
              marginRight: '5rem',
            }}
          >
            <div className="lg:ml-36 ml-4 lg:mt-0 mt-8">
              <div id="logo">
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
                  alt="logo"
                  className="2xl:h-28 lg:h-24  h-20"
                  href="mailto:umarkhurshid3@gmail.com"
                />
              </div>
              <div id="email" className="text-white flex  lg:mt-12 mt-4">
                <div>
                  {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-white mt-2 "
                  /> */}
                  <AiOutlineClockCircle className="h-12 w-10" />
                </div>
                <div className="block ml-4">
                  <span className="block">Working hours</span>
                  <span className="text-2xl font-bold">
                    8 AM to 5 PM <br />
                  (Monday to Friday) 
                  </span>
                </div>
              </div>

              <div id="phone" className="text-white flex mt-4">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                    alt=""
                    className="text-white mt-2"
                  />
                </div>
                <div className="ml-4">
                  <span className="block">
                    Why speak to robots when we have subject matter experts just
                    a call away.
                  </span>
                  <span className="text-2xl font-bold">800-977-0010</span>
                </div>
              </div>

              <div id="language" className="text-white flex mb-8 lg:mb-2  pt-5">
                <div className="ml-4">
                  <span>English, ਪੰਜਾਬੀ, Español, Français, हिन्दी</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-row mb-8 lg:mb-2">
            <div
              id="two"
              className="lg:flex-2 pr-4 flex-1  lg:w-2/12 lg:pl-0 pl-4"
            >
              <div className="text-white ">
                <h1 className="2xl:text-footerheading text-desc font-bold w-4/5">
                  Inventory
                </h1>
              </div>
              <br />

              <div id="ancrtrl" className="text-white 2xl:leading-8 leading-6 ">
                <a href="" className="block md:text-16px text-sm">
                  Dry van for sale
                </a>
                <a href="" className="block md:text-16px text-navsmall">
                  Reefer trailer for sale
                </a>
                <a href="" className="block md:text-16px text-navsmall">
                  Flatbed for sale
                </a>
                <a href="" className="block md:text-16px text-navsmall">
                  Used Trailers for sale
                </a>
                <a href="" className="block md:text-16px text-navsmall">
                  Used Trucks for sale
                </a>
              </div>
            </div>

            <div
              id="three"
              className="lg:flex-2 pr-4 flex-1 lg:w-2/12 "
              // className="flex-2 pr-4 lg:w-2/12 w-full"
            >
              <div className="text-white">
                <h1 className="2xl:text-footerheading text-desc font-bold  ">
                  Quick Links
                </h1>
              </div>
              <br />

              <div
                id="ancrpart"
                className="text-white  2xl:leading-8 leading-6"
              >
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Financing Options
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    24*7 Roadside Assistance{" "}
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Scheduled Maintenance
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Careers
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    News & Events
                  </a>
                </div>
              </div>
            </div>

            <div id="four" className="lg:flex-2 flex-1 lg:w-1/6 leading-8">
              <div className="text-white">
                <h1 className=" font-bold  2xl:text-footerheading text-desc">
                  Tires & Services
                </h1>
              </div>
              <br />

              <div
                id="ancrtire"
                className="text-white 2xl:leading-8 leading-6 "
              >
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Trailers / Trucks & Leasing - trailers@bigrigcanada.com
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Tires – tires@bigrigcanada.com{" "}
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Partz – partz@bigrigcanada.com{" "}
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    Careers- hr@bigrigcanada.com{" "}
                  </a>
                </div>
                <div>
                  <a href="" className="block md:text-16px text-navsmall">
                    For all other enquires reach us at – info@bigrigcanada.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="secondmain">
        <Navbar />
      </div> */}
    </>
  );
}

