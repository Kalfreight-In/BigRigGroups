import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './Components/ErrorBoundary';
// import FooterSection from './Components/FooterSection';
import Navbar from './Components/Navbar';
import { CommmingSoonComponentindex } from './Components/CommmingSoonComponent';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footernewcomp/Footer';
import BottomBar from './Components/Bottombar';
import Trailer_and_Leasing from './pages/TrailerandLeasing';
import { UnderConstruction } from './Components/UnderConstruction';
import Mapnew from './Components/Mapclickcomp/Mapnew';
import { CreditApplication } from './pages/Home/creditApplication';
import { Career } from './pages/carrear';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <ErrorBoundary>
        <Navbar toggle={toggle}></Navbar>
      </ErrorBoundary>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsevents" element={<UnderConstruction />} />
        <Route path="/sitemap" element={<UnderConstruction />} />
        <Route path="/terms_of_Use" element={<UnderConstruction />} />
        <Route path="/Privacy_Policy" element={<UnderConstruction />} />
        <Route path="/creditapplication" element={<CreditApplication />} />
        <Route path="/careers" element={<Career />} />
        <Route
          path="/trailerandleasing"
          element={
            <UnderConstruction icon="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/icons/trailersLogo.png" />
          }
        ></Route>
        <Route
          path="/partz"
          element={
            <CommmingSoonComponentindex data="partz"></CommmingSoonComponentindex>
          }
        />
        <Route
          path="/tires"
          element={
            <CommmingSoonComponentindex data="tires"></CommmingSoonComponentindex>
          }
        />

        <Route path="/Bigrigcananda" element={<></>} />
        <Route path="/mappage" element={<Mapnew />} />
      </Routes>
      <Footer />
      {/* <FooterSection></FooterSection> */}
      <BottomBar />
    </Router>
  );
}

export default App;
