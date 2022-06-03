import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';
// import ErrorBoundary from '../ErrorBoundary';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  console.log(window.scrollY);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
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
            <NavLogo to="/BigRigGroups" onClick={toggleHome}>
              <img
                // className="2xl:w-56 w-44  2xl:h-44 h-32  "
                className="pt-6"
                src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/navlogo.svg"  
                alt="logo"
                width="80%"
              />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/BigRigGroups"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall  max-w-screen-lg:text-xs md:text-xs"
                >
                  HOME
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/trailerandleasing"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
                >
                  TRAILER & LEASING
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/tires"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
                >
                  TIRES & SERVICES
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
                >
                  PARTZ
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="ContactSection"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
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
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
                >
                  NEWS & EVENTS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs md:text-xs"
                >
                  LOCATIONS
                </NavLinks>
              </NavItem>

              <MobileIcon onClick={toggle} className="">
                <FaBars color="#111" />
              </MobileIcon>
            </NavMenu>
          </div>

          <NavBtn className="mr-8">
            <button className="text-white bg-yellow-bg  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-64 lg:w-48 md:32 2xl:h-16 h-12 2xl:text-xl xl:text-lg lg:text-md md:text-md">
              <div>
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Vectorphone.svg"
                  alt=""
                  className="text-white  w-3/5 pt-2"
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
