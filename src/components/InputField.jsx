import React, { useState } from 'react';

const InputField = ({ type, name, value, placeholder, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <input
        type={showPassword ? 'text' : type} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: error ? '2px solid red' : '1px solid #ccc',
          backgroundColor: error ? '#ffe6e6' : '#fff', 
        }}
      />
      {type === 'password' && (
        <span
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          {showPassword ? '🙈' : '👁️'}
        </span>
      )}

    
      {error && (
        <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
