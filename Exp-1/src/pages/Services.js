// src/pages/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <section className="services-list">
        <h1>Our Services</h1>
        <div className="service-item">
          <img src="/images/services/service1.jpg" alt="Service 1" className="service-image" />
          <h2>Web Development</h2>
          <p>We offer comprehensive web development services to help you build a robust online presence.</p>
        </div>
        <div className="service-item">
          <img src="/images/services/service2.jpg" alt="Service 2" className="service-image" />
          <h2>Digital Marketing</h2>
          <p>Our digital marketing strategies will help you reach your target audience effectively.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
