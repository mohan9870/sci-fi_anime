import React from 'react';

function CustomButton({ label, type = 'button', color = 'primary', onClick }) {
  
  const colors = {
    primary: '#00d4ff', 
    magenta: '#ff00ff',
    purple: '#9b59b6',
    green: '#00ff99',
    default: '#555'
  };

  const bgColor = colors[color] || colors.default;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '12px 28px',
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '12px',
        color: '#000',
        fontWeight: '900',
        fontFamily: "'Orbitron', sans-serif", 
        cursor: 'pointer',
        boxShadow: `0 0 8px 2px ${bgColor}`, 
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = `0 0 15px 4px ${bgColor}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = `0 0 8px 2px ${bgColor}`;
      }}
    >
      {label}
    </button>
  );
}

export default CustomButton;
