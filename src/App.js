import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './Components/ErrorBoundary';
import Snowfall from 'react-snowfall';
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
import { Success } from './pages/success';
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
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '100',
          pointerEvents: 'none',
        }}
      >
        <Snowfall
          style={{ zIndex: '100' }}
          height="100%"
          width="100%"
          color="#ffff"
          snowflakeCount={250}
          radius={[0.3, 2.0]}
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsevents" element={<UnderConstruction />} />
        <Route path="/sitemap" element={<UnderConstruction />} />
        <Route path="/terms_of_Use" element={<UnderConstruction />} />
        <Route path="/Privacy_Policy" element={<UnderConstruction />} />
        <Route path="/creditapplication" element={<CreditApplication />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/success" element={<Success></Success>} />
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
