import React, { useState } from 'react';
import { Howl } from 'howler';
import './TimelineVisualization.scss';

const episodes = [
  {
    id: 1,
    title: "Episode 1: Awakening",
    type: "memory",
    videoUrl: "/videos/episode1.mp4.mp4",
    tag: "Temporal Shift",
    description: "Cybernetic memory initialization. Discover the genesis of consciousness within the data stream.",
    upgrades: ["Neural Link Activated", "AI Sync 20%"]
  },
  {
    id: 2,
    title: "Episode 2: Sync Core",
    type: "upgrade",
    videoUrl: "/videos/episode2.mp4",
    tag: "System Breach",
    description: "AI sync upgrade with breach anomaly. Navigate the fractured realities caused by temporal displacement.",
    upgrades: ["AI Sync 42%", "Time Modulator Engaged"]
  },
  {
    id: 3,
    title: "Episode 3: Golden Spire",
    type: "moment",
    videoUrl: "/videos/episode3.mp4",
    tag: "Galactic Event",
    description: "Temporal distortion detected. Witness a critical cosmic alignment that reshapes reality.",
    upgrades: ["Reality Thread Split"]
  },
  {
    id: 4,
    title: "Episode 4: Data Nexus",
    type: "memory",
    videoUrl: "/videos/episode4.mp4",
    tag: "Temporal Shift",
    description: "Accessing fragmented archives. Uncover lost echoes within the digital subconscious.",
    upgrades: ["Memory Reconstruction", "Sub-routine Unlocked"]
  },
  {
    id: 5,
    title: "Episode 5: Chronal Flux",
    type: "upgrade",
    videoUrl: "/videos/episode5.mp4",
    tag: "Time Alteration",
    description: "Enhancing temporal manipulation. Gain control over the very fabric of time.",
    upgrades: ["Temporal Rewind", "Dimensional Anchor"]
  }
];

const sounds = {
  'Temporal Shift': new Howl({ src: ['/sounds/temporal_shift.mp3'], volume: 0.7, preload: true }),
  'System Breach': new Howl({ src: ['/sounds/system_breach.mp3'], volume: 0.8, preload: true }),
  'Galactic Event': new Howl({ src: ['/sounds/galactic_event.mp3'], volume: 0.75, preload: true }),
  'Time Alteration': new Howl({ src: ['/sounds/time_alteration.mp3'], volume: 0.7, preload: true }),
  'memory': new Howl({ src: ['/sounds/unlock_chime.mp3'], volume: 0.5, preload: true }),
  'upgrade': new Howl({ src: ['/sounds/upgrade_sound.mp3'], volume: 0.6, preload: true }),
  'moment': new Howl({ src: ['/sounds/event_ping.mp3'], volume: 0.4, preload: true }),
};

const TimelinePlayer = () => {
  const [unlockedEpisode, setUnlockedEpisode] = useState(null);

  const handleEpisodeClick = (ep) => {
    setUnlockedEpisode(ep);
    const soundToPlay = sounds[ep.tag] || sounds[ep.type];
    soundToPlay?.play();
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">🧬 Tech Timeline: Evolution Nodes</h2>

      <div className="timeline-genetic-strand-wrapper">
        {/* REMOVED: <div className="genetic-strand-line"></div> */}
        <div className="episode-nodes-container">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className={`timeline-node ${ep.type} ${ep.tag ? `tag-${ep.tag.replace(/\s/g, '-').toLowerCase()}` : ''} ${unlockedEpisode?.id === ep.id ? 'active' : ''}`}
              onClick={() => handleEpisodeClick(ep)}
            >
              <div className="node-icon" />
              <span className="node-title">{ep.title}</span>
              {ep.tag && <span className="tag">{ep.tag}</span>}
            </div>
          ))}
        </div>
      </div>

      {unlockedEpisode ? (
        <div className="video-panel">
          <h3>{unlockedEpisode.title}</h3>
          <p className="desc">{unlockedEpisode.description}</p>
          <ul className="upgrades">
            {unlockedEpisode.upgrades.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <video key={unlockedEpisode.id} controls autoPlay muted>
            <source src={unlockedEpisode.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="video-panel"><p>Select an Evolution Node to unlock an episode.</p></div>
      )}
    </div>
  );
};

export default TimelinePlayer;