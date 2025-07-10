import React from 'react';
import './GeneralApplianceRepair.css';
import ga1Img from '../../assests/ga1.jpg';
import g2Img from '../../assests/g2.webp';
import ServiceCards from '../ServiceCards/ServiceCards';
import FAQ from '../FAQ/FAQ';
import Testimonials from '../Testimonials/Testimonials';
import InquirySection from '../InquirySection/InquirySection';
import BrandCarouselAndFooter from '../BrandCarouselAndFooter/BrandCarouselAndFooter';

const GeneralApplianceRepair = () => {
  return (
    <section className="generalappliance-section">
      <div className="generalappliance-content">
        <h1 className="generalappliance-heading">General Appliance Repair</h1>
        <img src={ga1Img} alt="General Appliance Repair" className="generalappliance-image" />
        <p className="generalappliance-description">
          At Total Appliance Fix in Dubai, we specialize in comprehensive general appliance repair services for your home. Whether it’s a malfunctioning refrigerator, a noisy washing machine, or a faulty oven, our expert technicians provide top-tier appliance repair in Dubai. With advanced diagnostic tools and years of experience, we address a wide range of issues, from electrical faults to mechanical failures, ensuring your appliances run efficiently. Search "appliance repair near me" and trust us for same-day appliance repair and emergency appliance repair services tailored to your needs.
          
          Technical expertise is crucial for appliance repairs, as issues often stem from complex circuitry, worn-out motors, or clogged components. Avoid DIY attempts that risk further damage—our skilled team at Total Appliance Fix uses OEM parts and precise techniques to restore functionality, extending the lifespan of your appliances.
        </p>
        <a href="/book-now" className="generalappliance-booking-btn">Easy Online Booking</a>
        <p className="generalappliance-booking-note">Complete in under 2 minutes</p>
        <div className="generalappliance-problems">
          <h2 className="generalappliance-problems-heading">Common General Appliance Issues We Fix</h2>
          <p className="generalappliance-problems-description">
            Appliances are integral to modern homes, but technical failures can disrupt your routine. Our experts identify and resolve a variety of common issues with precision, ensuring optimal performance. Here are some frequent problems we address:
          </p>
          <ul className="generalappliance-problems-list">
            <li className="generalappliance-problems-item"><span className="tick">✔</span> Electrical failures - Short circuits or blown fuses.</li>
            <li className="generalappliance-problems-item"><span className="tick">✔</span> Motor malfunctions - Overheating or seized components.</li>
            <li className="generalappliance-problems-item"><span className="tick">✔</span> Water leakage - Faulty seals or pump issues.</li>
            <li className="generalappliance-problems-item"><span className="tick">✔</span> Temperature inconsistencies - Defective thermostats or heating elements.</li>
          </ul>
        </div>
        <div className="generalappliance-process">
          <h3 className="generalappliance-process-title">Our General Appliance Repair Process</h3>
          <img src={g2Img} alt="General Appliance Repair Process" className="generalappliance-process-image" />
          <p className="generalappliance-process-description">
            Our repair process begins with a thorough diagnostic assessment using advanced tools to pinpoint electrical or mechanical faults. Technicians test circuits, inspect motors, and check for wear in moving parts, followed by targeted repairs with high-quality replacement parts. We optimize performance through calibration and testing, ensuring reliability. For expert general appliance repair in Dubai, book online or contact Total Appliance Fix for a customized solution.
          </p>
          <a href="/book-now" className="generalappliance-booking-btn">Easy Online Booking</a>
        </div>
        <ServiceCards />
        <FAQ />
        <Testimonials />
        <InquirySection />
        <BrandCarouselAndFooter />
      </div>
    </section>
  );
};

export default GeneralApplianceRepair;