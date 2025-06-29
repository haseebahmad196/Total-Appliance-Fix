import React from 'react';
import './ChooseUs.css';
import chooseUsImage from '../../assests/chooseus.webp';
import gapplianceImage from '../../assests/gappliance.jpg';

const ChooseUs = () => {
  return (
    <section className="chooseus-section">
      <div className="chooseus-container">
        <h2 className="chooseus-heading">Why Choose Us?</h2>
        <div className="chooseus-content">
          <div className="chooseus-cards">
            <div className="cards-wrapper">
              <div className="chooseus-card">
                <h3 className="card-title">Expert Washing Machine Repairs in Dubai</h3>
                <p className="card-description">
                  Our skilled technicians in Dubai repair any washing machine model with precision, serving all major brands across the UAE. Trust us for professional repairs, whether it’s a part replacement or a detailed fix.
                </p>
              </div>
              <div className="chooseus-card">
                <h3 className="card-title">Flexible Scheduling for Dubai Residents</h3>
                <p className="card-description">
                  We tailor our schedule to your convenience, offering morning or afternoon slots in Dubai. With parts in stock, we ensure fast home and commercial appliance repairs for a seamless experience.
                </p>
              </div>
              <div className="chooseus-card">
                <h3 className="card-title">Guaranteed Satisfaction in Dubai</h3>
                <p className="card-description">
                  We back our repairs with a one-year guarantee under our Dubai Promise®. Our experienced, courteous team offers same-day washing machine repair across the UAE—see our glowing reviews!
                </p>
              </div>
            </div>
          </div>
          <div className="chooseus-images">
            <img src={chooseUsImage} alt="Why Choose Us - Washing Machine Service" />
            <img src={gapplianceImage} alt="Additional Appliance Service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;