import React, { useState } from 'react';
import { allmoviesdata } from '../data/allmoviesdata';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { useMyList } from '../context/MyListContext';

import './Movie.scss';

const Movie = () => {
  const recommend = allmoviesdata;
  const navigate = useNavigate();
  const { myList, addToList } = useMyList();

  const handleAddToList = (item) => {
    const isInList = myList.some(listItem => listItem.id === item.id);
    if (!isInList) {
      addToList(item);
      // You can add a simple alert if you want feedback:
      alert(`${item.title} added to My List!`);
    } else {
      alert(`${item.title} is already in your list!`);
    }
  };

  return (
    <div className="recommended">
      <div className="txt">
        <h1>Movies</h1>
        <button
          onClick={() => {
            navigate('/home');
            window.scrollTo(0, 0);
          }}
          className='back-button'
          style={{ cursor: 'pointer' }}
        >
          Back
        </button>
      </div>

      <div className="movies">
        {recommend.map((item) => (
          <div key={item.id} className="movie-card">
            <img
              src={item.image}
              alt={item.title}
              className="movieimg"
            />
            <div className="overlay-content">
              <h2>{item.title}</h2>
              <p className="description">{item.description}</p>
              <div className="btn-group">
                <button
                  className="play-btn"
                  onClick={() => navigate('/video')}
                >
                  <FaPlay /> Play
                </button>
                <button
                  className="add-list-btn"
                  onClick={() => handleAddToList(item)}
                >
                  <FaPlus /> ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
