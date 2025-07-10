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
          {/* Image 1 */}
          <div className="chooseus-image">
            <img src={chooseUsImage} alt="Washing Machine Service" />
          </div>
          {/* Text Section 1 */}
          <div className="chooseus-text">
            <h3 className="text-title">Expert Washing Machine Repairs in Dubai</h3>
            <p className="text-description">
              Our skilled technicians in Dubai repair any washing machine model with precision, serving all major brands across the UAE. Trust us for professional repairs, whether it’s a part replacement or a detailed fix.
            </p>
          </div>
          {/* Image 2 */}
          <div className="chooseus-image">
            <img src={gapplianceImage} alt="Additional Appliance Service" />
          </div>
          {/* Text Section 2 */}
          <div className="chooseus-text">
            <h3 className="text-title">Flexible Scheduling for Dubai Residents</h3>
            <p className="text-description">
              We tailor our schedule to your convenience, offering morning or afternoon slots in Dubai. With parts in stock, we ensure fast home and commercial appliance repairs for a seamless experience.
            </p>
          </div>
          {/* Image 3 */}
          <div className="chooseus-image">
            <img src={chooseUsImage} alt="Washing Machine Service" />
          </div>
          {/* Text Section 3 */}
          <div className="chooseus-text">
            <h3 className="text-title">Guaranteed Satisfaction in Dubai</h3>
            <p className="text-description">
              We back our repairs with a one-year guarantee under our Dubai Promise®. Our experienced, courteous team offers same-day washing machine repair across the UAE—see our glowing reviews!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;