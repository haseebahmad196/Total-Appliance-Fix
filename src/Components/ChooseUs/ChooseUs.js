// src/Components/ChooseUs/ChooseUs.js

import React from 'react';
import './ChooseUs.css';
import chooseUsImage from '../../assests/chooseus.webp'; // adjust path as needed

const ChooseUs = () => {
  return (
    <section className="chooseus-section">
      <div className="chooseus-container">
        <div className="chooseus-text">
          <h2 className="chooseus-heading">Why Choose Us?</h2>
          <p className="chooseus-description">
            Our experts can repair any type or model of washing machine with precision. We effectively serve all major brands across the UAE. You can confidently rely on our company for professional washing machine repair. Whether it’s part replacement or detailed repair, we handle it all.
            <br /><br />
            Never ignore even the smallest malfunction—our skilled technicians perform each service using reliable diagnostics to ensure long-lasting results. For the most efficient and trusted washing machine repair in Dubai, call us today.
            <br /><br />
            Our team is well-educated, experienced, honest, courteous, and respectful. We provide timely delivery and on-site service. We understand that functional washers are essential to your lifestyle, which is why we offer same-day washing machine repair across the UAE.
          </p>
        </div>

        <div className="chooseus-image">
          <img src={chooseUsImage} alt="Why Choose Us - Washing Machine Service" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
