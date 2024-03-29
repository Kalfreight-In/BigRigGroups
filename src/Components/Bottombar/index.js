import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
// import logo from "../../assets/TrailerAndLeasing/Images/logo.png";
// import logo1 from "../../assets/TrailerAndLeasing/Images/vanguard.png";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './BottomBarElements';

const BottomBar = ({ toggle }) => {
  const [scrollNav] = useState(false);
  const [year, setYear] = useState(() => new Date().getFullYear());
  // const changeNav = ()=> {
  //   if(window.scrollY >= 100) {
  //     setScrollNav(true)
  //   }
  //   else{
  //     setScrollNav(false)
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',changeNav)
  // },[]);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        {/* <NavLogo to="/" onClick={toggleHome}>
          <h3 className="text-left text-gray-200 font-bold md:text-2xl md:text-3xl">
            BIG-RIG
          </h3>
        </NavLogo> */}

        {/* <Bars onClick={toggle}/> */}
        <NavMenu>
          {/* <NavItem>
            <NavLinks
              to="/"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/">Home</a>
            </NavLinks>
          </NavItem> */}

          {/* <NavItem>
            <NavLinks
              to="/About"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/About">Trailer & Leasing</a>
            </NavLinks>
          </NavItem> */}
          <NavItem>
            <NavLinks
              to="/sitemap"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/sitemap">Sitemap</a>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/terms_of_Use"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/terms_of_Use">Terms of Use</a>
            </NavLinks>
          </NavItem>
          {/* <NavItem>
            <NavLinks
              to="/About"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/About">Contact</a>
            </NavLinks>
          </NavItem> */}
          {/* <NavItem>
            <NavLinks to="/products" onClick={toggleHome}>
              <a
                to="/products"
                 
                duration={500}
                 
                 
                offset={-80}
              >
                Products
              </a>
            </NavLinks>
          </NavItem> */}
          {/* <NavItem>
            <NavLinks
              to="/Contact"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/Contact">News & Events</a>
            </NavLinks>
          </NavItem> */}
          <NavItem>
            <NavLinks
              to="/Privacy_Policy"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/Privacy_Policy">Privacy Policy</a>
            </NavLinks>
          </NavItem>
          {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs'   duration={500}     offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

          <MobileIcon onClick={toggle}>{/* <FaBars/> */}</MobileIcon>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div className="flex flex-col justify-end w-full">
          <NavBtn>
            {/* <h3 className="2xl:text-desc text-navsmall md:text-sm md:text-xs text-white">
            Copyright © BigRig Group, 2022. All Rights Reserved
          </h3> */}
            <h3 className="2xl:text-desc md:mr-4 text-navsmall md:text-sm md:text-xs text-white md:justify">
              Copyright © BigRig Group, {year}. All Rights Reserved
            </h3>
          </NavBtn>
        </div>

        {/* <MobileIcon onClick={toggle}> 
          <FaBars/>
        </MobileIcon> */}
      </Nav>
    </>
  );
};

export default BottomBar;
