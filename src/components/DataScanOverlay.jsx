import React from 'react';
import { X } from 'lucide-react';
import './DataScanOverlay.scss';

function DataScanOverlay({ currentTime, episodeMetadata, onClose }) {
  if (!episodeMetadata) return null;

  const commentary = episodeMetadata.commentary?.find(
    (c) => currentTime >= c.time && currentTime < c.time + 10
  );

  return (
    <div className="data-scan-overlay">
      <div className="scan-header">
        <h2>NEURAL DATA SCAN</h2>
        <button className="close-btn" onClick={onClose}>
          <X size={22} />
        </button>
      </div>

      <div className="metadata-section">
        <div><strong>Title:</strong> {episodeMetadata.title}</div>
        <div><strong>Episode:</strong> {episodeMetadata.episodeNumber}</div>
        <div><strong>Director:</strong> {episodeMetadata.director}</div>
        <div><strong>Cast:</strong> {episodeMetadata.cast.join(', ')}</div>
      </div>

      <div className="commentary-section">
        <h4>LIVE COMMENTARY</h4>
        {commentary ? (
          <p className="highlight">{commentary.text}</p>
        ) : (
          <p className="faded">Scanning for commentary...</p>
        )}
      </div>

      <div className="trivia-section">
        <h4>SCAN TRIVIA</h4>
        <ul>
          {episodeMetadata.trivia.map((fact, index) => (
            <li key={index}><span>➤</span> {fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DataScanOverlay;
