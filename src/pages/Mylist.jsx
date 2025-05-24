  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useMyList } from '../context/MyListContext';
  import { FaPlay, FaTimes } from 'react-icons/fa';
  import './Mylist.scss';


  const MyList = () => {
    const { myList, removeFromList } = useMyList();
    
    const navigate = useNavigate();

    return (
      <>
  
      <div className="mylist-container">
        <div className="mylist-header">
          <h1 className="mylist-title">My List</h1>
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
                      <button
                        className="mylist-play-btn"
                        onClick={() => navigate('/video')}
                      >
                        <FaPlay /> Play
                      </button>
                      <button
                        className="mylist-remove-btn"
                        onClick={() => removeFromList(item.id)}
                      >
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
      
      </>
    );
  };

  export default MyList;