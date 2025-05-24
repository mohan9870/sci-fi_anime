import React from 'react';
import { allmoviesdata } from '../data/allmoviesdata';
import MovieCard from './MovieCard';

const MoviesAll = ({ query }) => {
  return (
    <div className='allmovies'>
      {allmoviesdata.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
    </div>
  );
};

export default MoviesAll;
