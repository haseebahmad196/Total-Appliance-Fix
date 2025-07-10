import React from 'react';
import './WashingMachineRepair.css';
import w1Img from '../../assests/w1.webp';
import w2Img from '../../assests/w2.webp';
import ServiceCards from '../ServiceCards/ServiceCards';
import FAQ from '../FAQ/FAQ';
import Testimonials from '../Testimonials/Testimonials';
import InquirySection from '../InquirySection/InquirySection';
import BrandCarouselAndFooter from '../BrandCarouselAndFooter/BrandCarouselAndFooter';

const WashingMachineRepair = () => {
  return (
    <section className="wmrepair-section">
      <div className="wmrepair-content">
        <h1 className="wmrepair-heading">Washing Machine Repair Dubai</h1>
        <img src={w1Img} alt="Washing Machine Repair" className="wmrepair-image" />
        <p className="wmrepair-description">
          Is your washing machine causing you trouble in Dubai? At Total Appliance Fix, we offer expert washing machine repair services to restore your appliance’s efficiency. Our skilled technicians handle front-load, top-load, and automatic washing machine repairs, addressing issues like leaks, drum failures, or electrical faults. Search "washing machine repair near me" and rely on us for same-day service and emergency repairs tailored to your needs in Dubai.
          
          Washing machines involve complex components like motors and pumps, making DIY repairs risky. Our team uses advanced diagnostics and genuine parts to ensure long-lasting fixes, saving you time and money.
        </p>
        <a href="/book-now" className="wmrepair-booking-btn">Easy Online Booking</a>
        <p className="wmrepair-booking-note">Complete in under 2 minutes</p>
        <div className="wmrepair-problems">
          <h2 className="wmrepair-problems-heading">Common Washing Machine Problems We Fix</h2>
          <p className="wmrepair-problems-description">
            Our Mr. Appliance service professionals have nearly 30 years of experience diagnosing and fixing washing machine issues. Here are some common problems you may encounter:
          </p>
          <ul className="wmrepair-problems-list">
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Leaking water - Damaged hoses or seals.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Not spinning - Faulty motor or belt.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Won’t start - Electrical or control board issues.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Excessive vibration - Unbalanced load or worn bearings.</li>
          </ul>
        </div>
        <div className="wmrepair-process">
          <h3 className="wmrepair-process-title">Our Washing Machine Repair Process</h3>
          <img src={w2Img} alt="Washing Machine Repair Process" className="wmrepair-process-image" />
          <p className="wmrepair-process-description">
            Professional repair of your washing machine is often cheaper than buying a new one. With regular maintenance, you can extend its life. At Mr. Appliance, we assess your washing machine, considering warranty, future issues, and repair costs versus replacement to find the best solution. All Mr. Appliance franchises are locally owned and operated and may offer fewer or more services than those listed here. To learn more about the washing machine services offered in your area, contact the Mr. Appliance nearest you for details or a customized on-site assessment.
          </p>
          <a href="/book-now" className="wmrepair-booking-btn">Easy Online Booking</a>
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

export default WashingMachineRepair;