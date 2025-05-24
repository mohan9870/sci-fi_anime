import React from 'react';
import './PlayerControls.scss'; // Extensive CSS for HUD elements
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Icons are already added to the library in Video.jsx, so they're available here.

// Helper function to format time into MM:SS
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
    isDataScanning
}) => {
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

            {/* Bottom-left: Player Control Buttons */}
            <div className="hud-section hud-bottom-left player-controls">
                <button className="hud-button" onClick={onTogglePlay}>
                    <FontAwesomeIcon icon={isPlaying ? 'pause' : 'play'} />
                    <span className="button-label">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                </button>
                <button className="hud-button" onClick={onQuantumSkip}>
                    <FontAwesomeIcon icon="forward-fast" />
                    <span className="button-label">QUANTUM SKIP</span>
                </button>
                <button className="hud-button" onClick={onTemporalReplay}>
                    <FontAwesomeIcon icon="clock-rotate-left" />
                    <span className="button-label">TEMPORAL REPLAY</span>
                </button>
                <button className={`hud-button ${isDataScanning ? 'active' : ''}`} onClick={onToggleDataScan}>
                    <FontAwesomeIcon icon="magnifying-glass" />
                    <span className="button-label">DATA SCAN</span>
                </button>
            </div>

            {/* Bottom-right: Time/Playback Info Panel */}
            <div className="hud-section hud-bottom-right playback-info">
                <div className="hud-info time-display">
                    <span className="current-time">{formatTime(currentTime)}</span> / <span className="total-time">{formatTime(duration)}</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>
                </div>
                <div className="hud-info">
                    <span className="label">PLAYBACK:</span> <span className="value">ACTIVE</span>
                </div>
            </div>

            {/* Central elements, crosshairs, dynamic readouts */}
            <div className="hud-center-elements">
                <div className="hud-crosshair"></div>
                {/* Dynamic central readout example */}
                <div className="hud-central-readout">
                    <span className="readout-label">TARGET LOCK:</span>
                    <span className="readout-value">ACQUIRED</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerControls;