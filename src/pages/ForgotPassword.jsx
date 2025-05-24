import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required!');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email!');
      return;
    }

    setSending(true);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    toast.info('OTP sent successfully!', { autoClose: 2000 });

    setTimeout(() => {
      navigate('/otp-verification', { state: { otp, email } });
    }, 2000);
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '50px auto',
      padding: 30,
      borderRadius: 10,
      backgroundColor: '#111',
      boxShadow: '0 0 15px #00ffc8',
      color: '#00ffc8',
      fontFamily: "'Orbitron', monospace"
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20, textShadow: '0 0 8px #00ffc8' }}>Forgot Password</h2>

      <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 5,
            border: '1px solid #00ffc8',
            backgroundColor: '#222',
            color: '#00ffc8',
            fontWeight: 'bold',
            fontFamily: "'Orbitron', monospace"
          }}
          required
          disabled={sending}
        />

        <button
          type="submit"
          disabled={sending}
          style={{
            padding: 10,
            backgroundColor: sending ? '#005f6b' : '#00ffc8',
            color: '#111',
            border: 'none',
            borderRadius: 5,
            cursor: sending ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontFamily: "'Orbitron', monospace",
            boxShadow: sending ? 'none' : '0 0 10px #00ffc8',
            transition: 'background-color 0.3s'
          }}
        >
          {sending ? 'Sending...' : 'Send OTP'}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        toastStyle={{ backgroundColor: '#111', color: '#00ffc8', fontFamily: "'Orbitron', monospace" }}
        bodyStyle={{ color: '#00ffc8' }}
      />
    </div>
  );
}

export default ForgotPassword;
