import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './MissionControlUI.scss';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Ensure FaArrowLeft is imported

// Mission data
const missions = [
  {
    id: 1,
    title: "Operation: Chrono-Trigger",
    status: "unlocked", // Can be 'locked', 'unlocked', 'completed'
    type: "expedition", // Corresponds to "Mission Nodes"
    videoUrl: "/videos/episode1.mp4",
    tag: "Temporal Anomaly", // Critical tag
    description: "Initiate temporal distortion sequence. Navigate the fractured realities to retrieve lost data fragments.",
    upgrades: ["Neural Link Activated", "AI Sync 20%"],
    sectors: 5,
    logs: 3,
  },
  {
    id: 2,
    title: "Expedition: Echo Nexus",
    status: "unlocked",
    type: "mission", // Another type for differentiation
    videoUrl: "/videos/episode2.mp4",
    tag: "System Breach", // Critical tag
    description: "Infiltrate the compromised Echo Nexus. Secure critical AI core data before system collapse.",
    upgrades: ["AI Sync 42%", "Time Modulator Engaged"],
    sectors: 7,
    logs: 5,
  },
  {
    id: 3,
    title: "Recon: Golden Spire",
    status: "unlocked",
    type: "recon",
    videoUrl: "/videos/episode3.mp4",
    tag: "Galactic Event",
    description: "Observe the cosmic alignment at the Golden Spire. Analyze the reality thread split for future countermeasures.",
    upgrades: ["Reality Thread Split"],
    sectors: 4,
    logs: 2,
  },
  {
    id: 4,
    title: "Deep Dive: Data Stream",
    status: "unlocked",
    type: "expedition",
    videoUrl: "/videos/episode4.mp4",
    tag: "Temporal Anomaly",
    description: "Access fragmented archives within the deep data stream. Uncover lost echoes and forgotten protocols.",
    upgrades: ["Memory Reconstruction", "Sub-routine Unlocked"],
    sectors: 6,
    logs: 4,
  },
  {
    id: 5,
    title: "Directive: Chronal Flux",
    status: "unlocked",
    type: "mission",
    videoUrl: "/videos/episode5.mp4",
    tag: "Time Alteration",
    description: "Enhance temporal manipulation capabilities. Gain control over the very fabric of time to avert catastrophe.",
    upgrades: ["Temporal Rewind", "Dimensional Anchor"],
    sectors: 8,
    logs: 6,
  }
];

// Load sounds for types and specific tags
const sounds = {
  'Temporal Anomaly': new Howl({ src: ['/sounds/temporal_shift.mp3.wav'], volume: 0.7, preload: true }),
  'System Breach': new Howl({ src: ['/sounds/system_breach.mp3.wav'], volume: 0.8, preload: true }),
  'Galactic Event': new Howl({ src: ['/sounds/galactic_event.mp3.wav'], volume: 0.75, preload: true }),
  'Time Alteration': new Howl({ src: ['/sounds/time_alteration.mp3.wav'], volume: 0.7, preload: true }),
  'expedition': new Howl({ src: ['/sounds/unlock_chime.mp3.wav'], volume: 0.5, preload: true }),
  'mission': new Howl({ src: ['/sounds/upgrade_sound.mp3.wav'], volume: 0.6, preload: true }),
  'recon': new Howl({ src: ['/sounds/event_ping.mp3.wav'], volume: 0.4, preload: true }),
  'mission_completed': new Howl({ src: ['/sounds/mission_complete.mp3.wav'], volume: 0.9, preload: true }),
  'error_locked': new Howl({ src: ['/sounds/error_locked.mp3.wav'], volume: 0.7, preload: true }),
};

