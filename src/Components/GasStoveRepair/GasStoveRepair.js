import React from 'react';
import './GasStoveRepair.css';
import g1Img from '../../assests/g1.webp';
import g2Img from '../../assests/g2.webp';
import ServiceCards from '../ServiceCards/ServiceCards';
import FAQ from '../FAQ/FAQ';
import Testimonials from '../Testimonials/Testimonials';
import InquirySection from '../InquirySection/InquirySection';
import BrandCarouselAndFooter from '../BrandCarouselAndFooter/BrandCarouselAndFooter';

const GasStoveRepair = () => {
  return (
    <section className="gasstove-section">
      <div className="gasstove-content">
        <h1 className="gasstove-heading">Kitchen Gas or Electric Oven, Stove, & Range Repair</h1>
        <img src={g1Img} alt="Gas Stove Repair" className="gasstove-image" />
        <p className="gasstove-description">
          When your kitchen oven or stove stops working, it can disrupt your Dubai home’s daily life. At Total Appliance Fix, partnering with Mr. Appliance®, we offer the most reliable remedy for your gas or electric oven, stove, or range issues. Our expert technicians provide top-tier oven repair and range repair services in Dubai, ensuring your kitchen functions smoothly. If your appliance isn’t performing, contact Mr. Appliance today for fast, professional service tailored to your needs.
          
          Diagnosing stove or oven problems requires specialized skills due to their complex components. Avoid risky DIY fixes that might worsen the issue. Trust our experienced team at Total Appliance Fix to deliver efficient and lasting repairs for your kitchen appliances in Dubai.
        </p>
        <a href="/book-now" className="gasstove-booking-btn">Easy Online Booking</a>
        <p className="gasstove-booking-note">Complete in under 2 minutes</p>
        <div className="gasstove-problems">
          <h2 className="gasstove-problems-heading">Common Oven or Stove Issues We Fix</h2>
          <p className="gasstove-problems-description">
            If there is something wrong with your stove or oven, but you’re not sure what, here are the five most common stove and oven issues we fix. Learn how to identify and address these common malfunctions so you can get back to enjoying a functional kitchen.
          </p>
          <ul className="gasstove-problems-list">
            <li className="gasstove-problems-item"><span className="tick">✔</span> Won't turn on</li>
            <li className="gasstove-problems-item"><span className="tick">✔</span> Doors get stuck</li>
            <li className="gasstove-problems-item"><span className="tick">✔</span> Has a faulty broiler igniter or valve</li>
            <li className="gasstove-problems-item"><span className="tick">✔</span> Won't heat</li>
          </ul>
        </div>
        <div className="gasstove-process">
          <h3 className="gasstove-process-title">Is it worth it to repair a stove or oven?</h3>
          <img src={g2Img} alt="Gas Stove Repair Process" className="gasstove-process-image" />
          <p className="gasstove-process-description">
            Professional repair of your stove or oven is often cheaper than buying a new one. With regular maintenance, you can extend its life. At Mr. Appliance, we assess your stove or oven, considering warranty, future issues, and repair costs versus replacement to find the best solution. All Mr. Appliance franchises are locally owned and operated and may offer fewer or more services than those listed here. To learn more about the kitchen range services offered in your area, contact the Mr. Appliance nearest you for details or a customized on-site assessment.
          </p>
          <a href="/book-now" className="gasstove-booking-btn">Easy Online Booking</a>
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

export default GasStoveRepair;