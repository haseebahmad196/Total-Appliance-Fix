import React from 'react';
import './TopBar.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function TopBar() {
  return (
    <header className="top-bar">
      <nav className="social-icons" aria-label="Social media links">
        <a
          href="https://www.facebook.com/totalappliancefix/"
          target="_blank"
          rel="nofollow"
          aria-label="Visit our Facebook page"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/totalappliancefix/"
          target="_blank"
          rel="nofollow"
          aria-label="Visit our Instagram page"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/971504161201"
          target="_blank"
          rel="nofollow"
          aria-label="Chat with us on WhatsApp"
          className="social-icon"
        >
          <FaWhatsapp />
        </a>
      </nav>
      <div className="top-bar-content">
        <p className="top-bar-statement">Trusted Appliance Repair for Dubai’s Homes</p>
      </div>
    </header>
  );
}

export default TopBar;