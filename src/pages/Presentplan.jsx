import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Presentplan.scss';

const plan = {
  name: 'Premium',
  price: '₹999/month',
  description: 'Ideal for advanced learners with premium needs.',
  features: ['All features unlocked', 'Priority support', '4 Devices, Ad-Free'],
};

const Presentplan = () => {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/subscriptionplans', { state: { selectedPlan: plan.name } });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="present-plan-page">
      <div className="present-plan-header">
        <h2>Your Current Plan</h2>
        <p>You're on a free plan. Upgrade for more benefits!</p>
      </div>

      <div className="present-plan-card">
        <h3>{plan.name}</h3>
        <p className="price">{plan.price}</p>
        <p className="description">{plan.description}</p>
        <ul className="features">
          {plan.features.map((feat, i) => (
            <li key={i}>✅ {feat}</li>
          ))}
        </ul>
      </div>

      <div className="present-plan-actions">
        <button className="upgrade-btn" onClick={handleUpgrade}>Upgrade</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Presentplan;
