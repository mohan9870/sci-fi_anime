import React from 'react';
import './PlayerControls.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const PlayerControls = ({
  currentTime,
  duration,
  isPlaying,
  onTogglePlay,
  onQuantumSkip,
  onTemporalReplay,
  onToggleDataScan,
  isDataScanning,
  subtitlesEnabled,
  onToggleSubtitles,
  quality,
  onQualityChange,
  qualityOptions = ['1080p', '720p', '480p', '360p'],
  onSeek // new prop to handle progress bar seeking
}) => {
  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    if(onSeek) onSeek(newTime);
  };

  return (
    <div className="hud-overlay">

      {/* Top-left: System Status Panel */}
      <div className="hud-section hud-top-left">
        <div className="hud-info">
          <span className="label">SYS STATUS:</span> <span className="value status-ok">ONLINE</span>
        </div>
        <div className="hud-info">
          <span className="label">FRAME RATE:</span> <span className="value">60 FPS</span>
        </div>
        <div className="hud-info">
          <span className="label">POWER:</span> <span className="value">98%</span>
        </div>
      </div>

      {/* Top-right: Mission Data Panel */}
      <div className="hud-section hud-top-right">
        <div className="hud-info">
          <span className="label">MISSION:</span> <span className="value">PROJECT AURORA</span>
        </div>
        <div className="hud-info">
          <span className="label">TARGET:</span> <span className="value">ALPHA CENTAURI IV</span>
        </div>
        <div className="hud-info">
          <span className="label">STATUS:</span> <span className="value status-ok">NOMINAL</span>
        </div>
      </div>

      {/* Progress Bar */}
      

      {/* Bottom-left: Player Control Buttons */}
      <div className="hud-section hud-bottom-left player-controls">
        <button className="hud-button" onClick={onTogglePlay} title={isPlaying ? 'Pause' : 'Play'}>
          <FontAwesomeIcon icon={isPlaying ? 'pause' : 'play'} />
          <span className="button-text">{isPlaying ? 'Pause' : 'Play'}</span>
        </button>

        <button className="hud-button" onClick={onQuantumSkip} title="Quantum Skip">
          <FontAwesomeIcon icon="forward" />
          <span className="button-text">Quantum Skip</span>
        </button>

        <button className="hud-button" onClick={onTemporalReplay} title="Temporal Replay">
          <FontAwesomeIcon icon="undo" />
          <span className="button-text">Temporal Replay</span>
        </button>

        <button
          className={`hud-button ${isDataScanning ? 'active' : ''}`}
          onClick={onToggleDataScan}
          title="Toggle Data Scan"
        >
          <FontAwesomeIcon icon="eye" />
          <span className="button-text">Data Scan</span>
        </button>

        {/* Time Display */}
       <div className="hud-info time-display">
            <span className="time-text">{formatTime(currentTime)}</span>

            <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => onSeek(Number(e.target.value))}
                className="progress-slider"
                step="0.1"
                aria-label="Video progress bar"
            />

            <span className="time-text">{formatTime(duration)}</span>
            </div>

      </div>

      {/* Bottom-right: Subtitles and Quality Selector */}
      <div className="hud-section hud-bottom-right subtitles-quality">
        <button
          className={`hud-button ${subtitlesEnabled ? 'active' : ''}`}
          onClick={onToggleSubtitles}
          title="Toggle Subtitles"
        >
          <FontAwesomeIcon icon="closed-captioning" />
          <span className="button-text">Subtitles</span>
        </button>

        <select
          className="quality-select"
          value={quality}
          onChange={(e) => onQualityChange(e.target.value)}
          title="Select Quality"
        >
          {qualityOptions.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PlayerControls;
