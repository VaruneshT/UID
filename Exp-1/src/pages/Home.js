// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleExploreProducts = () => {
    navigate('/services');
  };

  return (
    <div className="home">
      <section className="hero">
        <img src="/images/hero/hero-bg.jpg" alt="Hero Background" className="hero-image" />
        <h1>Welcome to AMD Ryzen</h1>
        <p>Empowering technology with cutting-edge performance and reliability.</p>
        <button onClick={handleContactUs}>Contact Us</button>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/images/features/processor.jpg" alt="High-Performance Processors" className="feature-image" />
            <h3>High-Performance Processors</h3>
            <p>Experience unmatched performance with our latest generation processors.</p>
          </div>
          <div className="feature-card">
            <img src="/images/features/technology.jpg" alt="Advanced Technology" className="feature-image" />
            <h3>Advanced Technology</h3>
            <p>Leverage the most advanced technology to boost your computing power.</p>
          </div>
          <div className="feature-card">
            <img src="/images/features/reliability.jpg" alt="Reliable Solutions" className="feature-image" />
            <h3>Reliable Solutions</h3>
            <p>Our products are designed to deliver exceptional reliability and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Upgrade Your Performance?</h2>
        <p>Discover our latest products and solutions tailored for your needs.</p>
        <button onClick={handleExploreProducts}>Explore Products</button>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"AMD Ryzen processors have significantly improved our system performance. Highly recommended!"</p>
          <h4>- Arjun Kumar, IT Specialist</h4>
        </div>
        <div className="testimonial">
          <p>"The reliability and efficiency of AMD Ryzen products have made them our top choice for computing solutions."</p>
          <h4>- Priya Sharma, Tech Enthusiast</h4>
        </div>
      </section>
    </div>
  );
};

export default Home;
