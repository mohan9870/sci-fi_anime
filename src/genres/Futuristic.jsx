import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Futuristic.scss'; 

const futuristicTitles = [
  
  { id: 'her', name: 'Her', image: '/assets/sfic25.jpg' },
  { id: 'the-congress', name: 'The Congress', image: '/assets/sfic26.jpg' },
  { id: 'moon', name: 'Moon', image: '/assets/sfic27.jpg' },
  { id: 'transcendence', name: 'Transcendence', image: '/assets/sfic28.jpg' },
  { id: 'electric-dreams', name: 'Electric Dreams', image: '/assets/sfic29.jpg' },
  { id: 'the-creator', name: 'The Creator', image: '/assets/sfic30.jpg' },
  { id: 'after-yang', name: 'After Yang', image: '/assets/sfic31.jpg' },
  { id: 'bigbug', name: 'Bigbug', image: '/assets/sfic32.jpg' },
];

const Futuristic = () => {
  const navigate = useNavigate();

  
  const handleImageClick = (movieId) => {
   
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="futuristic-container">
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

      <h1 className="futuristic-title">🔮 Futuristic Predictions</h1>

      <div className="futuristic-grid">
        {futuristicTitles.map((item) => ( 
          <div
            key={item.id} 
            className="futuristic-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} 
          >
            <img src={item.image} alt={item.name} className="futuristic-image" />
            <div className="futuristic-overlay">
              <h2 className="futuristic-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Futuristic;