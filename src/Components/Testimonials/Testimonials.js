import React, { useState, useRef } from 'react';
import './Testimonials.css';
import { FaCommentAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Mohammed A.",
    review: "My washing machine stopped spinning, and Fix Quick Service repaired it the same day. Professional and efficient team!",
    rating: "5/5"
  },
  {
    name: "Fatima S.",
    review: "Excellent service for my fridge repair. The technician was knowledgeable and fixed the cooling issue quickly.",
    rating: "5/5"
  },
  {
    name: "Ahmed K.",
    review: "They fixed my dishwasher in no time. Very reliable and transparent pricing. Highly recommend!",
    rating: "5/5"
  },
  {
    name: "Noor H.",
    review: "My oven was acting up, and their team restored it perfectly. Courteous and fast service!",
    rating: "5/5"
  },
  {
    name: "Sara M.",
    review: "Fantastic repair for my dryer. The technician used genuine parts and ensured everything worked perfectly.",
    rating: "5/5"
  },
  {
    name: "John Smith",
    review: "Outstanding AC repair service. The team was punctual and resolved the issue efficiently. Will use again!",
    rating: "5/5"
  },
  {
    name: "Maria Garcia",
    review: "My microwave is working like new thanks to their expert repair. Highly satisfied with the results.",
    rating: "4.5/5"
  },
  {
    name: "Li Wei",
    review: "Professional and quick fix for my gas cooker. Excellent customer service and fair pricing.",
    rating: "5/5"
  },
  {
    name: "Emily Johnson",
    review: "They handled my refrigerator repair with great care. Reliable and trustworthy service.",
    rating: "5/5"
  },
  {
    name: "Raj Patel",
    review: "Impressed with the speedy repair of my dishwasher. The technician was very knowledgeable.",
    rating: "4.8/5"
  }
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const testimonialsRef = useRef(null);

  const toggleShowAll = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);
    if (!newShowAll && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="testimonials-container">
          <h2 className="testimonials-heading">Testimonials</h2>
          <div className="testimonials-line"></div>
          <div className="testimonials-grid">
            {displayedTestimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="testimonial-card-border"></div>
                <div className="testimonial-card-content">
                  <div className="testimonial-icon-container">
                    <FaCommentAlt className="testimonial-icon" />
                    <FaStar className="testimonial-star-icon" />
                  </div>
                  <p className="testimonial-review">“{testimonial.review}”</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <div className="testimonial-rating">
                    <span>{testimonial.rating}</span>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="testimonial-star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-button-container">
            <button className="testimonials-view-all-button" onClick={toggleShowAll}>
              {showAll ? 'Hide Reviews' : 'View All Reviews'}
            </button>
          </div>
        </div>
      </section>
      <section className="trust-section">
        <div className="trust-container">
          <h2 className="trust-heading">Service You Can Trust!</h2>
          <p className="trust-text">Let us know how we can help you today.</p>
          <Link to="/booking" className="trust-button">
            Easy Online Booking
          </Link>
        </div>
      </section>
    </>
  );
};

export default Testimonials;