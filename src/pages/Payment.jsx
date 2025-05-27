import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft, FaCreditCard, FaMobileAlt, FaQrcode } from "react-icons/fa";
import "./Payment.scss";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the selected plan from location.state
  const initialPlan = location.state?.selectedPlan?.toLowerCase() || "standard";

  const plans = [
    { value: "basic", label: "Basic", price: 199, description: "1 Device, SD" },
    { value: "standard", label: "Standard", price: 399, description: "2 Devices, HD" },
    { value: "premium", label: "Premium", price: 999, description: "4 Devices, Ad-Free" },
  ];

  const [selectedPlan] = useState(initialPlan);
  const [amount] = useState(
    plans.find((p) => p.value === initialPlan)?.price || 399
  );
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    phonePeNumber: "",
    upi: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = [];
    if (paymentMethod === "card") {
      if (!/^[0-9]{16}$/.test(formValues.cardNumber)) errors.push("Invalid card number.");
      if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(formValues.expiryDate)) errors.push("Invalid expiry date.");
      if (!/^[0-9]{3}$/.test(formValues.cvv)) errors.push("Invalid CVV.");
    }
    if (paymentMethod === "phonepe") {
      if (!/^[0-9]{10}$/.test(formValues.phonePeNumber)) errors.push("Invalid PhonePe number.");
    }
    if (paymentMethod === "upi") {
      if (!/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z]+$/.test(formValues.upi)) {
        errors.push("Invalid UPI ID.");
      }
    }
    return errors;
  };

  const handlePayment = () => {
    const errors = validateForm();

    if (errors.length > 0) {
      errors.forEach((msg) => toast.error(msg));
    } else {
      setLoading(true);
      toast.success("Payment Successful!");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cvv") {
      const sanitized = value.replace(/\D/g, "").slice(0, 3);
      setFormValues((prev) => ({ ...prev, [name]: sanitized }));
    } else if (name === "expiryDate") {
      let formatted = value.replace(/[^\d]/g, "");
      if (formatted.length >= 3) {
        formatted = formatted.slice(0, 2) + "/" + formatted.slice(2, 4);
      }
      setFormValues((prev) => ({ ...prev, [name]: formatted.slice(0, 5) }));
    } else if (name === "cardNumber") {
      const sanitized = value.replace(/\D/g, "").slice(0, 16);
      setFormValues((prev) => ({ ...prev, [name]: sanitized }));
    } else if (name === "phonePeNumber") {
      const sanitized = value.replace(/\D/g, "").slice(0, 10);
      setFormValues((prev) => ({ ...prev, [name]: sanitized }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="payment-page">
      <button className="back-arrow" onClick={() => navigate("/subscriptionplans")}>
        <FaArrowLeft size={24} />
      </button>

      <div className="payment-card futuristic-card">
        <h2 className="payment-title neon-text">Secure Payment</h2>

        {/* Show Selected Plan */}
        <div className="selected-plan">
          <label>Selected Plan</label>
          <div className="plan-info neon-text">
            {plans.find((plan) => plan.value === selectedPlan)?.label} - ₹{amount} (
            {plans.find((plan) => plan.value === selectedPlan)?.description})
          </div>
        </div>

        {/* Payment Methods */}
        <h4 className="payment-subtitle">Choose Payment Method</h4>
        <div className="payment-method-group">
          <div
            className={`payment-option ${paymentMethod === "card" ? "active" : ""}`}
            onClick={() => setPaymentMethod("card")}
          >
            <FaCreditCard />
            <span>Card</span>
          </div>
          <div
            className={`payment-option ${paymentMethod === "phonepe" ? "active" : ""}`}
            onClick={() => setPaymentMethod("phonepe")}
          >
            <FaMobileAlt />
            <span>PhonePe</span>
          </div>
          <div
            className={`payment-option ${paymentMethod === "upi" ? "active" : ""}`}
            onClick={() => setPaymentMethod("upi")}
          >
            <FaQrcode />
            <span>UPI</span>
          </div>
        </div>

        {/* Payment Fields */}
        {paymentMethod === "card" && (
          <div className="payment-details futuristic-input">
            <div className="form-group">
              <label>Card Number</label>
              <input
                name="cardNumber"
                placeholder="Enter 16-digit card number"
                value={formValues.cardNumber}
                onChange={handleInputChange}
                disabled={loading}
                className="neon-input"
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                name="expiryDate"
                placeholder="MM/YY"
                value={formValues.expiryDate}
                onChange={handleInputChange}
                disabled={loading}
                className="neon-input"
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                name="cvv"
                type="password"
                placeholder="CVV"
                value={formValues.cvv}
                onChange={handleInputChange}
                disabled={loading}
                className="neon-input"
              />
            </div>
          </div>
        )}

        {paymentMethod === "phonepe" && (
          <div className="payment-details futuristic-input">
            <div className="form-group">
              <label>PhonePe Number</label>
              <input
                name="phonePeNumber"
                placeholder="Enter 10-digit PhonePe number"
                value={formValues.phonePeNumber}
                onChange={handleInputChange}
                disabled={loading}
                className="neon-input"
              />
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="payment-details futuristic-input">
            <div className="form-group">
              <label>UPI ID</label>
              <input
                name="upi"
                placeholder="mobilenumber@ybl"
                value={formValues.upi}
                onChange={handleInputChange}
                disabled={loading}
                className="neon-input"
                maxLength="14"
              />
            </div>
          </div>
        )}

        <button className="pay-button neon-button" onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </button>
      </div>

      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "0.95rem",
            borderRadius: "10px",
            padding: "12px 20px",
            color: "#333",
            backgroundColor: "#fff",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
            borderLeft: "5px solid #007bff",
          },
          error: {
            style: { borderLeft: "5px solid #ff4d4f" },
          },
        }}
      />
    </div>
  );
};

export default Payment;
