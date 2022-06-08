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
    'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/navlogo.svg'
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
    if (window.location.pathname == '/trailerandleasing') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Trailers-nav-logo.png'
      );

      setScrollNav(true);
    } else if (window.location.pathname == '/BigRigGroups') {
      setlogo(
        'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/navlogo.svg'
      );
    } else if (window.location.pathname == '/partz') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/Parts-nav-logo.png'
      );
    } else if (window.location.pathname == '/tires') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/tires-nav-logo.png'
      );
    } else if (window.location.pathname == '/BigRigGroups/') {
      console.log(`lollll h hgaya${window.location.pathname}`);
      scroll.scrollTo(7000);
    } else {
      setlogo(
        'https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/navlogo.svg'
      );
      scroll.scrollToTop();
    }
  }, [window.location.pathname]);
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
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <div className="flex flex-row ml-8">
            <NavLogo
              to="/BigRigGroups"
              onClick={toggleHome}
              className="max-w-max"
            >
              <img
                // className="2xl:w-56 w-44  2xl:h-44 h-32  "
                className="pt-0 flex-1 w-40 "
                src={logo}
                alt="logo"
              />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/BigRigGroups"
                  onClick={toggleHome}
                  className="2xl:text-15px  xl:text-xs lg:text-xs md:text-xs  "
                >
                  HOME
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/trailerandleasing"
                  onClick={toggleHome}
                  className="2xl:text-15px text-navsmall xl:text-xs lg:text-xs md:text-xs w-max"
                >
                  TRAILER & LEASING
                </NavLinks>
              </NavItem>

              {/* <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                >
                  PARTZ
                </NavLinks>
              </NavItem> */}

              <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-15px xl:text-xs lg:text-xs md:text-xs"
                >
                  PARTZ
                </NavLinks>
              </NavItem>

              <NavItem>
                <a href="/BigRigGroups/tires">
                  <NavLinks
                    to="/tires"
                    onClick={toggleHome}
                    className="2xl:text-15px  xl:text-xs lg:text-xs md:text-xs w-max"
                  >
                    TIRES & SERVICES
                  </NavLinks>
                </a>
              </NavItem>

              <NavItem>
                {window.location.pathname == '/BigRigGroups' ? (
                  <NavLinks
                    to="ContactSection"
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  lg:text-xs md:text-xs "
                  >
                    <Link
                      to="ContactSection"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact={true}
                      offset={-80}
                    >
                      CONTACT
                    </Link>
                  </NavLinks>
                ) : (
                  <NavLinks
                    to="/BigRigGroups/#ContactSection"
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  lg:text-xs md:text-xs "
                  >
                    <Link
                      to="/BigRigGroups/#ContactSection"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact={true}
                      offset={-80}
                    >
                      CONTACT
                    </Link>
                  </NavLinks>
                )}
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/BigRigGroups/nt"
                  onClick={toggleHome}
                  className="2xl:text-15px xl:text-xs lg:text-xs  md:text-xs w-max"
                >
                  NEWS & EVENTS
                </NavLinks>
              </NavItem>
              {window.location.pathname == '/BigRigGroups' ? (
                <NavItem>
                  <NavLinks
                    to="Location"
                    onClick={toggleHome}
                    className="2xl:text-sm  lg:text-xs md:text-xs "
                  >
                    <Link
                      to="Location"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact={true}
                      offset={-80}
                    >
                      LOCATIONS
                    </Link>
                  </NavLinks>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLinks
                    to="/BigRigGroups/#Location"
                    onClick={toggleHome}
                    className="2xl:text-sm xl:text-xs  lg:text-xs md:text-xs "
                  >
                    <Link
                      to="Location"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact={true}
                      offset={-80}
                    >
                      LOCATIONS
                    </Link>
                  </NavLinks>
                </NavItem>
              )}

              <NavItem>
                <NavLinks
                  to="/BigRigGroups/ct"
                  onClick={toggleHome}
                  className="2xl:text-15px xl:text-sm lg:text-xs md:text-xs w-max"
                >
                  CREDIT APPLICATION
                </NavLinks>
              </NavItem>

              <MobileIcon onClick={toggle}>
                <FaBars color="#111" />
              </MobileIcon>
            </NavMenu>
          </div>

          <NavBtn className="mr-8">
            <button className="text-white bg-yellow-bg  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-36   lg:w-36 md:32 2xl:h-12 h-10 2xl:text-base xl:text-sm lg:text-sm md:text-md">
              <div>
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                  alt=""
                  className="text-white pr-1 pt-1"
                  width="18px"
                />
              </div>
              (800) 977 0010
            </button>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
