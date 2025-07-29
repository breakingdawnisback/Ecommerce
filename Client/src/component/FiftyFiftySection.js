// src/components/FiftyFiftySection.jsx
import React from 'react';
import './FiftyFiftySection.css';

// This component expects a 'sections' prop which is an array of two objects
const FiftyFiftySection = ({ sections, reverseOnMobile = false }) => {
  return (
    <section className={`fifty-fifty-section ${reverseOnMobile ? 'reverse-mobile' : ''}`}>
      {sections.map((section, index) => (
        <div key={index} className="fifty-fifty-block">
          <div className="fifty-fifty-image">
            <a href={section.link}>
              <picture>
                <source media="(max-width: 767px)" srcSet={section.mobileImgSrc} />
                <source media="(min-width: 768px)" srcSet={section.desktopImgSrc} />
                <img src={section.desktopImgSrc} alt={section.title} loading="lazy" />
              </picture>
            </a>
          </div>
          <div className="fifty-fifty-content">
            <div className="brand-text">{section.brand}</div>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-dek">{section.dek}</p>
            <div className="section-links">
              <a href={section.link} className="section-cta">
                {section.linkText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FiftyFiftySection;