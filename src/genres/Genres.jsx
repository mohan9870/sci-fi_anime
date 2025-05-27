import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Genres.scss';

const genres = [
  { name: 'Space Odyssey', image: '/assets/space_odyssey.jpg', path: '/spa' },
  { name: 'Alien Encounters', image: '/assets/alien_encounters.jpg', path: '/alien' },
  { name: 'Rise of the Machines', image: '/assets/rise_machines.jpg', path: '/rise' },
  { name: 'Time Travel & Paradox', image: '/assets/time_travel.jpg', path: '/time' },
  { name: 'Galactic Empires', image: '/assets/galactic_empires.jpg', path: '/galactic' },
  { name: 'Genetic Experiments', image: '/assets/genetic_experiments.jpg', path: '/genetic' },
  { name: 'Mind & Reality', image: '/assets/mohan.jpg', path: '/mind' },
  { name: 'Dystopian Futures', image: '/assets/dystopian_futures.jpg', path: '/distopian' },
  { name: 'Tech Noir', image: '/assets/tech_noir.jpg', path: '/tech' },
  { name: 'Futuristic Predictions', image: '/assets/futuristic_predictions.jpg', path: '/futuristic' },
  { name: 'Space Westerns', image: '/assets/space_westerns.jpg', path: '/spacew' },
  { name: 'Post-Apocalyptic Survival', image: '/assets/post_apocalyptic.jpg', path: '/post' },
];

const Genres = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="genres-container">
      <h1 className="genres-title">Genre Nexus</h1>
      <div className="genres-grid">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="genre-card"
            tabIndex={0}
            role="button"
            aria-label={`Initiate ${genre.name} mission`}
            onClick={() => handleClick(genre.path)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick(genre.path);
              }
            }}
          >
            <img src={genre.image} alt={genre.name} className="genre-image" />
            <div className="genre-overlay">
              <h2 className="genre-name">{genre.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
