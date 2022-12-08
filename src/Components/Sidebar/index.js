import React from 'react';

import { animateScroll as scroll, Link } from 'react-scroll';

import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinkA,
} from './SlidebarElement';
// import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  function disabel() {
    const path = window.location.pathname;

    if (path === '/') {
      return true;
    }
    return false;
  }
  return (
    <SlidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/">HOME</SidebarLinkR>

          <SidebarLinkR to="/trailerandleasing">
            TRAILERS & LEASING
          </SidebarLinkR>
          <SidebarLinkA to="https://bigrigpartz.com" target="_blank">
            PARTZ
          </SidebarLinkA>
          <SidebarLinkR to="/tires"> TIRES & SERVICES</SidebarLinkR>
          <SidebarLinkR to="#ContactSection">
            <Link
              to="ContactSection"
              onClick={toggle}
              duration={1000}
              offset={-80}
            >
              CONTACT
            </Link>
          </SidebarLinkR>
          <SidebarLinkR to="/newsevents">NEWS & EVENTS</SidebarLinkR>
          <SidebarLinkA href="/creditapplication">
            CREDIT APPLICATION
          </SidebarLinkA>
          <SidebarLinkA href="/careers">Careers</SidebarLinkA>
          <SidebarLinkR to="/Location">
            <Link to="Location" onClick={toggle} duration={1000} offset={-80}>
              LOCATIONS
            </Link>
          </SidebarLinkR>

          {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/Careers">Careers</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
        </SidebarMenu>
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute>
            <a href="/Contact">Contact Us</a>
          </SidebarRoute>
        </SideBtnWrap> */}
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute to="/WorkAtKalway">
            <a href="/WorkAtKalway">Work At KALWAY</a>
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
