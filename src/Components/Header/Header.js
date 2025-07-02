import React, { useState } from 'react';
import logo from '../../assests/logo.webp';
import '../Header/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeDropdown = () => {
    if (window.innerWidth <= 1024) {
      setIsHomeDropdownOpen(!isHomeDropdownOpen);
    }
  };

  const toggleOtherDropdown = () => {
    if (window.innerWidth <= 1024) {
      setIsOtherDropdownOpen(!isOtherDropdownOpen);
    }
  };

  return (
    <nav className="header" aria-label="Main navigation">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="FixQuick Appliance Repair Logo" className="logo-img" />
        </a>
      </div>
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/" className="nav-link">Home</a></li>
        <li className="dropdown">
          <a
            href="/home-appliance-repair"
            className="nav-link"
            aria-haspopup="true"
            onClick={toggleHomeDropdown}
          >
            Home Appliance Repair
            <span className="dropdown-arrow">{isHomeDropdownOpen ? '▲' : '▼'}</span>
          </a>
          <ul className={`dropdown-menu ${isHomeDropdownOpen ? 'active' : ''}`}>
            <li>
              <a href="/washing-machine-repair" className="dropdown-item">
                Washing Machine Repair
              </a>
            </li>
            <li>
              <a href="/electric-gas-cooker-repair" className="dropdown-item">
                Electric/Gas Cooker Repair
              </a>
            </li>
            <li>
              <a href="/microwave-oven-repair" className="dropdown-item">
                Microwave Oven Repair
              </a>
            </li>
            <li>
              <a href="/fridge-repairing-uae" className="dropdown-item">
                Fridge Repairing in UAE
              </a>
            </li>
          </ul>
        </li>
        <li><a href="/ac-repair" className="nav-link">AC Repair</a></li>
        <li className="dropdown">
          <a
            href="/other-services"
            className="nav-link"
            aria-haspopup="true"
            onClick={toggleOtherDropdown}
          >
            Other Services
            <span className="dropdown-arrow">{isOtherDropdownOpen ? '▲' : '▼'}</span>
          </a>
          <ul className={`dropdown-menu ${isOtherDropdownOpen ? 'active' : ''}`}>
            <li>
              <a href="/other-home-appliances-repair" className="dropdown-item">
                Other Home Appliances Repair
              </a>
            </li>
            <li>
              <a href="/dryer-repair" className="dropdown-item">Dryer Repair</a>
            </li>
            <li>
              <a href="/dish-washer-repair" className="dropdown-item">Dish Washer Repair</a>
            </li>
          </ul>
        </li>
        <li><a href="/about" className="nav-link">About</a></li>
        <li><a href="/contact" className="nav-link">Contact Us</a></li>
        {/* Phone Number in Mobile Menu */}
        <li className="mobile-cta">
          <a href="tel:+971586143836" className="cta-button">
            <i className="fas fa-phone"></i> +971 58 614 3836
          </a>
        </li>
      </ul>
      {/* Phone Number CTA for Web */}
      <div className="cta">
        <a href="tel:+971586143836" className="cta-button">
          <i className="fas fa-phone"></i> +971 58 614 3836
        </a>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
        <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </nav>
  );
}

export default Header;