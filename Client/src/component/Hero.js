// src/component/Hero.js
import React from 'react';
import './Hero.css'; // We will create this CSS file next

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          src="//video.ralphlauren.com/v2/2025/07/20250715-homepage/0715-K-Hubhero-1440x720.mp4"
          autoPlay
          loop
          muted
          playsInline // Important for mobile browsers
        ></video>
        <div className="hero-video-fallback"></div> {/* For fallback image */}
      </div>
      <div className="hero-content">
        <div className="hero-logo">
           <img src="https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/default/dw0ac57a35/img/Brand_Logo_Library/_V2/POLO/2025_classic_polo_logo_white.svg" alt="Polo Ralph Lauren" />
        </div>
        <h2 className="hero-title">Back to School</h2>
        <p className="hero-dek">New styles to make the most of their year ahead</p>
        <div className="hero-links">
          <a href="#" className="hero-cta">Shop Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;