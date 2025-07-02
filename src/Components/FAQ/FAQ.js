import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "How do I know if my washing machine needs repair?",
    answer: "You may need a washing machine repair in Dubai if you notice loud noises, water leaks, failure to spin, or unusually long cycles. These signs often indicate mechanical or electrical issues. Our expert technicians in Dubai can diagnose and fix these problems early, preventing costly breakdowns and ensuring your appliance’s longevity."
  },
  {
    question: "How much will the washing machine repair cost?",
    answer: "The cost of washing machine repair in Dubai typically ranges from AED 100 to AED 350, depending on the issue and parts needed. We offer transparent, competitive pricing with no hidden fees, ensuring you receive high-quality service that fits your budget and meets your satisfaction."
  },
  {
    question: "Should I attempt to repair the washing machine myself?",
    answer: "No, DIY washing machine repair in Dubai is not recommended. These appliances involve high-voltage components and delicate electronics, risking further damage or voiding your warranty. Rely on our certified Dubai technicians for safe, professional, and reliable repairs."
  },
  {
    question: "Is it more cost-effective to repair or replace a washing machine?",
    answer: "Repairing is cost-effective if the cost is less than 50% of your machine’s value and it’s under 8-10 years old. Our Dubai repair experts provide a free cost-benefit analysis, helping you make an informed decision that saves money and ensures client satisfaction."
  },
  {
    question: "How long does a typical washing machine repair take?",
    answer: "A typical washing machine repair in Dubai takes 1-2 hours, with our team offering same-day service using genuine parts. This fast response minimizes downtime, restoring your appliance’s performance and providing excellent client convenience."
  },
  {
    question: "How much is washing machine repair in Dubai?",
    answer: "Washing machine repair services in Dubai start at AED 120, with a detailed quote provided after inspection based on labor, parts, and brand. Our affordable rates and expert service ensure you get value and reliability for every repair."
  },
  {
    question: "Is it worth repairing a washing machine?",
    answer: "Yes, repairing your washing machine in Dubai is worth it if it’s not obsolete or has multiple issues. Professional repairs can extend its life by several years at a fraction of the replacement cost, offering peace of mind and satisfaction to our clients."
  },
  {
    question: "Which washing machine is best in UAE?",
    answer: "The best washing machines in the UAE include LG, Bosch, Samsung, and Siemens, praised for their efficiency, durability, and local service support. Our Dubai experts can recommend the ideal model based on your household needs and preferences."
  },
  {
    question: "How long do washing machines last?",
    answer: "Washing machines in the UAE typically last 10-13 years with proper care and regular servicing. Schedule maintenance with our Dubai professionals to avoid overloading and maximize your appliance’s lifespan."
  },
  {
    question: "What parts fail in a washing machine?",
    answer: "Common failing parts include pumps, motors, belts, valves, and control boards. Our skilled Dubai repair team uses advanced diagnostics to identify and replace these components, ensuring your washing machine runs efficiently and reliably."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first FAQ as default open

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle or close
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