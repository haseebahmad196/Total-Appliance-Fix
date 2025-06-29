import React from 'react';
import './InquirySection.css';
import inquiryImage from '../../assests/inqui.jpg'; // double-check your file path

const InquirySection = () => {
  return (
    <>
      <div className="inquiry-banner">
        <h2>CALL US NOW - SAME DAY REPAIR</h2>
        <button className="quote-button">GET A QUOTE</button>
      </div>

      <section className="inquiry-wrapper">
        <div className="inquiry-content">
          <div className="inquiry-form-side">
            <h2>Book a Callback</h2>
            <p>Fill out the form and our team will contact you shortly. Same-day washing machine repair service across UAE.</p>
            <form className="form-modern">
              <input type="text" placeholder="Full Name*" required />
              <input type="email" placeholder="Email Address*" required />
              <input type="tel" placeholder="Phone Number*" required />
              <textarea placeholder="Describe the issue or model" rows="4"></textarea>
              <button type="submit">Get Call Back</button>
            </form>
          </div>

          <div className="inquiry-image-side">
            <img src={inquiryImage} alt="Contact Illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default InquirySection;
