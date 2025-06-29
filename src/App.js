import React from 'react';
import TopBar from '././Components/Top bar/TopBar';
import Header from '././Components/Header/Header';
import Hero from './Components/Hero/Hero'; // Adjust path if needed
import ChooseUs from './Components/ChooseUs/ChooseUs';
import AboutServices from './Components/AboutServices/AboutServices';
import FAQ from './Components/FAQ/FAQ';
import Testimonials from './Components/Testimonials/Testimonials';
import InquirySection from './Components/InquirySection/InquirySection';
import BrandCarouselAndFooter from './Components/BrandCarouselAndFooter/BrandCarouselAndFooter';






import './App.css';

function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <ChooseUs />
      <AboutServices />
      <FAQ></FAQ>
      <Testimonials></Testimonials>
      <InquirySection></InquirySection>
      <BrandCarouselAndFooter/> 

      
    </div>
  );
}

export default App;