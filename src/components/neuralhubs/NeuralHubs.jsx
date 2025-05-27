import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import FaArrowLeft

const leaderboardData = [
  { rank: 1, name: "StarNeko", score: 9850, role: "Binge-Watcher" },
  { rank: 2, name: "QuantumKat", score: 9120, role: "Theory Hacker" },
  { rank: 3, name: "MechaOtaku", score: 8750, role: "Top Reviewer" },
  { rank: 4, name: "NebulaNinja", score: 8420, role: "Binge-Watcher" },
  { rank: 5, name: "CyberSamurai", score: 8150, role: "Theory Hacker" },
];

const neuralHubsData = [
  {
    id: "chrono-core",
    name: "Chrono Core",
    theme: "Mecha Lab",
    avatar: "/images/ai-avatar-chrono.png",
    badge: "🕰️ Chrono Core",
    description: "Time-warping theorists & tactical masterminds",
  },
  {
    id: "sector-9",
    name: "Sector 9 Crew",
    theme: "Space Station",
    avatar: "/images/ai-avatar-sector9.png",
    badge: "🚀 Sector 9 Crew",
    description: "Elite explorers and cosmic adventurers",
  },
  {
    id: "alien-archive",
    name: "Alien Archives",
    theme: "Alien Archives",
    avatar: "/images/ai-avatar-alien.png",
    badge: "👾 Alien Archives",
    description: "Collectors of extraterrestrial secrets and lore",
  },
];

