import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { email, password } = form;

    if (!email || !password) {
      toast.error('All fields are required');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Invalid email format');
      return false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,}$/;
    if (!passwordPattern.test(password)) {
      toast.error('Password must be 7+ chars, 1 uppercase & 1 special char');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Signup successful!');
      navigate('/login');
    }
  };

  return (
    <div className="login-container">
      <h3 className="glitch" data-text="Sign Up">Sign Up</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          className="input-neon"
        />
        <InputField
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          className="input-neon"
        />
        <CustomButton type="submit" label="Sign Up" className="btn-neon" />
      </form>
    </div>
  );
};

export default Signup;
