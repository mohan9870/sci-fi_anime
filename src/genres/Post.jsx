import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mind.scss'; // Reusing Mind.scss for styling

const postApocalypticTitles = [
  // IMPORTANT: Added unique 'id' for each movie.
  // These 'id's should ideally match the keys in your `allVideoSources` object
  // within your VideoPlayer.js component.
  { id: 'mad-max-fury-road', name: 'Mad Max: Fury Road', image: '/assets/sfic57.jpg' },
  { id: 'the-book-of-eli', name: 'The Book of Eli', image: '/assets/sfic58.jpg' },
  { id: 'a-quiet-place', name: 'A Quiet Place', image: '/assets/sfic59.jpg' },
  { id: 'i-am-legend', name: 'I Am Legend', image: '/assets/sfic60.jpg' },
  { id: 'the-road', name: 'The Road', image: '/assets/sfic61.jpg' },
  { id: 'snowpiercer-post', name: 'Snowpiercer', image: '/assets/sfic62.jpg' }, // Renamed to avoid ID collision if "Snowpiercer" exists elsewhere
  { id: 'the-walking-dead', name: 'The Walking Dead', image: '/assets/sfic63.jpg' },
  { id: 'the-100', name: 'The 100', image: '/assets/sfic64.jpg' },
];

const Post = () => {
  const navigate = useNavigate();

  // Function to handle image click and navigate to YOUR internal video page
  const handleImageClick = (movieId) => {
    // Navigate to '/video' and pass the movieId in the 'state' object
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="mind-container"> {/* Using mind-container as per your original code */}
      <div
        className="back-arrow"
        onClick={() => navigate('/genres')}
        tabIndex={0}
        role="button"
        aria-label="Go back to genres"
        // Note: You removed the onKeyDown for this component in your prompt,
        // but it's good for accessibility if you want to add it back.
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter' || e.key === ' ') navigate('/genres');
        // }}
      >
        ←
      </div>
      <h1 className="mind-title">🌐 Post-Apocalyptic Survival</h1> {/* Using mind-title as per your original code */}
      <div className="mind-grid"> {/* Using mind-grid as per your original code */}
        {postApocalypticTitles.map((item) => (
          <div
            key={item.id} // **KEY CHANGE**: Use item.id as the key for better React performance and stability
            className="mind-card" // Using mind-card as per your original code
            onClick={() => handleImageClick(item.id)} // **KEY CHANGE**: Call handleImageClick with item.id
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} // Updated aria-label for clarity
          >
            <img src={item.image} alt={item.name} className="mind-image" /> {/* Using mind-image */}
            <div className="mind-overlay">
              <h2 className="mind-name">{item.name}</h2> {/* Using mind-name */}
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;