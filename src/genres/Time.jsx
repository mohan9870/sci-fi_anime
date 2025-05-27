import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Time.scss';

const timeTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'tenet', name: 'Tenet', image: '/assets/sfic15.jpg' },
  { id: 'looper', name: 'Looper', image: '/assets/sfic28.jpg' },
  { id: 'predestination', name: 'Predestination', image: '/assets/sfic39.jpg' },
  { id: '12-monkeys', name: '12 Monkeys', image: '/assets/sfic42.jpg' },
  { id: 'steins-gate', name: 'Steins;Gate', image: '/assets/sfic47.jpg' },
  { id: 'source-code', name: 'Source Code', image: '/assets/sfic54.jpg' },
  { id: 'edge-of-tomorrow-time', name: 'Edge of Tomorrow', image: '/assets/sfic63.jpg' }, // Renamed to avoid ID collision
  { id: 'arrival-time', name: 'Arrival', image: '/assets/sfic69.jpg' }, // Renamed to avoid ID collision
];

const Time = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="time-container">
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
      <h1 className="time-title">🌀 Time Travel & Paradox</h1>
      <div className="time-grid">
        {timeTitles.map((item) => (
          <div
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="time-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
          >
            <img src={item.image} alt={item.name} className="time-image" />
            <div className="time-overlay">
              <h2 className="time-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;