import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mind.scss'; 

const postApocalypticTitles = [
  
  { id: 'mad-max-fury-road', name: 'Mad Max: Fury Road', image: '/assets/sfic57.jpg' },
  { id: 'the-book-of-eli', name: 'The Book of Eli', image: '/assets/sfic58.jpg' },
  { id: 'a-quiet-place', name: 'A Quiet Place', image: '/assets/sfic59.jpg' },
  { id: 'i-am-legend', name: 'I Am Legend', image: '/assets/sfic60.jpg' },
  { id: 'the-road', name: 'The Road', image: '/assets/sfic61.jpg' },
  { id: 'snowpiercer-post', name: 'Snowpiercer', image: '/assets/sfic62.jpg' }, 
  { id: 'the-walking-dead', name: 'The Walking Dead', image: '/assets/sfic63.jpg' },
  { id: 'the-100', name: 'The 100', image: '/assets/sfic64.jpg' },
];

const Post = () => {
  const navigate = useNavigate();


  const handleImageClick = (movieId) => {
    
    navigate('/video', { state: { movieId: movieId } });
  };

  return (
    <div className="mind-container">
      <div
        className="back-arrow"
        onClick={() => navigate('/genres')}
        tabIndex={0}
        role="button"
        aria-label="Go back to genres"
      
      >
        ←
      </div>
      <h1 className="mind-title">🌐 Post-Apocalyptic Survival</h1> 
      <div className="mind-grid">
        {postApocalypticTitles.map((item) => (
          <div
            key={item.id} 
            className="mind-card" 
            onClick={() => handleImageClick(item.id)} 
            tabIndex={0}
            role="button"
            aria-label={`Watch ${item.name} video`} 
          >
            <img src={item.image} alt={item.name} className="mind-image" /> 
            <div className="mind-overlay">
              <h2 className="mind-name">{item.name}</h2> 
              <span className="launch-button">Initiate Mission</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;