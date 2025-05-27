import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMyList } from '../context/MyListContext';
import { FaPlay, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Mylist.scss';

const MyList = () => {
  const { myList, removeFromList } = useMyList();
  const navigate = useNavigate();

  return (
    <div className="mylist-container">
      {/* Title bar with nav buttons */}
      <div className="mylist-header">
        <button className="nav-button left" onClick={() => navigate('/home')}>
          <FaArrowLeft />
        </button>

        <h1 className="mylist-title">My List</h1>

        <button className="nav-button right" onClick={() => navigate('/mission')}>
          <FaArrowRight />
        </button>
      </div>

      <div className="mylist-content">
        {myList.length === 0 ? (
          <p className="mylist-empty">Your list is empty. Add some movies!</p>
        ) : (
          <div className="mylist-grid">
            {myList.map((item) => (
              <div key={item.id} className="mylist-card">
                <img src={item.image} alt={item.title} className="mylist-card-img" />
                <div className="mylist-card-overlay">
                  <h2 className="mylist-card-title">{item.title}</h2>
                  <p className="mylist-card-desc">{item.description}</p>
                  <div className="mylist-card-btns">
                    <button className="mylist-play-btn" onClick={() => navigate('/home')}>
                      <FaPlay /> Play
                    </button>
                    <button className="mylist-remove-btn" onClick={() => removeFromList(item.id)}>
                      <FaTimes /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
