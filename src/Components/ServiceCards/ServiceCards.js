import React from 'react';
import './ServiceCards.css';
import applianceImg from '../../assests/ga1.jpg';
import washerImg from '../../assests/wrepair.jpg';
import refImg from '../../assests/ref.webp';
import dishwasherImg from '../../assests/d1.webp';
import gasImg from '../../assests/gas.webp';
import { Link } from 'react-router-dom'; // Confirm import

const services = [
  {
    title: "General Appliance Repair",
    keywords: [
      "Appliance repair near me",
      "Home appliance repair service",
      "Same day appliance repair",
      "Emergency appliance repair",
      "Appliance repair Dubai",
      "Technical appliance repair"
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
    image: refImg
  },
  {
    title: "Dishwasher Repair",
    keywords: [
      "Dishwasher repair near me",
      "Dishwasher repair service Dubai",
      "Dishwasher not cleaning fix",
      "Bosch dishwasher repair",
      "Samsung dishwasher service",
      "Dishwasher leaking repair",
      "Miele dishwasher technician"
    ],
    image: dishwasherImg
  },
  {
    title: "Kitchen Gas or Electric Oven, Stove, & Range Repair",
    keywords: [
      "Gas stove repair near me",
      "Gas stove technician Dubai",
      "Gas stove repair service",
      "Emergency gas stove repair",
      "Bosch gas stove repair",
      "Samsung gas stove service",
      "Oven repair Dubai",
      "Electric stove repair"
    ],
    image: gasImg
  }
];

const ServiceCards = () => {
  return (
    <section className="servicecards-section">
      <div className="servicecards-container">
        <h2 className="servicecards-heading">We Repair and Service All Major Appliances</h2>
        <div className="servicecards-grid">
          {services.map((service, index) => (
            <div className="servicecard" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={service.image} alt={service.title} className="servicecard-img" />
              <div className="servicecard-body">
                <h3 className="servicecard-title">{service.title}</h3>
                <ul className="servicecard-keywords">
                  {service.keywords.map((keyword, i) => (
                    <li key={i}>• {keyword}</li>
                  ))}
                </ul>
                <div className="servicecard-learnmore">
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\/|&|\s|,|\(|\)/g, '-')}`}
                    className="learnmore-link"
                    onClick={(e) => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Learn More
                  </Link>
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