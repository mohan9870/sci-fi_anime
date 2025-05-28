import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const socialLinks = {
    facebook: 'https://www.facebook.com/login/',
    twitter: 'https://twitter.com/login',
    instagram: 'https://www.instagram.com/accounts/login/',
    google: 'https://accounts.google.com/signin',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    console.log(`Attempting login with email: ${email} and password: ${password}`);

    
    if (email && password) {
      alert(`Login successful for email: ${email}. Redirecting to home.`);
      navigate('/home'); 
    } else {
      alert('Please enter both email and password.');
    }
    
  };

  return (
    <div className="login-container">
      <h2 className="glitch" data-text="Login">Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-neon"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-neon"
          
        />
        

        <button type="submit" className="btn-neon">Sign In</button>
      </form>

     
      <div className="forgot-password-link">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <p className="signin-text">Or sign in with:</p>

      <div className="social-icons">
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Login with Facebook"><FaFacebookF /></a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Login with Twitter"><FaTwitter /></a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Login with Instagram"><FaInstagram /></a>
        <a href={socialLinks.google} target="_blank" rel="noopener noreferrer" className="social-icon google" title="Login with Google"><FaGoogle /></a>
      </div>
    </div>
  );
}

export default Login;