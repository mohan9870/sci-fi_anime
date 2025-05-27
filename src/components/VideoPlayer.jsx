import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaArrowLeft } from 'react-icons/fa'; // Import FaArrowLeft

function VideoPlayer({ videoRef, isPlaying, src }) {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Ensure not muted
      videoRef.current.volume = 1;    // Set max volume
    }
  }, [videoRef]);

  return (
    <div style={{ position: 'relative', width: '100%' }}> {/* Wrapper for positioning */}
      <video
        ref={videoRef}
        src={src}
        style={{ width: '100%', borderRadius: '8px' }}
        controls
        autoPlay={false}
      />
      {/* Left Arrow Button positioned inside the video player's area */}
      <button
        style={{
          position: 'absolute', // Position relative to the parent div
          top: '20px',
          left: '20px',
          marginTop:'30px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          border: 'none',
          borderRadius: '50%', // Make it round
          padding: '10px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '1.5em',
          zIndex: 10, // Ensure it's above the video but below controls
        }}
        onClick={() => navigate('/neural')}
        aria-label="Go to Neural page"
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}

export default VideoPlayer;