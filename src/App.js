import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './Components/Top bar/TopBar.js';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'; // Adjust path if needed
import ChooseUs from './Components/ChooseUs/ChooseUs';
import ServiceCards from './Components/ServiceCards/ServiceCards.js';
import FAQ from './Components/FAQ/FAQ';
import Testimonials from './Components/Testimonials/Testimonials';
import InquirySection from './Components/InquirySection/InquirySection';
import BrandCarouselAndFooter from './Components/BrandCarouselAndFooter/BrandCarouselAndFooter';
import WashingMachineRepair from './Components/WashingMachineRepair/WashingMachineRepair';
import RefrigeratorRepair from './Components/RefrigeratorRepair/RefrigeratorRepair';
import DishwasherRepair from './Components/DishwasherRepair/DishwasherRepair';
import GasStoveRepair from './Components/GasStoveRepair/GasStoveRepair';
import GeneralApplianceRepair from './Components/GeneralApplianceRepair/GeneralApplianceRepair';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
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
          <Route
            path="/services/fridge-refrigerator-repair"
            element={<RefrigeratorRepair />}
          />
          <Route
            path="/services/dishwasher-repair"
            element={<DishwasherRepair />}
          />
          <Route
            path="/services/kitchen-gas-or-electric-oven-stove-range-repair"
            element={<GasStoveRepair />}
          />
          <Route
            path="/services/general-appliance-repair"
            element={<GeneralApplianceRepair />}
          />
          <Route path="*" element={<RefrigeratorRepair />} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;