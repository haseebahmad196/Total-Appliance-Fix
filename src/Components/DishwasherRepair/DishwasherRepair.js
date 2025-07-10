import React from 'react';
import './DishwasherRepair.css';
import d1Img from '../../assests/d1.webp';
import d2Img from '../../assests/d2.webp';
import d4Img from '../../assests/d4.webp';
import ServiceCards from '../ServiceCards/ServiceCards';
import FAQ from '../FAQ/FAQ';
import Testimonials from '../Testimonials/Testimonials';
import InquirySection from '../InquirySection/InquirySection';
import BrandCarouselAndFooter from '../BrandCarouselAndFooter/BrandCarouselAndFooter';

const DishwasherRepair = () => {
  return (
    <section className="dishwasher-section">
      <div className="dishwasher-content">
        <h1 className="dishwasher-heading">Residential Dishwasher Repair and Maintenance Services</h1>
        <img src={d2Img} alt="Dishwasher Repair" className="dishwasher-image" />
        <p className="dishwasher-description">
          Your dishwasher is a key appliance in your Dubai home, and when it fails, it can disrupt your daily routine. At Total Appliance Fix in Dubai, our experienced professionals offer nearly 30 years of expertise in diagnosing and fixing dishwasher issues. We provide fast, friendly, and reliable dishwasher repair services in Dubai, ensuring your appliance is back to peak performance. Whether it’s unclean dishes or a stalled cycle, trust us to handle it with care.
          
          Attempting DIY dishwasher repairs can be challenging due to the intricate components involved. Our skilled technicians use their extensive knowledge to pinpoint and resolve issues efficiently, avoiding temporary fixes. Need dishwasher repair in Dubai? Contact Total Appliance Fix today for prompt service tailored to your needs!
        </p>
        <a href="/book-now" className="dishwasher-booking-btn">Easy Online Booking</a>
        <p className="dishwasher-booking-note">Complete in under 2 minutes</p>
        <div className="dishwasher-problems">
          <h2 className="dishwasher-problems-heading">Common Dishwasher Problems We Fix</h2>
          <p className="dishwasher-problems-description">
            Our Mr. Appliance service professionals have nearly 30 years of experience diagnosing and fixing dishwasher problems. Our team provides friendly and fast service you can rely on to get your dishwasher running again. Here are some common problems you may encounter with your dishwasher:
          </p>
          <ul className="dishwasher-problems-list">
            <li className="dishwasher-problems-item"><span className="tick">✔</span> Unclean dishes - Blocked spray arm, worn pump, impeller, or heating element.</li>
            <li className="dishwasher-problems-item"><span className="tick">✔</span> Hums and turns off - Motor is seized and needs to be replaced.</li>
            <li className="dishwasher-problems-item"><span className="tick">✔</span> Wash cycle takes too long - Defective thermostat, timer, or control board.</li>
            <li className="dishwasher-problems-item"><span className="tick">✔</span> Does not fill with water - Issues with the float switch.</li>
          </ul>
        </div>
        <div className="dishwasher-process">
          <h3 className="dishwasher-process-title">Our Dishwasher Repair Process</h3>
          <img src={d4Img} alt="Dishwasher Repair Process" className="dishwasher-process-image" />
          <p className="dishwasher-process-description">
            Professional repair of your dishwasher is often cheaper than buying a new one. With regular maintenance, you can extend its life. At Mr. Appliance, we assess your dishwasher, considering warranty, future issues, and repair costs versus replacement to find the best solution. All Mr. Appliance franchises are locally owned and operated and may offer fewer or more services than those listed here. To learn more about the dishwasher services offered in your area, contact the Mr. Appliance nearest you for details or a customized on-site assessment.
          </p>
          <a href="/book-now" className="dishwasher-booking-btn">Easy Online Booking</a>
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

export default DishwasherRepair;