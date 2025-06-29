// src/Components/AboutServices/AboutServices.js

import React from 'react';
import './AboutServices.css';
import aboutImage from '../../assests/about.webp'; // ensure correct path

const AboutServices = () => {
  return (
    <section className="aboutservices-section">
      <div className="aboutservices-container">
        <div className="aboutservices-left">
          <h2 className="aboutservices-heading">About Our Services</h2>
          <p className="aboutservices-description">
            We provide expert <strong>washing machine repair services in Dubai</strong> and across the UAE. Our team of highly trained technicians can handle any brand, model, or issue with precision and care. Whether your machine is leaking, not spinning, making unusual noises, or simply not working – our specialists will diagnose and fix it efficiently.
          </p>
          <p className="aboutservices-description">
            With a commitment to <strong>same-day service</strong>, <strong>affordable pricing</strong>, and genuine spare parts, we ensure your washer is up and running without delay. From diagnostics to parts replacement and complete overhauls, we’ve got your laundry needs covered – backed by our <strong>parts warranty</strong> and 100% customer satisfaction.
          </p>

          <ul className="aboutservices-list">
            <li>✅ Expert Washing Machine Technicians</li>
            <li>✅ 100% Satisfaction Guaranteed</li>
            <li>✅ Same-Day Service Across UAE</li>
            <li>✅ Affordable & Transparent Pricing</li>
            <li>✅ One Call Repair Solution</li>
            <li>✅ Genuine Parts with Warranty</li>
          </ul>

          <button className="aboutservices-button">Contact Us</button>
        </div>

        <div className="aboutservices-right">
          <img src={aboutImage} alt="Washing Machine Service Team in UAE" />
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
