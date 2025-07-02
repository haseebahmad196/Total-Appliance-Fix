import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './Components/Top bar/TopBar.js';
import Header from '././Components/Header/Header';
import Hero from './Components/Hero/Hero'; // Adjust path if needed
import ChooseUs from './Components/ChooseUs/ChooseUs';
import ServiceCards from './Components/ServiceCards/ServiceCards.js';
import FAQ from './Components/FAQ/FAQ';
import Testimonials from './Components/Testimonials/Testimonials';
import InquirySection from './Components/InquirySection/InquirySection';
import BrandCarouselAndFooter from './Components/BrandCarouselAndFooter/BrandCarouselAndFooter';
import WashingMachineRepair from './Components/WashingMachineRepair/WashingMachineRepair';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ChooseUs />
                <ServiceCards />
                <FAQ />
                <Testimonials />
                <InquirySection />
                <BrandCarouselAndFooter />
              </>
            }
          />
          <Route
            path="/services/washing-machine-repair"
            element={<WashingMachineRepair />}
          />
          <Route path="*" element={<ServiceCards />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;