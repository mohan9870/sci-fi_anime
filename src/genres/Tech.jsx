import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tech.scss';

const techTitles = [
 
  { id: 'blade-runner-tech', name: 'Blade Runner', image: '/assets/sfic11.jpg' }, 
  { id: 'minority-report', name: 'Minority Report', image: '/assets/sfic22.jpg' },
  { id: 'ghost-in-the-shell-tech', name: 'Ghost in the Shell', image: '/assets/sfic34.jpg' },
  { id: 'altered-carbon', name: 'Altered Carbon', image: '/assets/sfic45.jpg' },
  { id: 'upgrade-tech', name: 'Upgrade', image: '/assets/sfic51.jpg' }, 
  { id: 'her-tech', name: 'Her', image: '/assets/sfic60.jpg' }, 
  { id: 'the-congress-tech', name: 'The Congress', image: '/assets/sfic66.jpg' }, 
  { id: 'electric-dreams-tech', name: 'Electric Dreams', image: '/assets/sfic70.jpg' },
];

const Tech = () => {
  const navigate = useNavigate();

  
  const handleImageClick = (movieId) => {

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
            key={item.id} 
            className="tech-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} 
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