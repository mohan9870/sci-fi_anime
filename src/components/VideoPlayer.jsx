import React, { useEffect } from 'react';

function VideoPlayer({ videoRef, isPlaying, src }) {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;  // Ensure not muted
      videoRef.current.volume = 1;     // Set max volume
    }
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      src={src}
      style={{ width: '100%', borderRadius: '8px' }}
      controls
      autoPlay={false}
    />
  );
}

export default VideoPlayer;
