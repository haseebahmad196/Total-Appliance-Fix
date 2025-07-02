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
        <h1 className="wmrepair-heading">Washing Machine Repair Service</h1>
        <img src={w1Img} alt="Washing Machine Repair" className="wmrepair-image" />
        <p className="wmrepair-description">
          Whether you’re dealing with lingering suds or a washing machine that refuses to start in the heart of Dubai, our elite Mr. Appliance® team is here to resolve it with unmatched expertise. Our skilled professionals offer routine maintenance, urgent repairs, and preventative care for all major household appliances, tailored to the luxurious lifestyles of Dubai residents.
        </p>
        <a href="/book-now" className="wmrepair-booking-btn">Easy Online Booking</a>
        <p className="wmrepair-booking-note">Complete in under 2 minutes</p>
        <div className="wmrepair-problems">
          <h2 className="wmrepair-problems-heading">Common Washing Machine Problems We Repair</h2>
          <p className="wmrepair-problems-description">
            When you notice problems, schedule your washing machine repair service right away to limit the risk of water damage or further complications. These appliances have a lot of moving parts, which makes washing machine repair a common necessity. Here are just some of the issues we see and fix daily:
          </p>
          <ul className="wmrepair-problems-list">
            <li className="wmrepair-problems-item"><span className="tick">✔</span> No Power - Tripped switch, a control board issue, or an electrical problem.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Not spinning/agitating - Defective lid switch, wires, belt, or timer.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Excessive vibration - Worn dampers or an unleveled machine.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Leaks - Excess soap, loose hoses, clogs, broken pumps, tubs, or fill hoses.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Dirty Clothes - Water valve, timer, control board, or detergent dispenser.</li>
            <li className="wmrepair-problems-item"><span className="tick">✔</span> Not Draining - Defective pump, worn drive belt, or clogged drain hose.</li>
          </ul>
        </div>
        <div className="wmrepair-process">
          <h3 className="wmrepair-process-title">How to Repair a Washing Machine: Our Process</h3>
          <img src={w2Img} alt="Washing Machine Process" className="wmrepair-process-image" />
          <p className="wmrepair-process-description">
            Book your service online or contact us directly. A certified technician will assess your washer, provide a transparent, flat-rate quote, and ensure a pristine repair.
          </p>
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