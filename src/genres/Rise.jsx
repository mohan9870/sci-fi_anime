import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rise.scss';

const riseTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'i-robot', name: 'I, Robot', image: '/assets/sfic9.jpg' },
  { id: 'ex-machina', name: 'Ex Machina', image: '/assets/sfic15.jpg' },
  { id: 'terminator-series', name: 'Terminator Series', image: '/assets/sfic27.jpg' },
  { id: 'chappie', name: 'Chappie', image: '/assets/sfic34.jpg' },
  { id: 'black-mirror', name: 'Black Mirror', image: '/assets/sfic41.jpg' },
  { id: 'ghost-in-the-shell-rise', name: 'Ghost in the Shell', image: '/assets/sfic56.jpg' }, // Renamed to avoid ID collision
  { id: 'upgrade', name: 'Upgrade', image: '/assets/sfic62.jpg' },
  { id: 'westworld', name: 'Westworld', image: '/assets/sfic70.jpg' },
];

const Rise = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
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
        // It's good practice to also handle keyboard navigation for accessibility
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
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="rise-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
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