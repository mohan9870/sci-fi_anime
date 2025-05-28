import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Alien.scss'; 

const alienTitles = [
  { id: 'arrival', name: 'Arrival', image: '/assets/sfic9.jpg' },
  { id: 'district-9', name: 'District 9', image: '/assets/sfic10.jpg' },
  { id: 'edge-of-tomorrow', name: 'Edge of Tomorrow', image: '/assets/sfic11.jpg' },
  { id: 'alien', name: 'Alien', image: '/assets/sfic12.jpg' },
  { id: 'independence-day', name: 'Independence Day', image: '/assets/sfic13.jpg' },
  { id: 'the-x-files', name: 'The X-Files', image: '/assets/sfic14.jpg' },
  { id: 'nope', name: 'Nope', image: '/assets/sfic15.jpg' },
  { id: 'signs', name: 'Signs', image: '/assets/sfic16.jpg' },
];

const Alien = () => {
  const navigate = useNavigate();

 
  const handleImageClick = (movieId) => {
  
    navigate('/video', { state: { movieId: movieId } }); 
  };

  return (
    <div className="alien-container">
      <div
        className="back-arrow"
        onClick={() => navigate('/genres')}
        tabIndex={0}
        role="button"
        aria-label="Go back to genres"
      >
        ←
      </div>
      <h1 className="alien-title">👾 Alien Encounters</h1>
      <div className="alien-grid">
        {alienTitles.map((item, index) => (
          <div
            key={item.id || index}
            className="alien-card"
            onClick={() => handleImageClick(item.id)}
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="alien-image" />
            <div className="alien-overlay">
              <h2 className="alien-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alien;