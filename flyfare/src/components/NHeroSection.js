import React from 'react';
import '../App.css';
import './NHeroSection.css';
import heroImage from '../assets/images/image2.png'; // Replace with your image path

const NHeroSection = () => {
  return (
    <section className="n-hero-section">
      <div className="graph__wrapper">
        <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path id="Path-1" className="path" fill="none" stroke="#340070" strokeWidth="5" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>
            <path className="dashed" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeMiterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>
            <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#340070">
              <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
                <mpath xlinkHref="#Path-1" />
              </animateMotion>
            </polyline>
          </g>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-image">
          <img src={heroImage} alt="Supportive illustration" />
        </div>
        <div className="hero-text">
          <h1>It's Okay to Not Be Okay</h1>
          <p>In the fast-paced hustle of life, it's easy to feel overwhelmed by the weight of our problems. But fret not, for here, within the safe confines of our anonymous haven, you can unburden your heart and soul without fear or judgment.</p>
        </div>
      </div>
    </section>
  );
};

export default NHeroSection;
