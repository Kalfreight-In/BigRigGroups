import React, { useState } from 'react';
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
      <div className="bg-Lightblue ">
        <div className="p-8  lg:p-0 lg:block flex justify-center ">
          <img
            src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/bigrigfooterlogo.png"
            alt="logo"
            className="2xl:h-28 lg:h-24  h-20 md:hidden flex md:ml-0 lg:ml-36 "
          />
        </div>

        <div
          className="flex lg:flex-row flex-col-reverse 2xl:pb-8 xl:pt-8 lg:pt-4 lg:flex lg:justify-between"
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png' +
              ')',

            backgroundPosition: 'center',
            backgroundSize: 'cover',

            backgroundRepeat: 'no-repeat',
            width: 'full',
          }}
        >
          <div
            className="flex-1 lg:w-7/12  lg:block w-full flex justify-center items-center"
            // className="flex-1 lg:block hidden"
          >
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
                  <div className="md:text-xl text-16px text-xl md:font-bold font-semibold ">
                    8 AM to 5 PM <br />
                    (Monday to Friday) 
                  </div>
                </div>
              </div>

              <div className="text-white flex justify-center mt-4 md:ml-0 ml-0 ">
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

          <div className="flex flex-auto lg:flex-row flex-col  mb-0 lg:mb-2 mt-6 md:ml-28 lg:ml-8 ml-0 lg:items-start items-center">
            <div className="lg:flex-1 flex-1 lg:w-2/12 md:block ">
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  setHinventery(!Hinventery);
                }}
              >
                <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal lg:text-left text-center  ml:0 lg:ml-24 lg:mt-0 ">
                  Inventory
                </h1>
              </div>
              <br />

              <div
                className={`text-white 2xl:leading-8 leading-6 lg:block  lg:mt-0 mt-2 ${
                  Hinventery ? '' : 'hidden'
                }`}
              >
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24 md:-mt-0 -mt-6 "
                >
                  Flatbed for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                >
                  Used Trucks for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                >
                  New Trailers for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                >
                  Used Dry van for sale
                </Link>
                <Link
                  to="/newsevents"
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                >
                  Reefer trailers for sale
                </Link>
              </div>
            </div>

            <div className="lg:flex-1 flex-1 lg:w-2/12 md:block   ">
              <div
                className="text-white cursor-pointer"
                onClick={() => {
                  setHquicklinks(!Hquicklinks);
                }}
              >
                <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal lg:text-left  text-center  ml-0   lg:ml-24  pt-0 lg;mt-0 mt-2">
                  Quick Links
                </h1>
              </div>
              <br />

              <div
                className={`text-white  2xl:leading-8 leading-6 lg:block  ${
                  Hquicklinks ? '' : 'hidden'
                }`}
              >
                <div>
                  {/* <Link
                    to="#aboutus "
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center"
                  >
                    About us
                  </Link> */}

                  {window.location.pathname == '/' ? (
                    <Slink
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center cursor-pointer md:ml-0 ml-0  lg:ml-24 md:-mt-0 -mt-6"
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
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center cursor-pointer md:ml-0 ml-0  lg:ml-24"
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
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                  >
                    News & Events
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24 "
                  >
                    Parts Inventory
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                  >
                    Financing Options
                  </Link>
                </div>
                <div>
                  <Link
                    to="/newsevents"
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-0  lg:ml-24"
                  >
                    24X7 Roadside Assistance
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center mb-0 lg:mb-2 mt-4 lg:mr-12">
            <div className="lg:flex-1  flex lg:justify-end lg:w-1/6 lg:ml-8 ml-0 ">
              <div>
                <div
                  className="text-white cursor-pointer"
                  onClick={() => {
                    setHcontactus(!Hcontactus);
                  }}
                >
                  <h1 className=" md:font-bold font-normal lg:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                    Contact Us
                  </h1>
                </div>
                <br className="hidden lg:block" />

                <div
                  className={`text-white 2xl:leading-8 leading-6 lg:block ${
                    Hcontactus ? '' : 'hidden'
                  }`}
                >
                  <div className="flex flex-row space-x-2  align-center justify-center">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8 ">
                      Careers
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:hr@bigrigcanada.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8"
                    >
                      hr@bigrigcanada.com{' '}
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2 align-center justify-center">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8">
                      Tires
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:tires@bigrigcanada.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8"
                    >
                      tires@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2 align-center justify-center">
                    <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8">
                      {' '}
                      Partz{' '}
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:partz@bigrigcanada.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8"
                    >
                      partz@bigrigcanada.com{' '}
                    </a>
                  </div>

                  <div className="flex flex-row space-x-2 align-center justify-center">
                    <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8">
                      Trailers & Leasing
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:trailers@bigrigcanada.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8"
                    >
                      trailers@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2 align-center justify-center">
                    <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center md:ml-0 ml-8">
                      For any other inquiry
                    </div>
                    <span> » </span>
                    <a
                      href="mailto:info@bigrigcanada.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center cursor-pointer md:ml-0 ml-8"
                    >
                      info@bigrigcanada.com
                    </a>
                  </div>
                  {/* <div className="flex flex-row space-x-2 align-center justify-center">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover lg:text-left text-center"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                  <div
                    id="mainiconcontainer"
                    className=" justify-end mr-28 pt-4 pr-16 md:flex hidden "
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
