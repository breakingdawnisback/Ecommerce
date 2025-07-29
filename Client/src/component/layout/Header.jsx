import React from 'react';
import './Header.css';
import TopBanner from './TopBanner';
import UtilityNav from './UtilityNav';
import Navbar from './Navbar';

const Header = () => {
  const isPromoVisible = true; // We can control this with state or props later

  return (
    <header className={`site-header ${isPromoVisible ? 'show-promotion' : ''}`}>
      {isPromoVisible && <TopBanner />}
      <div className="main-header-container">
        <UtilityNav />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
