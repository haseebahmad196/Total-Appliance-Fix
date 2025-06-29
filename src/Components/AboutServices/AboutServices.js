import React from 'react';
import './ServiceCards.css';

import applianceImg from '../../assests/gappliance.jpg';
import washerImg from '../../assests/wrepair.jpg';
import fridgeImg from '../../assests/fridgeRepair.webp';
import dishwasherImg from '../../assests/dishwasher.jpg';

const services = [
  {
    title: "General Appliance Repair",
    keywords: [
      "Appliance repair near me",
      "Home appliance repair service",
      "Same day appliance repair",
      "Emergency appliance repair"
    ],
    image: applianceImg
  },
  {
    title: "Washing Machine Repair",
    keywords: [
      "Washing machine repair near me",
      "Front load washer repair",
      "Top load washer repair service",
      "Washing machine technician Dubai",
      "Automatic washing machine repair",
      "Samsung washing machine repair",
      "LG washer repair Dubai"
    ],
    image: washerImg
  },
  {
    title: "Fridge / Refrigerator Repair",
    keywords: [
      "Fridge repair near me",
      "Refrigerator repair service Dubai",
      "Fridge not cooling repair",
      "Side by side fridge repair",
      "Samsung fridge repair service",
      "Bosch refrigerator repair Dubai",
      "Fridge gas refill service"
    ],
    image: fridgeImg
  },
  {
    title: "Dishwasher Repair",
    keywords: [
      "Dishwasher repair near me",
      "Built-in dishwasher repair",
      "Bosch dishwasher technician Dubai",
      "Siemens dishwasher repair",
      "Dishwasher not draining fix",
      "Miele dishwasher service",
      "Miele washing machine repair",
      "Gas stove repair"
    ],
    image: dishwasherImg
  }
];

const ServiceCards = () => {
  return (
    <section className="servicecards-section">
      <div className="servicecards-container">
        <h2 className="servicecards-heading">Our Specialized Services</h2>
        <div className="servicecards-grid">
          {services.map((service, index) => (
            <div className="servicecard" key={index}>
              <img src={service.image} alt={service.title} className="servicecard-img" />
              <div className="servicecard-body">
  <h3 className="servicecard-title">{service.title}</h3>
  <ul className="servicecard-keywords">
    {service.keywords.map((keyword, i) => (
      <li key={i}>🔧 {keyword}</li>
    ))}
  </ul>
  <div className="servicecard-learnmore">
  <a href="#" className="learnmore-link">
    Learn More &gt;
  </a>
</div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
