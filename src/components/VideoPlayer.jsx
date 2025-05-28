import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

function VideoPlayer({ videoRef, isPlaying, src }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false; 
      videoRef.current.volume = 1;   
    }
  }, [videoRef]);

  return (
    <div style={{ position: 'relative', width: '100%' }}> 
      <video
        ref={videoRef}
        src={src}
        style={{ width: '100%', borderRadius: '8px' }}
        controls
        autoPlay={false}
      />
     
      <button
        style={{
          position: 'absolute', 
          top: '20px',
          left: '20px',
          marginTop:'30px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: 'none',
          borderRadius: '50%', 
          padding: '10px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '1.5em',
          zIndex: 10, 
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