import React from 'react';
import './Page1.css';

const Page1 = () => {
  return (
    <div className="features-section">
      <div className="feature">
        <h2 className="feature-title">Our Uniqueness</h2>
        <p className="feature-number">10+</p>
        <p className="feature-subtitle">Corporate<br/>Super<br/>Specialists</p>
        <p className="feature-description">
          We are providing the solutions to your marketing needs that cannot be found elsewhere.
        </p>
      </div>

      <div className="feature">
        <h2 className="feature-title">Our Experience</h2>
        <p className="feature-number">15+</p>
        <p className="feature-subtitle">Year of<br/>experience<br/>in Marketing</p>
        <p className="feature-description">
          Our experience will help your organisation to become a unicorn in your field.
        </p>
      </div>

      <div className="feature">
        <h2 className="feature-title">Our Dedication</h2>
        <p className="feature-number">24X7</p>
        <p className="feature-subtitle">Strong<br/>Customer<br/>Support</p>
        <p className="feature-description">
          Our strong customer support will help you to find a unique way to all of your problems.
        </p>
      </div>

      <div className="view-services">
        <button className="services-button">view services <span>&#8250;</span></button>
      </div>
    </div>
  );
};

export default Page1;
