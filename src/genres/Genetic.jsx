import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Genetic.scss';

const geneticTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'gattaca', name: 'Gattaca', image: '/assets/sfic41.jpg' },
  { id: 'splice', name: 'Splice', image: '/assets/sfic42.jpg' },
  { id: 'the-island', name: 'The Island', image: '/assets/sfic43.jpg' },
  { id: 'lucy', name: 'Lucy', image: '/assets/sfic44.jpg' },
  { id: 'akira-genetic', name: 'Akira', image: '/assets/sfic45.jpg' }, // Renamed to avoid ID collision if "Akira" exists elsewhere
  { id: 'jurassic-park', name: 'Jurassic Park', image: '/assets/sfic46.jpg' },
  { id: 'the-fly', name: 'The Fly', image: '/assets/sfic47.jpg' },
  { id: 'blade-runner-2049-genetic', name: 'Blade Runner 2049', image: '/assets/sfic48.jpg' }, // Renamed to avoid ID collision
];

const Genetic = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="genetic-container">
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

      <h1 className="genetic-title">🧬 Genetic Experiments</h1>

      <div className="genetic-grid">
        {geneticTitles.map((item) => (
          <div
            key={item.id} // Using item.id as the key for better React performance
            className="genetic-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label
          >
            <img src={item.image} alt={item.name} className="genetic-image" />
            <div className="genetic-overlay">
              <h2 className="genetic-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genetic;