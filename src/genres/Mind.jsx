import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mind.scss';

const mindTitles = [
 
  { id: 'the-matrix', name: 'The Matrix', image: '/assets/sfic49.jpg' },
  { id: 'inception', name: 'Inception', image: '/assets/sfic50.jpg' },
  { id: 'paprika-mind', name: 'Paprika', image: '/assets/sfic51.jpg' }, 
  { id: 'existenz', name: 'eXistenZ', image: '/assets/sfic52.jpg' },
  { id: 'devs', name: 'Devs', image: '/assets/sfic53.jpg' },
  { id: 'black-swan', name: 'Black Swan', image: '/assets/sfic54.jpg' },
  { id: 'a-scanner-darkly', name: 'A Scanner Darkly', image: '/assets/sfic55.jpg' },
  { id: 'eternal-sunshine', name: 'Eternal Sunshine of the Spotless Mind', image: '/assets/sfic56.jpg' },
];

const Mind = () => {
  const navigate = useNavigate();

  
  const handleImageClick = (movieId) => {
 
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="mind-container">
      <div
        className="back-arrow"
        onClick={() => navigate('/genres')}
        tabIndex={0}
        role="button"
        aria-label="Go back to genres"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') navigate('/genres');
        }}
      >
        ←
      </div>

      <h1 className="mind-title">🧠 Mind & Reality</h1>

      <div className="mind-grid">
        {mindTitles.map((item) => (
          <div
            key={item.id}
            className="mind-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="mind-image" />
            <div className="mind-overlay">
              <h2 className="mind-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mind;