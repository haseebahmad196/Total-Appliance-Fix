import React from 'react';
import './BrandCarouselAndFooter.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import panasonic from '../../assests/panasonic.png';
import siemens from '../../assests/siemens.png';
import bosch from '../../assests/bosch.png';
import supergeneral from '../../assests/supergeneral.png';
import samsung from '../../assests/samsung.png';

const BrandCarouselAndFooter = () => {
  const logos = [panasonic, siemens, bosch, supergeneral, samsung];

  return (
    <>
      <div className="brand-carousel-container">
        <div className="brand-carousel-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="brand-logo" key={i}>
              <img src={logo} alt={`Brand ${i}`} />
            </div>
          ))}
        </div>
      </div>

      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-about">
            <h2>Fix Quick Appliances</h2>
            <p>
              At Fix Quick Appliances, we specialize in fast and reliable home appliance repair across Dubai and the UAE. Certified technicians, same-day service, affordable pricing, and original spare parts. Experience worry-free repairs with quality you can trust.
            </p>
          </div>

          <div className="footer-links">
            <h3>Site Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Washing Machine Repair</li>
              <li>Fridge Repair in UAE</li>
              <li>AC Repair</li>
              <li>Microwave Oven Repair</li>
              <li>Gas/Electric Cooker Repair</li>
              <li>Dryer Repair</li>
              <li>Dishwasher Repair</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p><strong>Fix Quick Appliances</strong><br />United Arab Emirates</p>
            <p>📞 +971 58 614 3836</p>
            <p>✉️ contact@fixquickappliance.com</p>
            <p>🌐 fixquickappliance.com</p>
          </div>

          <div className="footer-social">
            <h3>Find Us Online</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Fix Quick Appliances. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default BrandCarouselAndFooter;
