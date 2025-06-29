// src/Components/Hero/Hero.js

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-card animated">
          <h1 className="hero-title">Washing Machine Repair</h1>
          <p className="hero-description">
            Fix Quick Appliances offers top-notch repair services across the UAE.
            We specialize in fast, efficient, and affordable solutions—often the same day!
          </p>
          <p className="hero-subtext">Get your appliance fixed today. Quick. Reliable. Professional.</p>

          <div className="cta-container">
            <p className="cta-phone-number">
              CALL US NOW: <strong>+971 58 614 3836</strong>
            </p>

            <div className="cta-buttons">
              <button className="cta-btn phone-btn" aria-label="Call Fix Quick Appliances">
                <i className="fas fa-phone-alt"></i> Call Now
              </button>
              <button className="cta-btn whatsapp-btn" aria-label="Chat on WhatsApp with Fix Quick Appliances">
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
