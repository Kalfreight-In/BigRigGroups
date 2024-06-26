import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { animateScroll as scroll, Link } from 'react-scroll';
// import ErrorBoundary from '../ErrorBoundary';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinksA,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const history = useNavigate();
  console.log(window.scrollY);
  // function loadLogo(path) {
  //   if (path == '/BigRigGroups') {
  //     return 'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/navlogo.svg';
  //   }
  //   if (path == '/partz') {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Parts-nav-logo.png';
  //   }
  //   if (path == '/tires') {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/tires-nav-logo.png';
  //   } else {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Trailers-nav-logo.png';
  //   }
  // }
  // const initialState = loadLogo(window.location.pathname);

  const [logo, setlogo] = useState(
    'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/navlogobig.png'
  );
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.location.pathname == '/trailerandleasing') {
      console.log(`it is inside the ${window.location.pathname}`);
      setScrollNav(true);
      return;
    }
    if (window.scrollY > 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
useEffect(() => {
  if (window && window.location) {
    console.log(window.location.pathname);
    if (window.location.pathname === "/trailerandleasing") {
      setlogo(
        "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Trailers-nav-logo.png"
      );

      setScrollNav(true);
    } else if (window.location.pathname === "/") {
      setlogo(
        "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/navlogobig.png"
      );
    } else if (window.location.pathname === "/partz") {
      setlogo(
        "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Parts-nav-logo.png"
      );
    } else if (window.location.pathname === "/tires") {
      setlogo(
        "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/tires-nav-logo.png"
      );
    } else {
      setlogo(
        "https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/navlogobig.png"
      );
      scroll.scrollToTop();
    }
  }
}, [window && window.location && window.location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function disabeled() {
    return window.localStorage.getItem('product');
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1em" }}>
        <Nav scrollNav={scrollNav}>
          <div className="flex flex-row ml-8">
            <NavLogo to="/" onClick={toggleHome} className="max-w-max">
              <img
                // className="2xl:w-56 w-44  2xl:h-44 h-32  "
                className="pt-0 flex-1 w-50 "
                src={logo}
                alt="logo"
              />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/"
                  onClick={toggleHome}
                  className="2xl:text-sm   xl:text-xs md:text-xs md:text-xs  "
                >
                  HOME
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="/trailerandleasing"
                  onClick={toggleHome}
                  className="2xl:text-sm  text-navsmall xl:text-xs md:text-xs md:text-xs w-max"
                >
                  TRAILERS & LEASING
                </NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinksA
                  href="http://www.bigrigtrailers.com/"
                  target="_blank"
                  onClick={toggleHome}
                  className="2xl:text-sm  xl:text-xs md:text-xs "
                >
                  TRAILERS & LEASING
                </NavLinksA>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall md:text-xs md:text-xs"
                >
                  PARTZ
                </NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinksA
                  href="https://bigrigpartz.com/"
                  target="_blank"
                  onClick={toggleHome}
                  className="2xl:text-sm  xl:text-xs md:text-xs "
                >
                  PARTZ
                </NavLinksA>
              </NavItem>
              <NavItem>
                <a href="/tires">
                  <NavLinks
                    to="/tires"
                    onClick={toggleHome}
                    className="2xl:text-sm  xl:text-xs md:text-xs w-max"
                  >
                    TIRES & SERVICES
                  </NavLinks>
                </a>
              </NavItem>
              <NavItem>
                {window.location.pathname === "/" ? (
                  <NavLinks
                    to="ContactSection"
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  md:text-xs  "
                  >
                    <Link to="ContactSection" duration={1000} offset={-80}>
                      CONTACT
                    </Link>
                  </NavLinks>
                ) : (
                  <NavLinksA
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  md:text-xs "
                  >
                    <a href="/#ContactSection" duration={1000} offset={-80}>
                      CONTACT
                    </a>
                  </NavLinksA>
                )}
              </NavItem>
              {/* <NavItem>
                  <NavLinks
                    to="/newsevents"
                    onClick={toggleHome}
                    className="2xl:text-sm  xl:text-xs   md:text-xs w-max"
                  >
                    NEWS & EVENTS
                  </NavLinks>
                </NavItem> */}
              <NavItem>
                <NavLinksA
                  href="/careers"
                  onClick={toggleHome}
                  className="2xl:text-sm  xl:text-xs   md:text-xs w-max"
                >
                  CAREERS
                </NavLinksA>
              </NavItem>
              {window.location.pathname === "/" ? (
                <NavItem>
                  <NavLinks
                    to="Location"
                    onClick={toggleHome}
                    className="2xl:text-sm  md:text-xs  "
                  >
                    <Link to="Location" duration={1000} offset={-80}>
                      LOCATIONS
                    </Link>
                  </NavLinks>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLinksA
                    href="/#Location"
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  md:text-xs  "
                  >
                    <a href="/#Location" duration={1000} offset={-80}>
                      LOCATIONS
                    </a>
                  </NavLinksA>
                </NavItem>
              )}
              <NavItem>
                <NavLinksA
                  href="/creditapplication"
                  className="2xl:text-sm xl:text-xs  md:text-xs  w-max"
                >
                  CREDIT APPLICATION
                </NavLinksA>
              </NavItem>
              (
              <NavItem>
                <NavLinksA
                  href="/Nopayment"
                  className="2xl:text-sm xl:text-xs  md:text-xs  w-max"
                >
                  NO PAYMENT FOR 6 MONTHS OFFER
                </NavLinksA>
              </NavItem>
              )
              <MobileIcon onClick={toggle}>
                <FaBars color="#111" />
              </MobileIcon>
            </NavMenu>
          </div>

          <NavBtn className="mr-8">
            <a href="tel:8009770010" target="_blank">
              <button className="text-white bg-yellow-bg  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-md  flex items-center justify-center 2xl:w-36   md:w-36 md:32 2xl:h-12 h-10 2xl:text-base xl:text-sm md:text-sm md:text-md">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                    alt=""
                    className="text-white pr-1 pt-1"
                    width="18px"
                  />
                </div>
                800 977 0010
              </button>
            </a>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

// kal-trailers-leasing-inc-is-californias-one-stop-shop-for-all-your-trucking-needs
