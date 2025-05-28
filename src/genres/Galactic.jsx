import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Galactic.scss'; 

const galacticTitles = [
  
  { id: 'dune', name: 'Dune', image: '/assets/sfic33.jpg' },
  { id: 'star-wars', name: 'Star Wars', image: '/assets/sfic34.jpg' },
  { id: 'guardians-of-the-galaxy', name: 'Guardians of the Galaxy', image: '/assets/sfic35.jpg' },
  { id: 'battlestar-galactica', name: 'Battlestar Galactica', image: '/assets/sfic36.jpg' },
  { id: 'foundation', name: 'Foundation', image: '/assets/sfic37.jpg' },
  { id: 'jupiter-ascending', name: 'Jupiter Ascending', image: '/assets/sfic38.jpg' },
  { id: 'valerian', name: 'Valerian', image: '/assets/sfic39.jpg' },
  { id: 'enders-game', name: "Ender's Game", image: '/assets/sfic40.jpg' },
];

const Galactic = () => {
  const navigate = useNavigate();

 
  const handleImageClick = (movieId) => {
    
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="galactic-container">
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

      <h1 className="galactic-title">🌌 Galactic Empires</h1>

      <div className="galactic-grid">
        {galacticTitles.map((item) => (
          <div
            key={item.id} 
            className="galactic-card"
            onClick={() => handleImageClick(item.id)}
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="galactic-image" />
            <div className="galactic-overlay">
              <h2 className="galactic-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galactic;