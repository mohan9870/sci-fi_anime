import React from 'react';
import './MoviesAll.scss'

const MovieCard = ({ title, image, genre, rating }) => {
  return (
    <div className='cards'>
      <div className='card1'>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p><b>Genre:</b> {genre}</p>
          <p><b>Rating:</b> {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
