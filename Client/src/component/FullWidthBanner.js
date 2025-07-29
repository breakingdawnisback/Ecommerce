// src/components/FullWidthBanner.jsx
import React from 'react';
import './FullWidthBanner.css';

const FullWidthBanner = ({ brand, title, dek, linkText, link, desktopImgSrc, mobileImgSrc }) => {
  return (
    <section className="full-width-banner">
      <div className="banner-image">
        <a href={link}>
          <picture>
            <source media="(max-width: 767px)" srcSet={mobileImgSrc} />
            <source media="(min-width: 768px)" srcSet={desktopImgSrc} />
            <img src={desktopImgSrc} alt={title} loading="lazy" />
          </picture>
        </a>
      </div>
      <div className="banner-content">
        <div className="brand-text">{brand}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-dek">{dek}</p>
        <div className="section-links">
          <a href={link} className="section-cta">
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;