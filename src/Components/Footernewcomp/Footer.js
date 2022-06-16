import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link as Slink } from 'react-scroll';
import { Link } from 'react-router-dom';
export default function Footer() {
  const [Hinventery, setHinventery] = useState(false);
  const [Hquicklinks, setHquicklinks] = useState(false);
  const [Hcontactus, setHcontactus] = useState(false);

  return (
    <>
      <div className="bg-Lightblue">
        <div className="p-8  md:p-0 lg:block flex justify-center ">
          <img
            src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
            alt="logo"
            className="2xl:h-28 lg:h-24  h-20 lg:hidden flex md:ml-0 lg:ml-36 "
          />
        </div>

        <div
          className="flex md:flex-row flex-col-reverse 2xl:pb-8 xl:pt-8 md:pt-4 md:flex md:justify-between md:bg-cover bg-contain"
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png' +
              ')',

            backgroundPosition: 'center',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'full',
          }}
        >
          <div className=" justify-center items-center pt-4  flex md:hidden ">
            <div id="allicons" className="flex  ">
              <RiFacebookCircleLine
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/BigRiggroups/',
                    '_blank'
                  )
                }
                className="text-white  h-1.8rem w-1.8rem mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
              />
              <AiOutlineInstagram
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/bigriggroup/',
                    '_blank'
                  )
                }
                className="text-white h-1.8rem w-1.8rem mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
              />
              <TiSocialLinkedinCircular
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/company/bigriggroup',
                    '_blank'
                  )
                }
                className="text-white   h-linkdenheight w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
              />
            </div>
          </div>
          <div className=" ">
            <div className="lg:flex lg:flex-wrap lg:-mx-4 py-6 lg:pb-12 w-screen">
              <div className="footer-info lg:w-1/3 lg:px-4 lg:block hidden items-center justify-center">
                <div className="lg:ml-16 w-max justify-center ml-4 lg:mt-0">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
                      alt="logo"
                      className="2xl:h-28 lg:h-24  h-20 md:block hidden"
                      to="mailto:umarkhurshid3@gmail.com"
                    />
                  </div>
                  <div className="text-white flex justify-center  lg:mt-12 mt-4 ml-0 ">
                    <div className="mt-3">
                      {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-white mt-2 "
                  /> */}
                      <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " />
                    </div>
                    <div className="block lg:ml-3 ml-0">
                      {/* <div className="block">Working hours</div> */}
                      <div className="md:text-xl text-16px ml-2 lg:ml-0 text-xl md:font-bold font-semibold ">
                        8 AM to 5 PM <br />
                        (Monday to Friday) 
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex lg:justify-center justify-start mt-4 md:ml-0 ml-0 ">
                    <div className="mt-2">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        <img
                          src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                          alt=""
                          className="text-white"
                          width={15}
                        />
                      </a>
                    </div>
                    <div className="ml-4">
                      {/* <div className="block">
                    Why speak to robots when
                    <br></br>
                    we have subject matter experts just a call away.
                  </div> */}
                      <a href="tel:8009770010" target="_blank">
                        {' '}
                        <div className="md:text-xl lg:text-2xl text-xl font-bold lg:font-semibold  ">
                          800-977-0010
                        </div>{' '}
                      </a>
                    </div>
                  </div>

                  <div className="text-white flex mb-8 lg:mb-2  pt-5">
                    <div className="lg:ml-4 ml-0">
                      <div className="w-full  md:ml-0 lg:ml-12 ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी,
                      </div>
                    </div>
                  </div>
                  {/* <div
                id="mainiconcontainer"
                className=" justify-end mr-28 pt-4 pr-16 md:flex lg:hidden block "
              >
                <div id="allicons" className="flex justify-between  ">
                  <RiFacebookCircleLine
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/BigRiggroups/',
                        '_blank'
                      )
                    }
                    className="text-white  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                  />
                  <AiOutlineInstagram
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/bigriggroup/',
                        '_blank'
                      )
                    }
                    className="text-white h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                  />
                  <TiSocialLinkedinCircular
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/company/bigriggroup',
                        '_blank'
                      )
                    }
                    className="text-white   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                  />
                </div>
              </div> */}
                </div>
              </div>
              <div className="lg:w-2/3 xl:w-1/3 md:px-4 ">
                <div className="sm:flex">
                  <div className="sm:flex-1">
                    <div
                      className="text-white cursor-pointer"
                      onClick={() => {
                        setHinventery(!Hinventery);
                        setHquicklinks(false);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal lg:text-left text-center   ">
                        Inventory
                      </h1>
                    </div>

                    <div
                      className={`text-white 2xl:leading-8 leading-6 lg:block   ${
                        Hinventery ? '' : 'hidden'
                      }`}
                    >
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center  "
                      >
                        Flatbed for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center"
                      >
                        Used Trucks for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center "
                      >
                        New Trailers for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center "
                      >
                        Used Dry van for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center "
                      >
                        Reefer trailers for sale
                      </Link>
                    </div>
                  </div>

                  <div className="sm:flex-1 mt-4 sm:mt-0">
                    <div
                      className="text-white cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(!Hquicklinks);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal lg:text-left  text-center ">
                        Quick Links
                      </h1>
                    </div>

                    <div
                      className={`text-white  2xl:leading-8 leading-6 lg:block  ${
                        Hquicklinks ? '' : 'hidden'
                      }`}
                    >
                      <div>
                        {/* <Link
                    to="#aboutus "
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center"
                  >
                    About us
                  </Link> */}

                        {window.location.pathname == '/' ? (
                          <Slink
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center cursor-pointer "
                            to="aboutus"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                          >
                            About Us
                          </Slink>
                        ) : (
                          <a
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center cursor-pointer "
                            href="/#aboutus"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                          >
                            About Us
                          </a>
                        )}
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center "
                        >
                          News & Events
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center  "
                        >
                          Parts Inventory
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center "
                        >
                          Financing Options
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   lg:text-left text-center"
                        >
                          24X7 Roadside Assistance
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 block lg:hidden mt-4 sm:mt-0">
                    <div
                      className="text-white cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(false);

                        setHcontactus(!Hcontactus);
                      }}
                    >
                      <h1 className=" md:font-bold font-normal  lg:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                        Contact Us
                      </h1>
                    </div>

                    <div
                      className={`text-white 2xl:leading-8 leading-6 lg:block ${
                        Hcontactus ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex flex-row space-x-2  align-center justify-center lg:justify-start mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8 ">
                          Careers
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:hr@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8"
                        >
                          hr@bigrigcanada.com{' '}
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8">
                          Tires
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:tires@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   lg:text-left text-center md:ml-0 ml-8"
                        >
                          tires@bigrigcanada.com
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                          {' '}
                          Partz{' '}
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:partz@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8"
                        >
                          partz@bigrigcanada.com{' '}
                        </a>
                      </div>

                      <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                        <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                          Trailers & Leasing
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:trailers@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8"
                        >
                          trailers@bigrigcanada.com
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                        <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                          For any other inquiry
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:info@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center cursor-pointer md:ml-0 ml-8"
                        >
                          info@bigrigcanada.com
                        </a>
                      </div>
                      {/* <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                      <div
                        id="mainiconcontainer"
                        className=" justify-end mr-28 pt-4 pr-16 hidden lg:flex "
                      >
                        <div id="allicons" className="flex justify-between  ">
                          <RiFacebookCircleLine
                            onClick={() =>
                              window.open(
                                'https://www.facebook.com/BigRiggroups/',
                                '_blank'
                              )
                            }
                            className="text-white  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                          />
                          <AiOutlineInstagram
                            onClick={() =>
                              window.open(
                                'https://www.instagram.com/bigriggroup/',
                                '_blank'
                              )
                            }
                            className="text-white h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                          />
                          <TiSocialLinkedinCircular
                            onClick={() =>
                              window.open(
                                'https://www.linkedin.com/company/bigriggroup',
                                '_blank'
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
              <div className="  lg:flex-1 flex-1 lg:w-2/12 hidden lg:flex md:justify-end justify-center  ">
                <div>
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);

                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <h1 className=" md:font-bold font-normal  lg:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                      Contact Us
                    </h1>
                  </div>

                  <div
                    className={`text-white 2xl:leading-8 leading-6 md:block ${
                      Hcontactus ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex flex-row space-x-2  align-center justify-center lg:justify-start mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8 ">
                        Careers
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:hr@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8"
                      >
                        hr@bigrigcanada.com{' '}
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8">
                        Tires
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:tires@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   lg:text-left text-center md:ml-0 ml-8"
                      >
                        tires@bigrigcanada.com
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                        {' '}
                        Partz{' '}
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:partz@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center md:ml-0 ml-8"
                      >
                        partz@bigrigcanada.com{' '}
                      </a>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                      <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                        Trailers & Leasing
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:trailers@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8"
                      >
                        trailers@bigrigcanada.com
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start  mt-3">
                      <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    lg:text-left text-center md:ml-0 ml-8">
                        For any other inquiry
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:info@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     lg:text-left text-center cursor-pointer md:ml-0 ml-8"
                      >
                        info@bigrigcanada.com
                      </a>
                    </div>
                    {/* <div className="flex flex-row space-x-2 align-center justify-center lg:justify-start">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  lg:text-left text-center"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                    <div
                      id="mainiconcontainer"
                      className=" justify-end mr-28 pt-4 pr-16  "
                    >
                      <div id="allicons" className="flex justify-between  ">
                        <RiFacebookCircleLine
                          onClick={() =>
                            window.open(
                              'https://www.facebook.com/BigRiggroups/',
                              '_blank'
                            )
                          }
                          className="text-white  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                        />
                        <AiOutlineInstagram
                          onClick={() =>
                            window.open(
                              'https://www.instagram.com/bigriggroup/',
                              '_blank'
                            )
                          }
                          className="text-white h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                        />
                        <TiSocialLinkedinCircular
                          onClick={() =>
                            window.open(
                              'https://www.linkedin.com/company/bigriggroup',
                              '_blank'
                            )
                          }
                          className="text-white   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-info lg:w-1/3 md:px-4 lg:hidden flex items-center justify-center">
                <div className="lg:ml-16 w-max justify-center ml-4 lg:mt-0">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
                      alt="logo"
                      className="2xl:h-28 lg:h-24  h-20 lg:block hidden"
                      to="mailto:umarkhurshid3@gmail.com"
                    />
                  </div>
                  <div className="text-white flex justify-center  lg:mt-12 mt-4 ml-0 ">
                    <div className="mt-3">
                      {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-white mt-2 "
                  /> */}
                      <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " />
                    </div>
                    <div className="block lg:ml-3 ml-0">
                      {/* <div className="block">Working hours</div> */}
                      <div className="md:text-xl text-16px ml-2 lg:ml-0 text-xl md:font-bold font-semibold ">
                        8 AM to 5 PM <br />
                        (Monday to Friday) 
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex lg:justify-center justify-start mt-4 md:ml-0 ml-0 ">
                    <div className="mt-2">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        <img
                          src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                          alt=""
                          className="text-white"
                          width={15}
                        />
                      </a>
                    </div>
                    <div className="ml-4">
                      {/* <div className="block">
                    Why speak to robots when
                    <br></br>
                    we have subject matter experts just a call away.
                  </div> */}
                      <a href="tel:8009770010" target="_blank">
                        {' '}
                        <div className="md:text-xl lg:text-2xl text-xl font-bold lg:font-semibold  ">
                          800-977-0010
                        </div>{' '}
                      </a>
                    </div>
                  </div>

                  <div className="text-white flex mb-8 lg:mb-2  pt-5">
                    <div className="lg:ml-4 ml-0">
                      <div className="w-full  md:ml-0 lg:ml-12 ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी,
                      </div>
                    </div>
                  </div>
                  {/* <div
                id="mainiconcontainer"
                className=" justify-end mr-28 pt-4 pr-16 md:flex lg:hidden block "
              >
                <div id="allicons" className="flex justify-between  ">
                  <RiFacebookCircleLine
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/BigRiggroups/',
                        '_blank'
                      )
                    }
                    className="text-white  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                  />
                  <AiOutlineInstagram
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/bigriggroup/',
                        '_blank'
                      )
                    }
                    className="text-white h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                  />
                  <TiSocialLinkedinCircular
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/company/bigriggroup',
                        '_blank'
                      )
                    }
                    className="text-white   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                  />
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-1 flex-row items-center justify-center mb-0 lg:mb-2 mt-4 lg:mr-12">
            <div className="lg:flex-1  flex lg:justify-end lg:w-1/6 lg:ml-8 ml-0 ">
             
            </div>
          </div> */}
          {/* flex flex-auto lg:flex-row flex-col  mb-0 lg:mb-2 mt-6 md:ml-28 lg:ml-8 ml-0 lg:items-start items-center */}
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