const MissionControlUI = () => {
  const [currentMission, setCurrentMission] = useState(null);
  const navigate = useNavigate();

  const [missionProgress, setMissionProgress] = useState(
    missions.reduce((acc, mission) => {
      acc[mission.id] = {
        sectorsCompleted: 0,
        logsUnlocked: 0,
        completed: mission.status === 'completed',
      };
      return acc;
    }, {})
  );

  const handleCompleteSector = (missionId) => {
    setMissionProgress(prevProgress => {
      const newProgress = { ...prevProgress };
      const mission = missions.find(m => m.id === missionId);

      if (newProgress[missionId].sectorsCompleted < mission.sectors) {
        newProgress[missionId].sectorsCompleted += 1;
        if (newProgress[missionId].sectorsCompleted % 2 === 0 && newProgress[missionId].logsUnlocked < mission.logs) {
          newProgress[missionId].logsUnlocked += 1;
        }
      }

      if (newProgress[missionId].sectorsCompleted === mission.sectors && !newProgress[missionId].completed) {
        newProgress[missionId].completed = true;
        sounds.mission_completed?.play();
      }
      return newProgress;
    });
  };

  const handleMissionSelect = (mission) => {
    if (mission.status === 'locked') {
      sounds.error_locked?.play();
      console.log(`Mission ${mission.title} is locked.`);
      return;
    }
    setCurrentMission(mission);
    const soundToPlay = sounds[mission.tag] || sounds[mission.type];
    soundToPlay?.play();
  };

  return (
    <div className="mission-control-container">
      <div className="background-overlay"></div>
      <h1 className="main-title">
        <span className="glitch" data-text="MISSION CONTROL">MISSION CONTROL</span>
      </h1>

      {/* Left Arrow Button positioned at the top left */}
      <button
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px', // Positioned on the left
          marginTop:'48px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#00f0ff',
          cursor: 'pointer',
          fontSize: '2em',
          zIndex: 1000,
        }}
        onClick={() => navigate('/mylist')} // Navigates to /mylist
        aria-label="Go to My List page"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow Button positioned at the top right */}
      <button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
           marginTop:'48px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#00f0ff',
          cursor: 'pointer',
          fontSize: '2em',
          zIndex: 1000,
        }}
        onClick={() => navigate('/timeline')}
        aria-label="Go to Timeline page"
      >
        <FaArrowRight />
      </button>

      <div className="mission-dashboard-panel hologram-panel">
        <h2>Mission Dashboard</h2>
        <div className="dashboard-grid">
          {missions.map(mission => (
            <div key={mission.id} className={`dashboard-item ${missionProgress[mission.id]?.completed ? 'completed' : ''}`}>
              <span className="mission-title">{mission.title}</span>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${(missionProgress[mission.id]?.sectorsCompleted / mission.sectors) * 100}%` }}
                ></div>
              </div>
              <span className="progress-text">
                Sectors: {missionProgress[mission.id]?.sectorsCompleted || 0}/{mission.sectors} | Logs: {missionProgress[mission.id]?.logsUnlocked || 0}/{mission.logs}
              </span>
              {!missionProgress[mission.id]?.completed && (
                <span className="dashboard-lock-icon">🔒</span>
              )}
              {missionProgress[mission.id]?.completed && <span className="status-badge">COMPLETED</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="mission-selection-grid">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`mission-node ${mission.type} ${mission.tag ? `tag-${mission.tag.replace(/\s/g, '-').toLowerCase()}` : ''} ${currentMission?.id === mission.id ? 'active' : ''} ${mission.status}`}
            onClick={() => handleMissionSelect(mission)}
          >
            <div className="node-icon" />
            <span className="node-title">{mission.title}</span>
            {mission.status === 'locked' && <span className="lock-icon">🔒</span>}
            {mission.tag && <span className="tag">{mission.tag}</span>}
            <div className="light-trail"></div>
          </div>
        ))}
      </div>

      {currentMission ? (
        <div className="mission-detail-panel hologram-panel">
          <h3 className="detail-title">{currentMission.title}</h3>
          <p className="detail-description">{currentMission.description}</p>
          <ul className="upgrades-list">
            {currentMission.upgrades.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <video key={currentMission.id} controls autoPlay muted className="mission-video">
            <source src={currentMission.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="action-button"
            onClick={() => handleCompleteSector(currentMission.id)}
            disabled={missionProgress[currentMission.id]?.completed}
          >
            {missionProgress[currentMission.id]?.completed ? 'Mission Completed' : `Complete Sector ${missionProgress[currentMission.id]?.sectorsCompleted + 1 || 1}`}
          </button>
        </div>
      ) : (
        <div className="mission-detail-panel hologram-panel">
          <p className="select-message">Select a mission to begin operations.</p>
        </div>
      )}
    </div>
  );
};

export default MissionControlUI;