import React from "react";
import Link from "react-scroll/modules/components/Link";
import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from "./SlidebarElement";
// import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  function disabel() {
    const path = window.location.pathname;

    if (path === "/") {
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
          <SidebarLinkR to="/BigRigGroups">HOME</SidebarLinkR>

          <SidebarLinkR to="/trailerandleasing"> 
            TRAILER & LEASING
          </SidebarLinkR>
          <SidebarLinkR to="/partz">PARTZ</SidebarLinkR>
          <SidebarLinkR to="/tires"> TIRES & SERVICES</SidebarLinkR>
          <SidebarLinkR to="/ContactSection">CONTACT</SidebarLinkR>
          <SidebarLinkR to="/BigRigGroups/ct">NEWS & EVENTS</SidebarLinkR>
          <SidebarLinkR to="/BigRigGroups/nt"> LOCATIONS</SidebarLinkR> 
          <SidebarLinkR to="/Contact">CREDIT APPLICATIONS</SidebarLinkR> 

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
