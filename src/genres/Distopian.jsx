import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Distopian.scss';

const dystopianTitles = [
  
  { id: 'children-of-men', name: 'Children of Men', image: '/assets/sfic17.jpg' },
  { id: 'the-hunger-games', name: 'The Hunger Games', image: '/assets/sfic18.jpg' },
  { id: 'snowpiercer', name: 'Snowpiercer', image: '/assets/sfic19.jpg' },
  { id: 'equilibrium', name: 'Equilibrium', image: '/assets/sfic20.jpg' },
  { id: 'the-handmaids-tale', name: 'The Handmaid’s Tale', image: '/assets/sfic21.jpg' },
  { id: 'v-for-vendetta', name: 'V for Vendetta', image: '/assets/sfic22.jpg' },
  { id: 'the-giver', name: 'The Giver', image: '/assets/sfic23.jpg' },
  { id: 'elysium', name: 'Elysium', image: '/assets/sfic24.jpg' },
];

const Distopian = () => {
  const navigate = useNavigate();

 
  const handleImageClick = (movieId) => {

    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="distopian-container">
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

      <h1 className="distopian-title">🌍 Dystopian Futures</h1>
      <div className="distopian-grid">
        {dystopianTitles.map((item, index) => (
          <div
            key={item.id} 
            className="distopian-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="distopian-image" />
            <div className="distopian-overlay">
              <h2 className="distopian-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distopian;