export default function SciFiLeaderboardNeuralHubs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sci-fi-container">
        <section className="leaderboard holographic">
          <h2 className="section-title">Top Binge-Watchers & Theory Hackers</h2>
          <ul className="leaderboard-list">
            {leaderboardData.map(({ rank, name, score, role }) => (
              <li key={name} className={`leaderboard-item rank-${rank}`}>
                <div className="rank">{rank}</div>
                <div className="user-info">
                  <span className="username">{name}</span>
                  <span className="role">{role}</span>
                </div>
                <div className="score">{score.toLocaleString()} pts</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="neural-hubs">
          <h2 className="section-title">Neural Network Fandom Hubs</h2>
          <div className="hubs-grid">
            {neuralHubsData.map(({ id, name, theme, avatar, badge, description }) => (
              <div key={id} className={`hub-card theme-${id}`}>
                <div className="avatar-wrapper">
                  <img src={avatar} alt={`${name} AI Assistant`} className="ai-avatar" />
                </div>
                <div className="hub-info">
                  <h3>{name}</h3>
                  <p className="theme">{theme}</p>
                  <p className="description">{description}</p>
                  <span className="badge">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Left Arrow Button positioned at the top left */}
      <button
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px', // Position on the left
          marginTop:'47px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#00f0ff', // A sci-fi blue/cyan color
          cursor: 'pointer',
          fontSize: '2em',
          zIndex: 1000,
        }}
        onClick={() => navigate('/timeline')} // Navigate to /timeline
        aria-label="Go to Timeline page"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow Button positioned at the top right */}
      <button
        style={{
          position: 'fixed', // Use fixed to keep it in view regardless of scroll
          top: '20px',       // 20px from the top
          right: '20px',     // 20px from the right
            marginTop:'47px',
          backgroundColor: 'transparent', // No background color
          border: 'none',    // No border
          color: '#00f0ff',  // Consistent sci-fi blue/cyan
          cursor: 'pointer', // Show pointer on hover
          fontSize: '2em',   // Adjust icon size
          zIndex: 1000,      // Ensure it's above other content
        }}
        onClick={() => navigate('/video')} // Corrected this to '/video' as per the previous logic
        aria-label="Go to Video page" // Updated aria-label
      >
        <FaArrowRight />
      </button>

      <style jsx>{`
        :root {
          --sci-fi-blue: #00f0ff;
          --sci-fi-pink: #ff33cc;
          --sci-fi-purple: #9b59b6;
          --sci-fi-cyan: #00ffff;
        }

        .sci-fi-container {
          font-family: "Orbitron", sans-serif;
          color: var(--sci-fi-cyan);
          background: linear-gradient(135deg, #0a0a15 0%, #121225 100%);
          padding: 2rem;
          min-height: 100vh;
        }

        /* ===== Holographic Leaderboard ===== */
        .leaderboard {
          max-width: 700px;
          margin: 0 auto 3rem auto;
          padding: 1.5rem 2rem;
          background: rgba(0, 255, 255, 0.1);
          border: 2px solid var(--sci-fi-cyan);
          border-radius: 15px;
          box-shadow: 0 0 8px var(--sci-fi-cyan), 0 0 15px var(--sci-fi-blue);
          backdrop-filter: blur(12px);
        }

        .leaderboard .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--sci-fi-pink);
          text-shadow: 0 0 10px var(--sci-fi-pink);
        }

        .leaderboard-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          margin-bottom: 0.75rem;
          border-radius: 10px;
          background: rgba(0, 255, 255, 0.15);
          box-shadow: inset 0 0 5px #00ffffaa;
          transition: background 0.3s ease;
        }

        .leaderboard-item.rank-1 {
          background: linear-gradient(90deg, #ff00cc, #6600ff);
          box-shadow: 0 0 15px var(--sci-fi-pink);
          font-weight: 700;
        }

        .leaderboard-item.rank-2 {
          background: linear-gradient(90deg, #33ccff, #0066ff);
          box-shadow: 0 0 12px var(--sci-fi-blue);
        }

        .leaderboard-item.rank-3 {
          background: linear-gradient(90deg, #ff6699, #cc3366);
          box-shadow: 0 0 10px var(--sci-fi-pink);
        }

        .rank {
          font-size: 1.6rem;
          width: 2.5rem;
          text-align: center;
          font-weight: 900;
          color: var(--sci-fi-pink);
          text-shadow: 0 0 8px var(--sci-fi-pink);
        }

        .user-info {
          flex-grow: 1;
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
        }

        .username {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #fff;
          text-shadow: 0 0 6px var(--sci-fi-pink);
        }

        .role {
          font-size: 0.85rem;
          color: var(--sci-fi-cyan);
          font-style: italic;
          margin-top: 2px;
          text-shadow: 0 0 4px var(--sci-fi-cyan);
        }

        .score {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--sci-fi-pink);
          text-shadow: 0 0 6px var(--sci-fi-pink);
          min-width: 110px;
          text-align: right;
          font-family: "Orbitron", monospace;
        }

        /* ===== Neural Network Fandom Hubs ===== */
        .neural-hubs {
          max-width: 960px;
          margin: 0 auto;
        }

        .neural-hubs .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 2rem;
          color: var(--sci-fi-pink);
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--sci-fi-pink);
        }

        .hubs-grid {
          display: flex;
          justify-content: space-around;
          gap: 1.8rem;
          flex-wrap: wrap;
        }

        .hub-card {
          flex: 1 1 280px;
          background: rgba(10, 10, 25, 0.8);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 0 8px var(--sci-fi-cyan), 0 0 15px var(--sci-fi-blue);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .hub-card:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px var(--sci-fi-pink), 0 0 30px var(--sci-fi-blue);
        }

        .avatar-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00ffff33, #ff33cc33);
          box-shadow: 0 0 15px var(--sci-fi-cyan) inset;
          margin-bottom: 1rem;
          overflow: hidden;
          border: 2px solid var(--sci-fi-pink);
        }

        .ai-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: drop-shadow(0 0 5px var(--sci-fi-pink));
        }

        .hub-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          text-shadow: 0 0 8px var(--sci-fi-pink);
          margin-bottom: 0.3rem;
        }

        .theme {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 0.5rem;
          color: var(--sci-fi-cyan);
          text-shadow: 0 0 5px var(--sci-fi-cyan);
        }

        .description {
          font-size: 0.95rem;
          margin-bottom: 0.8rem;
          color: #aaa;
        }

        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff33cc, #6600ff);
          box-shadow: 0 0 10px var(--sci-fi-pink);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 1.1px;
          color: #fff;
          user-select: none;
        }

        /* Background images for fandom themes */
        .theme-chrono-core {
          background-image: url('/assets/mecha-lab-bg.jpg');
          background-size: cover;
          background-position: center;
        }

        .theme-sector-9 {
          background-image: url('/assets/space-station-bg.jpg');
          background-size: cover;
          background-position: center;
        }

        .theme-alien-archive {
          background-image: url('/assets/alien-archive-bg.jpg');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  );
}