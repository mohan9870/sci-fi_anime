import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './OtpVerification.scss';
import 'react-toastify/dist/ReactToastify.css';

function OtpVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const { otp, email } = location.state || {};

  const [enteredOtp, setEnteredOtp] = useState('');

  useEffect(() => {
    if (otp) {
      toast.info(`Your OTP is: ${otp}`, {
        autoClose: false,
        closeOnClick: false,
        draggable: false
      });
    }
  }, [otp]);

  const handleVerify = (e) => {
    e.preventDefault();

    if (enteredOtp === otp) {
      toast.success('OTP verified successfully!', {
        autoClose: 1500,
        onClose: () => {
          navigate('/reset-password', { state: { email } });
        }
      });
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  if (!otp) {
    return (
      <div className="otp-container">
        <p>No OTP found. Please request one from the Forgot Password page.</p>
      </div>
    );
  }

  return (
    <div className="otp-container">
      <h3 className="glitch" data-text="OTP Verification">OTP Verification</h3>

      <form onSubmit={handleVerify} className="otp-form">
        <input
          type="text"
          value={enteredOtp}
          onChange={(e) => setEnteredOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
          required
          className="input-neon"
          style={{ textAlign: 'center', color: '#000' }}
        />

        <button type="submit" className="btn-neon">
          Verify OTP
        </button>
      </form>

      <ToastContainer position="top-right" />
    </div>
  );
}

export default OtpVerification;
