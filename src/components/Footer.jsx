import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">OTT</h2> 
          <p>Stream your favorite movies and shows anytime, anywhere.</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movie">Movies</Link></li>
            <li><Link to="/subscriptionplans">Subscription</Link></li>
            <li><Link to="/genres">Genres</Link></li> 
            <li><Link to="/profile">Profile</Link></li> 
          </ul>
        </div>

        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
           
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 OTT Stream. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;