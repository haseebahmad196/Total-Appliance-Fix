import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of appliances do you repair?",
    answer: "We repair a wide range of household appliances, including washing machines, refrigerators, dishwashers, gas and electric ovens, stoves, and ranges. Our technicians are trained to service all major brands with precision and care."
  },
  {
    question: "How quickly can you schedule a repair?",
    answer: "We offer same-day or next-day appointments in most cases, depending on availability. Contact us to schedule a service call at your convenience, and we’ll work around your schedule."
  },
  {
    question: "Are your technicians certified and experienced?",
    answer: "Yes, all our technicians are certified professionals with extensive experience in appliance repair. They undergo regular training to stay updated on the latest technologies and repair techniques."
  },
  {
    question: "Do you provide a warranty for your repairs?",
    answer: "We stand behind our work with a satisfaction guarantee and offer a warranty on parts and labor. The warranty period depends on the service provided—please contact us for specific details."
  },
  {
    question: "What areas do you serve in Dubai?",
    answer: "We provide appliance repair services across Dubai and surrounding areas. Whether you’re in Downtown Dubai, Jumeirah, or elsewhere, our team is ready to assist you promptly."
  },
  {
    question: "Can you repair appliances from all brands?",
    answer: "Yes, our technicians are skilled in repairing appliances from all major brands, including Samsung, LG, Bosch, Miele, and more. We use genuine parts to ensure lasting repairs."
  },
  {
    question: "What should I do if my appliance is under warranty?",
    answer: "If your appliance is under manufacturer warranty, we can work with you to diagnose the issue and coordinate with the brand for repairs. Contact us with your warranty details for assistance."
  },
  {
    question: "How much will my appliance repair cost?",
    answer: "Repair costs depend on the appliance type, issue, and required parts. We provide transparent quotes before starting work. Contact us for a free estimate based on your specific needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setActiveIndex(null); // Close all answers when toggling
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-line"></div>
        <p className="faq-description">
          Our expert technicians know how important your household appliances are to your daily routine. That’s why we go beyond just fixing the problem—we aim to provide top-tier service with professionalism, cleanliness, and care. Below, we’ve answered some common questions about our services, process, and what sets us apart.
        </p>
        <div className="faq-grid">
          {displayedFaqs.map((faq, index) => (
            <div className="faq-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="faq-card-border"></div>
              <div className="faq-card-content">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <span className="faq-toggle-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'faq-answer-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-button-container">
          <button className="faq-view-all-button" onClick={toggleShowAll}>
            {showAll ? 'Hide FAQs' : 'View All FAQs'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;