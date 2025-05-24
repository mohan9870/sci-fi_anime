import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, LinearProgress, Snackbar } from "@mui/material";
import "./Download.scss";

function Download() {
  const navigate = useNavigate();

  const [isDownloading, setIsDownloading] = useState(true);
  const [downloadedMovies, setDownloadedMovies] = useState([
    {
      id: 1,
      title: "ghost-in-the-shell",
      image: "/assets/ghost-in-the-shell.avif",
      link: "/watch/ghost-in-the-shell",
      progress: 100,
    },
    {
      id: 2,
      title: "Attack on Titan",
      image: "/assets/thumb-1920-937234.jpg",
      link: "/watch/attack-on-titan",
      progress: 100,
    },
  ]);

  const [currentDownload, setCurrentDownload] = useState({
    id: 3,
    title: "war with aliens",
    image: "/assets/war with aliens.webp",
    progress: 45,
    link: "/watch/war with aliens",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Increment progress every 100ms if downloading
  useEffect(() => {
    if (isDownloading) {
      const interval = setInterval(() => {
        setCurrentDownload((prev) => {
          if (prev.progress < 100) {
            return { ...prev, progress: prev.progress + 1 };
          } else {
            // Do not add movie here or stop interval here
            return prev;
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isDownloading]);

  // When currentDownload progress reaches 100, add it to downloaded movies once
  useEffect(() => {
    if (currentDownload.progress >= 100 && isDownloading) {
      setIsDownloading(false);
      setDownloadedMovies((prevList) => [
        ...prevList,
        { ...currentDownload, progress: 100 },
      ]);
      setSnackbarMessage(`${currentDownload.title} Download Completed!`);
      setSnackbarOpen(true);
    }
  }, [currentDownload.progress, isDownloading, currentDownload]);

  const cancelDownload = () => {
    setIsDownloading(false);
    setSnackbarMessage(`${currentDownload.title} Download Canceled!`);
    setSnackbarOpen(true);
  };

  const deleteMovie = (id) => {
    setDownloadedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
    setSnackbarMessage("Movie deleted successfully!");
    setSnackbarOpen(true);
  };

  return (
    <div className="download-page">
      <div className="download-header">
        <h1>My Downloads</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
          className="back-button"
        >
          Back
        </Button>
      </div>

      <div className="download-content">
        {isDownloading && (
          <div className="download-section">
            <h2>Currently Downloading</h2>
            <div className="downloading-item">
              <img
                src={currentDownload.image}
                alt={currentDownload.title}
                className="download-image"
              />
              <div className="download-info">
                <h3>{currentDownload.title}</h3>
                <div className="progress-container">
                  <LinearProgress
                    variant="determinate"
                    value={currentDownload.progress}
                    color="secondary"
                  />
                  <span>{currentDownload.progress}%</span>
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={cancelDownload}
                  className="action-button"
                >
                  Cancel Download
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="download-section">
          <h2>Your Downloaded Movies</h2>
          {downloadedMovies.length > 0 ? (
            <div className="downloaded-list">
              {downloadedMovies.map((movie) => (
                <div key={movie.id} className="downloaded-item">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="download-image"
                  />
                  <div className="download-info">
                    <h3>{movie.title}</h3>
                    <div className="progress-container">
                      <LinearProgress
                        variant="determinate"
                        value={movie.progress}
                        color="success"
                      />
                      <span>Completed</span>
                    </div>
                    <div className="action-buttons">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(movie.link)}
                        className="action-button"
                      >
                        Watch Now
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteMovie(movie.id)}
                        className="action-button"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-message">
              You haven't downloaded any movies yet.
            </p>
          )}
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default Download;
