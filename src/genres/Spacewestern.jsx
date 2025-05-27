import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpaceWestern.scss';
import { ArrowLeft } from 'lucide-react'; // Optional: install lucide-react or use another icon

const spaceWesterns = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
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

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="spacewestern-container">
      <div className="spacewestern-header">
        <button
          className="back-button"
          onClick={() => navigate('/genres')}
          tabIndex={0} // Ensure button is tabbable for accessibility
          role="button" // Explicitly define role for button
          aria-label="Go back to genres"
          onKeyDown={(e) => { // Added onKeyDown for keyboard accessibility
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
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="spacewestern-card"
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
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