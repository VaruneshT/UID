// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="company-overview">
        <h1>About AMD Ryzen</h1>
        <p>
          AMD Ryzen was founded in 2020 with the vision of empowering businesses through innovative web solutions. We specialize in web development, design, and digital marketing services tailored to meet the unique needs of our clients.
        </p>
        <img src="/images/about/company-overview.jpg" alt="Company Overview" className="about-image" />
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality, innovative web solutions that help our clients achieve their business goals and enhance their online presence.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in web solutions, recognized for our creativity, technical expertise, and commitment to excellence.
          </p>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards.</li>
          <li><strong>Innovation:</strong> We embrace creativity and strive for continuous improvement.</li>
          <li><strong>Customer Focus:</strong> We prioritize our clients' needs and work diligently to exceed their expectations.</li>
          <li><strong>Teamwork:</strong> We believe in the power of collaboration and open communication.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
