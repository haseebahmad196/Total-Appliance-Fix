import React from 'react';
import './BrandCarouselAndFooter.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
          {logos.map((logo, i) => (
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
            <p className="footer-contact-number">📞 +971 50 416 1201</p>
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
              <a
                href="https://wa.me/971504161201"
                aria-label="WhatsApp"
                rel="nofollow"
                target="_blank"
              >
                <FaWhatsapp className="footer-social-icon" />
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
              <li><span className="footer-link-item">Home</span></li>
              <li><span className="footer-link-item">About</span></li>
              <li><span className="footer-link-item">Services</span></li>
              <li><span className="footer-link-item">Blog</span></li>
              <li><span className="footer-link-item">Contact</span></li>
            </ul>
          </nav>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li><span className="footer-link-item">Washing Machine Repair</span></li>
              <li><span className="footer-link-item">Fridge Repair</span></li>
              <li><span className="footer-link-item">AC Repair</span></li>
              <li><span className="footer-link-item">Dishwasher Repair</span></li>
              <li><span className="footer-link-item">Gas/Electric Cooker Repair</span></li>
            </ul>
          </div>

          <address className="footer-contact">
            <h3>Contact Info</h3>
            <p>Total Appliance Fix<br />Dubai, United Arab Emirates</p>
            <p>📞 <span className="footer-contact-item">+971 50 416 1201</span></p>
            <p>✉️ <span className="footer-contact-item">hello@totalappliancefix.com</span></p>
            <p>🌐 <span className="footer-contact-item">totalappliancefix.com</span></p>
          </address>
        </div>

        <div className="footer-booking-button-container">
          <a href="/booking" className="footer-booking-button">
            <i className="fas fa-calendar-alt"></i> Easy Online Booking
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Total Appliance Fix. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default BrandCarouselAndFooter;