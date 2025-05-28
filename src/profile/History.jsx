import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaTrash, FaTimes, FaRedo } from "react-icons/fa";
import { Button } from "@mui/material";
import "./History.scss";
import { useNavigate } from "react-router-dom";

const defaultEpisodes = [
  {
    id: 1,
    title: "Demon Slayer",
    image: "/assets/img2.webp",
    details: "2 Episodes",
    quality: "720P",
    downloading: false,
    lastWatched: "2 days ago",
  },
  {
    id: 2,
    title: "Otakul Harbor",
    image: "/assets/otakulharbor.jpg",
    details: "102 Episodes",
    quality: "4k",
    downloading: false,
    lastWatched: "1 day ago",
  },
  {
    id: 3,
    title: "The End Of Evangelion",
    image: "/assets/evangelion-5.avif",
    details: "107 Mins",
    quality: "720P",
    downloading: true,
    lastWatched: "Just now",
  },
];

const History = () => {
  const [episodes, setEpisodes] = useState(defaultEpisodes);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showClearModal, setShowClearModal] = useState(false);
  const menuRef = useRef();
  const modalRef = useRef();
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowClearModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setShowClearModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleAction = (id, action) => {
    if (action === "delete") {
      setEpisodes((prev) => prev.filter((ep) => ep.id !== id));
    } else if (action === "resume" || action === "cancel") {
      setEpisodes((prev) =>
        prev.map((ep) =>
          ep.id === id ? { ...ep, downloading: !ep.downloading } : ep
        )
      );
    }
    setActiveMenu(null);
  };

  const confirmClearAll = () => {
    setEpisodes([]);
    setShowClearModal(false);
  };

  const handleDeleteImage = (id, e) => {
    e.stopPropagation();
    setEpisodes((prev) => prev.filter((ep) => ep.id !== id));
  };

  return (
    <div className="history-screen">
      <div className="history-header">
        <h1>Recently Viewed</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
          className="back-button"
        >
          Back
        </Button>
      </div>

      <div className="history-content">
        {episodes.length === 0 ? (
          <div className="empty-state">
            <img src="/assets/images/empty-history.svg" alt="No history" />
            <h3>No Watch History</h3>
            <p>Your watched shows and movies will appear here</p>
          </div>
        ) : (
          <>
            <div className="history-list">
              {episodes.map((episode) => (
                <div
                  key={episode.id}
                  className={`history-item ${
                    episode.downloading ? "downloading" : ""
                  }`}
                >
                  <div className="item-poster">
                    <div className="image-container">
                      <img src={episode.image} alt={episode.title} />
                      <button
                        className="delete-image-button"
                        onClick={(e) => handleDeleteImage(episode.id, e)}
                        aria-label="Delete episode"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    {episode.downloading && (
                      <div className="downloading-badge">
                        <span>Watching</span>
                      </div>
                    )}
                    <button
                      className="play-button"
                      onClick={() => navigate("/video")}
                      aria-label="Play video"
                    >
                      <FaPlay />
                    </button>
                  </div>

                  <div className="item-details">
                    <h3>{episode.title}</h3>
                    <div className="meta-info">
                      <span>{episode.details}</span>
                      <span className="quality">{episode.quality}</span>
                      <span className="time">{episode.lastWatched}</span>
                    </div>
                  </div>

                  <div className="item-actions">
                    {activeMenu === episode.id && (
                      <div className="action-menu" ref={menuRef}>
                        <button
                          onClick={() => handleAction(episode.id, "resume")}
                        >
                          <FaRedo /> {episode.downloading ? "Cancel" : "Resume"}
                        </button>
                        <button
                          onClick={() => handleAction(episode.id, "delete")}
                        >
                          <FaTrash /> Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="clear-all-button"
              onClick={() => setShowClearModal(true)}
            >
              Clear All History
            </button>
          </>
        )}
      </div>

      {showClearModal && (
        <div className="modal-overlay">
          <div className="confirmation-modal enhanced" ref={modalRef}>
            <div className="modal-header">
              <h2>Clear Watch History</h2>
              <button
                className="modal-close"
                onClick={() => setShowClearModal(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-message">
                Are you sure you want to remove all history items?
              </p>
              <p className="modal-subtext">This action cannot be undone.</p>
            </div>

            <div className="modal-footer">
              <button
                className="modal-button cancel"
                onClick={() => setShowClearModal(false)}
              >
                Cancel
              </button>
              <button
                className="modal-button confirm"
                onClick={confirmClearAll}
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
