// src/components/layout/TopBanner.jsx
import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="ticker-wrap">
        <div className="ticker-item">
          Summer Sale <a href="#">SHOP NOW</a>
        </div>
        <div className="ticker-item">
          Complimentary Shipping On All Orders
        </div>
        <div className="ticker-item">
          Summer Sale <a href="#">SHOP NOW</a>
        </div>
        <div className="ticker-item">
          Complimentary Shipping On All Orders
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
