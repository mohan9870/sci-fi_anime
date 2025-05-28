import React, { useState, useRef, useEffect } from 'react';
import './PlayerControls.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faUndo, faEye, faClosedCaptioning, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPlay, faPause, faForward, faUndo, faEye, faClosedCaptioning, faCaretUp, faCaretDown);

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
  onSubtitleLanguageChange,
  currentSubtitleLanguage,
  availableSubtitleLanguages = [
    { code: 'off', label: 'Off' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
  ],
  quality,
  onQualityChange,
  qualityOptions = ['1080p', '720p', '480p', '360p'],
  onSeek
}) => {
  const [showSubtitleLanguages, setShowSubtitleLanguages] = useState(false);
  const subtitleButtonRef = useRef(null);
  const hudOverlayRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({});

  const handleToggleSubtitlesDropdown = () => {
    setShowSubtitleLanguages(prev => !prev);
  };

  useEffect(() => {
    if (showSubtitleLanguages && subtitleButtonRef.current && hudOverlayRef.current) {
      const buttonRect = subtitleButtonRef.current.getBoundingClientRect();
      const hudOverlayRect = hudOverlayRef.current.getBoundingClientRect();

      const bottomOffsetFromOverlay = (hudOverlayRect.bottom - buttonRect.bottom) + buttonRect.height + 15;

      const rightOffsetFromOverlay = hudOverlayRect.right - buttonRect.right;

      setDropdownPosition({
        bottom: `${bottomOffsetFromOverlay}px`,
        right: `${rightOffsetFromOverlay}px`,
      });
    }
  }, [showSubtitleLanguages, availableSubtitleLanguages]);

  const handleSubtitleLanguageSelect = (languageCode) => {
    onSubtitleLanguageChange(languageCode);
    setShowSubtitleLanguages(false);
  };

  const subtitleButtonText = currentSubtitleLanguage === 'off'
    ? 'Subtitles'
    : availableSubtitleLanguages.find(lang => lang.code === currentSubtitleLanguage)?.label || 'Subtitles';

  return (
    <div className="hud-overlay" ref={hudOverlayRef}>

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

      <div className="hud-section hud-bottom-center">
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
      </div>

      <div className="hud-section hud-bottom-right subtitles-quality">
        <div className="hud-button-group">
          <button
            ref={subtitleButtonRef}
            className={`hud-button ${currentSubtitleLanguage !== 'off' || showSubtitleLanguages ? 'active' : ''}`}
            onClick={handleToggleSubtitlesDropdown}
            title="Toggle Subtitles"
          >
            <FontAwesomeIcon icon="closed-captioning" />
            <span className="button-text">{subtitleButtonText}</span>
            <FontAwesomeIcon icon={showSubtitleLanguages ? 'caret-up' : 'caret-down'} className="dropdown-icon" />
          </button>
        </div>

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

      {showSubtitleLanguages && (
        <div
          className="subtitle-language-dropdown-global"
          style={dropdownPosition}
        >
          {availableSubtitleLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`hud-dropdown-item ${currentSubtitleLanguage === lang.code ? 'selected' : ''}`}
              onClick={() => handleSubtitleLanguageSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerControls;