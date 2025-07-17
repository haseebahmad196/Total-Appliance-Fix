import React, { useState, useEffect } from 'react';
import './Hero.css';
import washingMachineImg from '../../assests/washingMachine.jpg';
import h2Img from '../../assests/h2.webp';
import h3Img from '../../assests/h3.webp';

const slides = [
  {
    background: washingMachineImg,
    title: 'Expert Washing Machine Repair',
    description: 'At Total Appliance Fix, we employ state-of-the-art diagnostics, genuine OEM parts, and innovative repair techniques to restore your washing machines efficiently. Our certified technicians ensure minimal disruption with same-day service throughout the UAE, backed by a 100% satisfaction guarantee.',
    subtext: 'Revitalize your appliances with precision engineering. Swift. Dependable. Unmatched Expertise.',
  },
  {
    background: h2Img,
    title: 'Professional Refrigerator Repair',
    description: 'Experience unparalleled refrigerator repair services at Total Appliance Fix. Utilizing advanced cooling system analysis and eco-friendly refrigerants, our experts deliver long-lasting fixes for all major brands. Enjoy extended warranties and competitive pricing designed to save you time and money.',
    subtext: 'Elevate your home efficiency with our elite repair solutions. Professional. Elegant. Client-Focused.',
  },
  {
    background: h3Img,
    title: 'Advanced Dishwasher Repair',
    description: 'Discover superior dishwasher repair at Total Appliance Fix, where we leverage high-precision tools, sensor calibration, and sustainable cleaning solutions for flawless performance. Our skilled professionals offer rapid diagnostics and repairs for leading models, ensuring hygiene and efficiency with our exclusive service plans.',
    subtext: 'Transform your kitchen workflow with cutting-edge repairs. Innovative. Reliable. Tailored for Excellence.',
  },
  // Add more slides if needed for variety
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:+971586143836';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/971586143836';
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide].background})` }}>
      <div className="hero-wrapper">
        <div className="hero-card animated">
          <h1 className="hero-title">{slides[currentSlide].title}</h1>
          <p className="hero-description">
            {slides[currentSlide].description}
          </p>
          <p className="hero-subtext">{slides[currentSlide].subtext}</p>

          <div className="cta-container">
            <p className="cta-phone-number">
              CALL US NOW: <strong>+971 58 614 3836</strong>
            </p>

            <div className="cta-buttons">
              <button 
                className="cta-btn phone-btn" 
                aria-label="Call Total Appliance Fix" 
                onClick={handleCallClick}
              >
                <i className="fas fa-phone-alt"></i> Call Us
              </button>
              <button 
                className="cta-btn whatsapp-btn" 
                aria-label="Chat on WhatsApp with Total Appliance Fix" 
                onClick={handleWhatsAppClick}
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;