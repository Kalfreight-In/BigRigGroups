import React from 'react';
import Navbar from '../../Components/Navbar';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
<<<<<<< HEAD
import {AiOutlineInstagram} from 'react-icons/ai';
import {TiSocialLinkedinCircular} from 'react-icons/ti'; 
import { Link as Slink } from "react-scroll";
import {Link} from "react-router-dom";

=======
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { animateScroll as scroll, Link as scrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
>>>>>>> b40482799c307cc23a4b8d51a3bd0ad7a984846c

export default function Footer() {
  {
    window.location.pathname == '/'
      ? console.log(`${window.location.pathname} yesssssssssssssssssss`)
      : console.log(`${window.location.pathname} nooooooooooooooo`); 
  }
  return (
    <>
      <div className="bg-Lightblue">
        <div
          className="flex lg:flex-row flex-col 2xl:pb-8 xl:pt-8 lg:pt-4 lg:flex lg:justify-between"
          style={{
            backgroundImage:
              "url(" +
              "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png" +
              ")",

            backgroundPosition: "center",
            backgroundSize: "cover",

            backgroundRepeat: "no-repeat",
            width: "full",
          }}
        >
          <div
            className="flex-1 w-7/12  lg:block "
            // className="flex-1 lg:block hidden"
          >
            <div className="lg:ml-16 w-max ml-4 lg:mt-0 ">
              <div>
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
                  alt="logo"
                  className="2xl:h-28 lg:h-24  h-20"
                  to="mailto:umarkhurshid3@gmail.com"
                />
              </div>
              <div className="text-white flex  lg:mt-12 mt-4">
                <div className="mt-3">
                  {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-white mt-2 "
                  /> */}
                  <AiOutlineClockCircle className="h-8 w-8 " />
                </div>
                <div className="block ml-3">
                  {/* <div className="block">Working hours</div> */}
                  <div className="text-xl font-bold">
                    8 AM to 5 PM <br />
                    (Monday to Friday) 
                  </div>
                </div>
              </div>

              <div className="text-white flex mt-4">
                <div className="mt-2">
                  <Link to="tel:8009770010" target="_blank">
                    <img
                      src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                      alt=""
                      className="text-white"
                      width={20}
                    />
                  </Link>
                </div>
                <div className="ml-4">
                  {/* <div className="block">
                    Why speak to robots when
                    <br></br>
                    we have subject matter experts just a call away.
                  </div> */}
                  <Link to="tel:8009770010" target="_blank">
                    {' '}
                    <div className="text-xl font-bold">800-977-0010</div>{' '}
                  </Link>
                </div>
              </div>

              <div className="text-white flex mb-8 lg:mb-2  pt-5">
                <div className="ml-4">
                  <div>English, ਪੰਜਾਬੀ, Español, Français, हिन्दी</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-auto flex-row mb-8 lg:mb-2 mt-6 md:ml-28 ml-8 ">
            <div className="lg:flex-1  flex-1  lg:w-2/12 ">
              <div className="text-white ">
                <h1 className="2xl:text-footerheading text-desc font-bold w-4/5 ">
                  Inventory
                </h1>
              </div>
              <br />

              <div className="text-white 2xl:leading-8 leading-6 ">
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Flatbed for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Used Trucks for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  New Trailers for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Used Dry van for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Reefer trailer for sale
                </Link>
              </div>
            </div>

            <div className="lg:flex-1 flex-1 lg:w-2/12 ">
              <div className="text-white">
                <h1 className="2xl:text-footerheading text-desc font-bold  ">
                  Quick Links
                </h1>
              </div>
              <br />

              <div className="text-white  2xl:leading-8 leading-6">
                <div>
                  {/* <Link
                    to="#aboutus "
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    About us
                  </Link> */}

                  <Slink
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover cursor-pointer"
                    to="aboutus" 
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    About Us
                  </Slink>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    News & Events
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    Parts Inventory
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    Financing Options
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    24X7 Roadside Assistance
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row  mb-8 lg:mb-2 mt-6 lg:mr-12">
            <div className="lg:flex-1 flex-1 flex lg:justify-end lg:w-1/6 ml-8 ">
              <div>
                <div className="text-white">
                  <h1 className=" font-bold  2xl:text-footerheading text-desc">
                    Contact Us
                  </h1>
                </div>
                <br />

                <div className="text-white 2xl:leading-8 leading-6 ">
                  <div className="flex flex-row space-x-2">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover">
                      Careers
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:hr@bigrigcanada.com"
                      target="_blank"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      hr@bigrigcanada.com{" "}
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover">
                      Tires
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:tires@bigrigcanada.com"
                      target="_blank"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      tires@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover">
                      {" "}
                      Partz{" "}
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:partz@bigrigcanada.com"
                      target="_blank"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      partz@bigrigcanada.com{" "}
                    </a>
                  </div>

                  <div className="flex flex-row space-x-2">
                    <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover">
                      Trailers & Leasing
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:trailers@bigrigcanada.com"
                      target="_blank"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      trailers@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className="w-max">For any other inquiry</div>
                    <span> » </span>
                    <a
                      href="mailto:info@bigrigcanada.com"
                      target="_blank"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover cursor-pointer"
                    >
                      info@bigrigcanada.com
                    </a>
                  </div>
                  {/* <div className="flex flex-row space-x-2">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                  <div
                    id="mainiconcontainer"
                    className="flex justify-end mr-28 pt-4 pr-16"
                  >
                    <div id="allicons" className="flex justify-between  ">
                      <RiFacebookCircleLine
                        onClick={() =>
                          window.open(
                            "https://www.facebook.com/BigRiggroups/",
                            "_blank"
                          )
                        }
                        className="text-white  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                      />
                      <AiOutlineInstagram
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/bigriggroup/",
                            "_blank"
                          )
                        }
                        className="text-white h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                      />
                      <TiSocialLinkedinCircular
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/bigriggroup",
                            "_blank"
                          )
                        }
                        className="text-white   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="mainiconcontainer">
        <div id="allicons" className="flex justify-end mx-48 ">
        <RiFacebookCircleLine onClick={()=> window.open('https://www.facebook.com/kalgroupusa','_blank')} className="text-white mx-2 cursor-pointer h-1.8rem w-1.8rem" />
        <LinkiOutlineInstagram onClick={()=> window.open('https://www.instagram.com/bigriggroup/', '_blank')} className='text-white  mx-2 cursor-pointer h-1.8rem w-1.8rem' />
        <TiSocialLinkedinCircular onClick={()=> window.open('https://www.linkedin.com/company/bigriggroup','_blank')} className="text-white mx-2 cursor-pointer h-8 w-8" />    
        </div> */}
        {/* </div>   */}
      </div>
    </>
  );
}
