import React from 'react';
// import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import HeroSection from '../../Components/HeaderHome';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
// import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import { ContactFormContainer } from '../../Container/ContactFormContainer';
// import Contact from '../../Components/Contactsection/Contact';
import Abouthome from '../../Components/Abouthomecomponent/Abouthome';
import { Slideshow } from '../../Components/Slider/slideshow';
// import OurBusinessVerticles from '../../Container/OurBusinessVerticles';
import { MapConatiner } from '../../Container/MapContainer';
import './Home.scss';
import { BrandCompnentBrands } from '../../data';
import Business from '../../Components/BusinessComponent/Business';
function Home() {
  return (
    <>
      <HeroSection> </HeroSection>
      <Business></Business>
      {/* {isDesktop ? <Business /> : null} */}

      {/* <OurBusinessVerticles></OurBusinessVerticles> */}
      <Abouthome />
      <GroupWebsitesSection />
      <Roadservice />
      <Slideshow data={BrandCompnentBrands}></Slideshow>
      {/* <BrandComponent></BrandComponent> */}
      {/* <ServicesSection /> */}
      <MapConatiner></MapConatiner>
      <ContactFormContainer></ContactFormContainer>

      {/* <Contact /> */}
      {/* <ContactFormContainer></ContactFormContainer> */}
    </>
  );
}
export default Home;
