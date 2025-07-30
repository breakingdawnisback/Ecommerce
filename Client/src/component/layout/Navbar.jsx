// src/components/layout/Navbar.jsx
import React, { useState, useContext } from 'react';
import './Navbar.css'; // Make sure to import CSS
import { SearchIcon, UserIcon, HeartIcon, BagIcon } from '../common/Icons';
import MegaMenu from './MegaMenu'; // <-- Import MegaMenu
import { menuData } from './menuData'; // <-- Import the data
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const navLinks = ['Men', 'Women', 'Kids & Baby', 'Home', 'Discover', 'Sale'];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
    const { cart } = useContext(CartContext); // <-- Use context to get cart data

  // Calculate total items from the cart state
  const totalItems = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
  return (
    <nav className="navbar" onMouseLeave={() => setActiveMenu(null)}>
      <div className="navbar-left">
        <a href="/" className="logo">
          SOLO&nbsp;&nbsp;&nbsp;SHOPER</a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link}
              className="nav-item"
              onMouseEnter={() => setActiveMenu(link)}
            >
              <a href="#" className="nav-link">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div className="nav-icons">
          <button className="icon-button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-button" aria-label="Account">
            <UserIcon />
          </button>
          <a href="#" className="icon-button" aria-label="Wishlist">
            <HeartIcon />
          </a>
         <Link to="/cart" className="icon-button cart-icon-wrapper" aria-label="Shopping Bag">
            <BagIcon />
            {/* Conditionally render the badge */}
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </div>
      <div className="mobile-menu-toggle">
        <button aria-label="Open menu">
          {/* Hamburger Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      
        <MegaMenu activeMenu={activeMenu} />
    </nav>
  );
};

export default Navbar;
