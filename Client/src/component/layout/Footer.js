// src/components/layout/Footer.jsx
import React from 'react';
import './Footer.css';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon, PinterestIcon } from '../common/Icons'; // Add these to Icons.jsx

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-signup">
          <h3>Sign up to receive the latest news...</h3>
          <form className="email-subscribe">
            <input type="email" placeholder="Enter Email Address" />
            <button type="submit">Submit</button>
          </form>
          <p className="opt-in-text">You may unsubscribe at any time. For more information, please read Ralph Lauren Europe Sàrl’s <a href="#">Privacy Policy.</a></p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">World of RL</a></li>
              <li><a href="#">Protecting Our Brands</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Account</h3>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Check Order</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Free Online Returns</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      
        <div className="footer-copyright">
          <p>© Copyright 2025 Ralph Lauren Media LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;