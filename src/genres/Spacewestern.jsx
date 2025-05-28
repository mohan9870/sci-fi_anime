import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpaceWestern.scss';
import { ArrowLeft } from 'lucide-react'; 

const spaceWesterns = [
  
  { id: 'the-mandalorian', name: 'The Mandalorian', image: '/assets/genre1.jpg' },
  { id: 'cowboy-bebop', name: 'Cowboy Bebop', image: '/assets/genre2.jpg' },
  { id: 'firefly', name: 'Firefly', image: '/assets/genre3.jpg' },
  { id: 'outland', name: 'Outland', image: '/assets/genre4.jpg' },
  { id: 'prospect', name: 'Prospect', image: '/assets/genre5.jpg' },
  { id: 'trigun', name: 'Trigun', image: '/assets/genre6.jpg' },
  { id: 'starhunter', name: 'Starhunter', image: '/assets/genre7.jpg' },
  { id: 'killjoys', name: 'Killjoys', image: '/assets/sfic8.jpg' },
];

const SpaceWestern = () => {
  const navigate = useNavigate();

  
  const handleImageClick = (movieId) => {
   
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="spacewestern-container">
      <div className="spacewestern-header">
        <button
          className="back-button"
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
          <ArrowLeft size={24} />
        </button>
        <h1 className="spacewestern-title">🛰️ Space Westerns</h1>
      </div>

      <div className="spacewestern-grid">
        {spaceWesterns.map((item) => (
          <div
            key={item.id} 
            className="spacewestern-card"
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`}
          >
            <img src={item.image} alt={item.name} className="spacewestern-image" />
            <div className="spacewestern-overlay">
              <h2 className="spacewestern-name">{item.name}</h2>
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceWestern;