import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Space.scss';

const spaceTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'interstellar-space', name: 'Interstellar', image: '/assets/sfic10.jpg' }, // Renamed to avoid ID collision
  { id: '2001-a-space-odyssey', name: '2001: A Space Odyssey', image: '/assets/sfic23.jpg' },
  { id: 'gravity-space', name: 'Gravity', image: '/assets/sfic35.jpg' }, // Renamed to avoid ID collision
  { id: 'ad-astra', name: 'Ad Astra', image: '/assets/sfic42.jpg' },
  { id: 'the-expanse', name: 'The Expanse', image: '/assets/sfic50.jpg' },
  { id: 'arrival-space', name: 'Arrival', image: '/assets/sfic57.jpg' }, // Renamed to avoid ID collision
  { id: 'district-9-space', name: 'District 9', image: '/assets/sfic63.jpg' }, // Renamed to avoid ID collision
  { id: 'edge-of-tomorrow-space', name: 'Edge of Tomorrow', image: '/assets/sfic68.jpg' }, // Renamed to avoid ID collision
];

const Space = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
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
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="space-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
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