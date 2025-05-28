import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Genetic.scss';

const geneticTitles = [
 
  { id: 'gattaca', name: 'Gattaca', image: '/assets/sfic41.jpg' },
  { id: 'splice', name: 'Splice', image: '/assets/sfic42.jpg' },
  { id: 'the-island', name: 'The Island', image: '/assets/sfic43.jpg' },
  { id: 'lucy', name: 'Lucy', image: '/assets/sfic44.jpg' },
  { id: 'akira-genetic', name: 'Akira', image: '/assets/sfic45.jpg' }, 
  { id: 'jurassic-park', name: 'Jurassic Park', image: '/assets/sfic46.jpg' },
  { id: 'the-fly', name: 'The Fly', image: '/assets/sfic47.jpg' },
  { id: 'blade-runner-2049-genetic', name: 'Blade Runner 2049', image: '/assets/sfic48.jpg' }, 
];

const Genetic = () => {
  const navigate = useNavigate();

 
  const handleImageClick = (movieId) => {

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
            key={item.id} 
            className="genetic-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
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