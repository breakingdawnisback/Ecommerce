// src/components/layout/UtilityNav.jsx
import React from 'react';
import './UtilityNav.css';

const UtilityNav = () => {
  return (
    <div className="utility-nav">
      <div className="utility-nav-left">
        <button className="country-selector">
          IN English
        </button>
      </div>
      <div className="utility-nav-right">
        <a href="#" className="store-finder">Find a store</a>
      </div>
    </div>
  );
};

export default UtilityNav;
