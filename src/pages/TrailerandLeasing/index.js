
import React, { useState, useEffect } from 'react';
import ContactSection from '../../Components/ContactSection1';
import DAboutSection from '../../Components/DAboutSection';
// import HeroSection from "../../Components/HeroSection";
import Navbar from '../../Components/Navbar';
import QuoteAtEnd from '../../Components/QuoteAtEnd';
import HeroSection from '../../Components/HeroSection/index';

import ProvideExpertService from '../../Components/ProvideExpertService';
import MapSection from '../../Components/MapSection';
import TrailerList from '../../Components/TrailersList';
import HeaderHome from '../../Components/HeaderHome';
import { MetaTags } from 'react-meta-tags'; 

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Lol = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabel, setdisabel] = useState(
    () => window.localStorage.getItem('product') ?? false
  );
  useEffect(() => {
    // Update the document title using the browser API
    disabeled() ? setdisabel(true) : setdisabel(false);
    window.localStorage.setItem('product', disabel);
  });

  function disabeled() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
      return true;
    }
    return false;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <EmblaCarousel slides={slides} /> */}
      {/* <Herosection></Herosection> */}
      <HeroSection></HeroSection>
      {/* <HeaderHome /> */}
      {/* <UAboutSection></UAboutSection> */}
      <DAboutSection></DAboutSection>
      <ProvideExpertService></ProvideExpertService>
      {/* <TestimonialSection></TestimonialSection> */}
      {/* <WWOSection></WWOSection> */}
      {/* <WCUSection></WCUSection> */}
      <QuoteAtEnd></QuoteAtEnd>
      <TrailerList></TrailerList>

      {/* <ContactSection></ContactSection> */}
      <MapSection></MapSection>
    </>
  );
};

class Trailer_and_Leasing extends React.Component {
  componentDidMount() {
    document.title = 'BigRig';
  }

  render() {
    // return <Lol />;
    return (
      <>
        <div class="wrapper">
          <MetaTags> 
            <meta
              name="description"
              content="BigRig is One-stop-shop for all your trucking needs. Dealing in used trucks, Trailers, Dry Vans & Reefers in British Columbia."
            />
            <meta
              id="og-title"
              property="og:title"
              content="Buy Used Trucks, Dry Vans, Reefers Trailers | Vanguard Dealer, BigRig Canada"
            />
            <meta
              name="Keyword"
              content="Buy Used Trucks, Dry Vans, BigRig Trailers & Leasing, Vanguard Dealer Canada"  
            />
          </MetaTags>
          <div class="content">
            <Lol />
          </div>
        </div>
      </>
    );
    
  }
}
export default Trailer_and_Leasing;
