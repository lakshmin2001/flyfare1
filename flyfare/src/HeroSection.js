import React from 'react';
import './HeroSection.css';
import homeFlower from './assets/images/home-flower.png'; // Replace with your image path
import About1 from './components/about/about1';
import NHeroSection from './components/NHeroSection';
import ContentSection from './components/ContentSection';
import Header from './Header';
import Footer from './components/Footer/Footer';
import Footer1 from './components/Footer/Footer1';

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="text-content">
          <h1>Your Mental Health Matters</h1>
          <p>Explore a compassionate space where you can connect, share, and grow with others on their mental health journey.</p>
          <a href="/space" className="hero-button">Speak It Out →</a>
        </div>
        <div className="image-content">
          <img src={homeFlower} alt="Mental Health Illustration" />
        </div>  
      </section>
      <NHeroSection />
      <ContentSection />
      <About1 />
      <Footer />
      <Footer1 />
 
    </>
  );
};

export default HeroSection;
