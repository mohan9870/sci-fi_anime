import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // For social media icons
import './Footer.scss'; // We'll create this SCSS file next

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">OTT</h2> {/* Assuming you want the "OTT" logo in the footer too */}
          <p>Stream your favorite movies and shows anytime, anywhere.</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movie">Movies</Link></li>
            <li><Link to="/subscriptionplans">Subscription</Link></li>
            <li><Link to="/genres">Genres</Link></li> {/* <--- UNCOMMENTED AND ADDED THIS LINE */}
            <li><Link to="/profile">Profile</Link></li> {/* Assuming you have a profile page */}
          </ul>
        </div>

        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            {/* The screenshot only shows FB, Twitter, Instagram. Adding YouTube as an example */}
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