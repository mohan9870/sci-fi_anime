import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Space.scss';

const spaceTitles = [
  
  { id: 'interstellar-space', name: 'Interstellar', image: '/assets/sfic10.jpg' }, 
  { id: '2001-a-space-odyssey', name: '2001: A Space Odyssey', image: '/assets/sfic23.jpg' },
  { id: 'gravity-space', name: 'Gravity', image: '/assets/sfic35.jpg' }, 
  { id: 'ad-astra', name: 'Ad Astra', image: '/assets/sfic42.jpg' },
  { id: 'the-expanse', name: 'The Expanse', image: '/assets/sfic50.jpg' },
  { id: 'arrival-space', name: 'Arrival', image: '/assets/sfic57.jpg' }, 
  { id: 'district-9-space', name: 'District 9', image: '/assets/sfic63.jpg' },
  { id: 'edge-of-tomorrow-space', name: 'Edge of Tomorrow', image: '/assets/sfic68.jpg' },
];

const Space = () => {
  const navigate = useNavigate();

 
  const handleImageClick = (movieId) => {
   
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="space-container">
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
      <h1 className="space-title">🚀 Space Odyssey</h1>
      <div className="space-grid">
        {spaceTitles.map((item) => (
          <div
            key={item.id} 
            className="space-card"
            onClick={() => handleImageClick(item.id)}
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} 
          >
            <img src={item.image} alt={item.name} className="space-image" />
            <div className="space-overlay">
              <h2 className="space-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Space;