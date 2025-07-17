import React, { useState } from 'react';
import logo from '../../../src/assests/Frame 9.png';
import './Header.css'

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
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Total Appliance Fix Logo" className="logo-img" />
        </a>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/" className="nav-link">Home</a></li>
        <li className="dropdown">
          <span
            className="nav-link dropdown-toggle"
            aria-haspopup="true"
            onClick={toggleHomeDropdown}
          >
            Home Appliance Repair
            <span className="dropdown-arrow">{isHomeDropdownOpen ? '▲' : '▼'}</span>
          </span>
          <ul className={`dropdown-menu ${isHomeDropdownOpen ? 'active' : ''}`}>
            <li>
              <span className="dropdown-item">
                Washing Machine Repair
              </span>
            </li>
            <li>
              <span className="dropdown-item">
                Electric/Gas Cooker Repair
              </span>
            </li>
            <li>
              <span className="dropdown-item">
                Microwave Oven Repair
              </span>
            </li>
            <li>
              <span className="dropdown-item">
                Fridge Repairing in UAE
              </span>
            </li>
          </ul>
        </li>
        <li><span className="nav-link">AC Repair</span></li>
        <li className="dropdown">
          <span
            className="nav-link dropdown-toggle"
            aria-haspopup="true"
            onClick={toggleOtherDropdown}
          >
            Other Services
            <span className="dropdown-arrow">{isOtherDropdownOpen ? '▲' : '▼'}</span>
          </span>
          <ul className={`dropdown-menu ${isOtherDropdownOpen ? 'active' : ''}`}>
            <li>
              <span className="dropdown-item">
                Other Home Appliances Repair
              </span>
            </li>
            <li>
              <span className="dropdown-item">Dryer Repair</span>
            </li>
            <li>
              <span className="dropdown-item">Dish Washer Repair</span>
            </li>
          </ul>
        </li>
        <li><span className="nav-link">About</span></li>
        <li>
          <a href="/booking" className="nav-link booking-button">
            <i className="fas fa-calendar-alt"></i> Easy Online Booking
          </a>
        </li>
      </ul>
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