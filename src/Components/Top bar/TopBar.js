import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TopBar.css';

function TopBar() {
  return (
    <header className="top-bar">
      <div className="social-icons" aria-label="Social media links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Visit our Facebook page"
          className="social-icon"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Visit our Twitter page"
          className="social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Visit our Instagram page"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="top-bar-text">We Provide Most Popular Repair Services</p>
    </header>
  );
}

export default TopBar;