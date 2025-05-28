import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import './SubscriptionPlans.scss';

const plans = [
  {
    name: 'Basic',
    price: '₹199/month',
    description: 'Perfect for individuals just getting started.',
    features: ['Access to basic lessons', 'Limited support', '1 Device, SD'],
  },
  {
    name: 'Standard',
    price: '₹399/month',
    description: 'Great for families or siblings sharing access.',
    features: ['All basic features', 'Parental dashboard', '2 Devices, HD'],
  },
  {
    name: 'Premium',
    price: '₹999/month',
    description: 'Ideal for advanced learners with premium needs.',
    features: ['All features unlocked', 'Priority support', '4 Devices, Ad-Free'],
  },
];

const SubscriptionPlans = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (index) => {
    setSelected(prevSelected => prevSelected === index ? null : index);
  };

  const handleRedirect = (planName) => {
    navigate('/payment', { state: { selectedPlan: planName } });
  };

  const planButtons = {
    Basic: 'Start Now',
    Standard: 'Get Standard',
    Premium: 'Go Premium',
  };

  return (
    <div className="subscription-page">
     
      <button className="back-button" onClick={() => navigate('/home')}>
        <FaArrowLeft />
      </button>

      <h2 className="page-title">Choose Your Plan</h2>
      <p className="page-subtitle">Flexible options to suit your learning journey</p>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${selected === index ? 'selected' : ''}`}
            onClick={() => handleSelect(index)}
            aria-selected={selected === index}
            aria-label={`Subscription Plan: ${plan.name} - ${plan.price}`}
          >
            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
            </div>
            <p className="description">{plan.description}</p>
            <ul className="feature-list">
              {plan.features.map((feat, i) => (
                <li key={i}>✅ {feat}</li>
              ))}
            </ul>
            <button
              className="select-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleRedirect(plan.name);
              }}
            >
              {planButtons[plan.name] || 'Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;