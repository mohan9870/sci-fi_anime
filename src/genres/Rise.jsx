import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rise.scss';

const riseTitles = [
 
  { id: 'i-robot', name: 'I, Robot', image: '/assets/sfic9.jpg' },
  { id: 'ex-machina', name: 'Ex Machina', image: '/assets/sfic15.jpg' },
  { id: 'terminator-series', name: 'Terminator Series', image: '/assets/sfic27.jpg' },
  { id: 'chappie', name: 'Chappie', image: '/assets/sfic34.jpg' },
  { id: 'black-mirror', name: 'Black Mirror', image: '/assets/sfic41.jpg' },
  { id: 'ghost-in-the-shell-rise', name: 'Ghost in the Shell', image: '/assets/sfic56.jpg' },
  { id: 'upgrade', name: 'Upgrade', image: '/assets/sfic62.jpg' },
  { id: 'westworld', name: 'Westworld', image: '/assets/sfic70.jpg' },
];

const Rise = () => {
  const navigate = useNavigate();

  
  const handleImageClick = (movieId) => {
   
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="rise-container">
      <div
        className="back-arrow"
        onClick={() => navigate('/genres')}
        tabIndex={0}
        role="button"
        aria-label="Go back to genres"
    
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate('/genres');
          }
        }}
      >
        ←
      </div>
      <h1 className="rise-title">🤖 Rise of the Machines</h1>
      <div className="rise-grid">
        {riseTitles.map((item) => (
          <div
            key={item.id} 
            className="rise-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="rise-image" />
            <div className="rise-overlay">
              <h2 className="rise-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rise;