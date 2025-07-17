import React from 'react';
import './BrandCarouselAndFooter.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assests/Frame 9.png';
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
              <img src={logo} alt={`Brand ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src={logo} alt="Total Appliance Fix Logo" className="footer-logo" />
            </div>
            <p className="footer-contact-number">📞 +971 58 614 3836</p>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/totalappliancefix/"
                aria-label="Facebook"
                rel="nofollow"
                target="_blank"
              >
                <FaFacebookF className="footer-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/totalappliancefix/"
                aria-label="Instagram"
                rel="nofollow"
                target="_blank"
              >
                <FaInstagram className="footer-social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              Total Appliance Fix provides premier appliance repair in Dubai and the UAE. Our certified technicians deliver same-day service, using genuine parts for washing machines, fridges, and more. Trust us for reliable, affordable repairs.
            </p>
          </div>

          <nav className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services/washing-machine-repair">Washing Machine Repair</Link></li>
              <li><Link to="/services/fridge-repair">Fridge Repair</Link></li>
              <li><Link to="/services/ac-repair">AC Repair</Link></li>
              <li><Link to="/services/dishwasher-repair">Dishwasher Repair</Link></li>
              <li><Link to="/services/cooker-repair">Gas/Electric Cooker Repair</Link></li>
            </ul>
          </div>

          <address className="footer-contact">
            <h3>Contact Info</h3>
            <p>Total Appliance Fix<br />Dubai, United Arab Emirates</p>
            <p>📞 <a href="tel:+971586143836">+971 58 614 3836</a></p>
            <p>✉️ <a href="mailto:hello@totalappliancefix.com">hello@totalappliancefix.com</a></p>
            <p>🌐 <a href="https://totalappliancefix.com" target="_blank" rel="nofollow">totalappliancefix.com</a></p>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Total Appliance Fix. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default BrandCarouselAndFooter;