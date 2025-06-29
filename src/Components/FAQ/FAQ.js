// src/Components/FAQ/FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How do I know if my washing machine needs repair?",
    answer: "Signs include loud noise, leaks, spinning issues, and delayed cycles. These often point to mechanical or electrical faults, and early diagnosis prevents major failures."
  },
  {
    question: "How much will the washing machine repair cost?",
    answer: "In Dubai, repair costs typically range from AED 100–350. We offer fair pricing with no hidden charges, based on problem complexity and required parts."
  },
  {
    question: "Should I attempt to repair the washing machine myself?",
    answer: "No. Washing machines contain high-voltage components and sensitive electronics. Self-repair risks damage and voids warranty. Always trust certified technicians."
  },
  {
    question: "Is it more cost-effective to repair or replace a washing machine?",
    answer: "If the repair cost is under 50% of the machine’s value and it's under 8–10 years old, repairs are worth it. We’ll guide you with cost-benefit transparency."
  },
  {
    question: "How long does a typical washing machine repair take?",
    answer: "Standard repairs take 1–2 hours. We aim for same-day service with genuine spare parts to restore full functionality quickly and professionally."
  },
  {
    question: "How much is washing machine repair in Dubai?",
    answer: "Basic repairs start at AED 120. After initial inspection, we provide a clear quote—based on parts, time, and brand requirements."
  },
  {
    question: "Is it worth repairing a washing machine?",
    answer: "Yes, especially if the appliance isn’t outdated or showing multiple problems. Professional repairs can extend life by years at a fraction of replacement cost."
  },
  {
    question: "Which washing machine is best in UAE?",
    answer: "Popular choices include LG, Bosch, Samsung, and Siemens due to performance, energy efficiency, and service support in the UAE market."
  },
  {
    question: "How long do washing machines last?",
    answer: "10–13 years is typical with proper use and servicing. Avoid overloading and perform timely maintenance to maximize longevity."
  },
  {
    question: "What parts fail in a washing machine?",
    answer: "Common failures include pumps, motors, belts, valves, and control boards. Our team pinpoints the issue using expert diagnostics and repairs it efficiently."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
