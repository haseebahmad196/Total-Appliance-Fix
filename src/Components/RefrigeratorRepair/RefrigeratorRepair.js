import React from 'react';
import './RefrigeratorRepair.css';
import refImg from '../../assests/ref.webp';
import ref2Img from '../../assests/ref2.webp';
import ServiceCards from '../ServiceCards/ServiceCards';
import FAQ from '../FAQ/FAQ';
import Testimonials from '../Testimonials/Testimonials';
import InquirySection from '../InquirySection/InquirySection';
import BrandCarouselAndFooter from '../BrandCarouselAndFooter/BrandCarouselAndFooter';

const RefrigeratorRepair = () => {
  return (
    <section className="refrigerator-section">
      <div className="refrigerator-content">
        <h1 className="refrigerator-heading">Refrigerator Repair Dubai</h1>
        <img src={refImg} alt="Refrigerator Repair" className="refrigerator-image" />
        <p className="refrigerator-description">
          Is your refrigerator failing to keep your food fresh in Dubai? At Total Appliance Fix, we provide expert refrigerator repair services to restore cooling efficiency. Our skilled technicians handle all types, including side-by-side and single-door models, fixing issues like compressor failures, gas leaks, or thermostat problems. Search "fridge repair near me" and trust us for same-day refrigerator repair and emergency services tailored to your Dubai home.
          
          Refrigerators involve intricate systems like coolant circuits and electrical controls, making DIY repairs risky. Our team uses advanced diagnostics and genuine parts to ensure reliable, long-term solutions, preventing further damage.
        </p>
        <a href="/book-now" className="refrigerator-booking-btn">Easy Online Booking</a>
        <p className="refrigerator-booking-note">Complete in under 2 minutes</p>
        <div className="refrigerator-problems">
          <h2 className="refrigerator-problems-heading">Common Refrigerator Problems We Fix</h2>
          <p className="refrigerator-problems-description">
            Our Mr. Appliance service professionals have nearly 30 years of experience diagnosing and fixing refrigerator issues. Here are some common problems you may encounter:
          </p>
          <ul className="refrigerator-problems-list">
            <li className="refrigerator-problems-item"><span className="tick">✔</span> Not cooling - Faulty compressor or refrigerant leak.</li>
            <li className="refrigerator-problems-item"><span className="tick">✔</span> Excessive frost - Defective defrost system.</li>
            <li className="refrigerator-problems-item"><span className="tick">✔</span> Leaking water - Clogged drain or damaged seal.</li>
            <li className="refrigerator-problems-item"><span className="tick">✔</span> Unusual noises - Worn fan or motor bearings.</li>
          </ul>
        </div>
        <div className="refrigerator-process">
          <h3 className="refrigerator-process-title">Our Refrigerator Repair Process</h3>
          <img src={ref2Img} alt="Refrigerator Repair Process" className="refrigerator-process-image" />
          <p className="refrigerator-process-description">
            Professional repair of your refrigerator is often cheaper than buying a new one. With regular maintenance, you can extend its life. At Mr. Appliance, we assess your refrigerator, considering warranty, future issues, and repair costs versus replacement to find the best solution. All Mr. Appliance franchises are locally owned and operated and may offer fewer or more services than those listed here. To learn more about the refrigerator services offered in your area, contact the Mr. Appliance nearest you for details or a customized on-site assessment.
          </p>
          <a href="/book-now" className="refrigerator-booking-btn">Easy Online Booking</a>
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

export default RefrigeratorRepair;