import React, { useState } from 'react';
import './Testimonials.css';
import backgroundImage from '../../assests/test.webp';

const testimonials = [
  {
    name: "Sana",
    review: "Our washing machine which was not working. We called Fix Quick Service and they repaired it the same day in a few hours.",
  },
  {
    name: "Ayaan K.",
    review: "Excellent same-day service. Clean work and professional team.",
  },
  {
    name: "Fatima Z.",
    review: "Very helpful and fast repair. Definitely a 5-star experience!",
  },
  {
    name: "James M.",
    review: "Solved our washer motor issue within hours. Courteous staff!",
  },
  {
    name: "Ayesha T.",
    review: "Loved the transparency and reliability. Would recommend them again.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="testimonial-overlay">
        <div className="testimonial-container">
          <button className="arrow left" onClick={prev}>&#10094;</button>

          <div className="testimonial-box">
            <h2 className="testimonial-title">TESTIMONIALS</h2>
            <hr className="testimonial-line" />
            <p className="testimonial-text">“{testimonials[index].review}”</p>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-author">{testimonials[index].name}</p>
          </div>

          <button className="arrow right" onClick={next}>&#10095;</button>
        </div>
      </div>
    </section>
  );
}
