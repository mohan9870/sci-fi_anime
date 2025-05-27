import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tech.scss';

const techTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'blade-runner-tech', name: 'Blade Runner', image: '/assets/sfic11.jpg' }, // Renamed to avoid ID collision
  { id: 'minority-report', name: 'Minority Report', image: '/assets/sfic22.jpg' },
  { id: 'ghost-in-the-shell-tech', name: 'Ghost in the Shell', image: '/assets/sfic34.jpg' }, // Renamed to avoid ID collision
  { id: 'altered-carbon', name: 'Altered Carbon', image: '/assets/sfic45.jpg' },
  { id: 'upgrade-tech', name: 'Upgrade', image: '/assets/sfic51.jpg' }, // Renamed to avoid ID collision
  { id: 'her-tech', name: 'Her', image: '/assets/sfic60.jpg' }, // Renamed to avoid ID collision
  { id: 'the-congress-tech', name: 'The Congress', image: '/assets/sfic66.jpg' }, // Renamed to avoid ID collision
  { id: 'electric-dreams-tech', name: 'Electric Dreams', image: '/assets/sfic70.jpg' }, // Renamed to avoid ID collision
];

const Tech = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="tech-container">
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
      <h1 className="tech-title">⚡ Tech Noir & Futuristic</h1>
      <div className="tech-grid">
        {techTitles.map((item) => (
          <div
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="tech-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
          >
            <img src={item.image} alt={item.name} className="tech-image" />
            <div className="tech-overlay">
              <h2 className="tech-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;