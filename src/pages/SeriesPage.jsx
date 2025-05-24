// src/pages/SeriesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeriesPage.scss'; // You'll create this SCSS file

// Re-import the series data (or pass it via context/props if preferred)
const seriessections = [
  {
    heading: 'Series',
    items: [
      { id: 1, title: 'The Fabelmans', img: '/assets/sfic49.jpg' },
      { id: 2, title: 'Final Fantasy', img: '/assets/sfic50.jpg' },
      { id: 3, title: 'Fate/Zero', img: '/assets/sfic51.jpg' },
      { id: 4, title: 'Time Of Eve', img: '/assets/sfic52.jpg' },
      { id: 5, title: 'Nausicaä of the Valley of the Wind', img: '/assets/sfic53.jpg' },
      { id: 6, title: 'Sword Art Online', img: '/assets/sfic54.jpg' },
      { id: 7, title: 'Castle In The Sky', img: '/assets/sfic55.jpg' },
      { id: 8, title: 'Full Metal Panic!', img: '/assets/sfic56.jpg' },
      { id: 9, title: 'Deadman Wonderland', img: '/assets/sfic57.jpg' },
      { id: 10, title: 'Elfen Lied', img: '/assets/sfic58.jpg' },
      { id: 11, title: 'Darker Than Black', img: '/assets/sfic59.jpg' },
      { id: 12, title: 'Ergo Proxy', img: '/assets/sfic60.jpg' },
      { id: 13, title: 'Neon Genesis Evangelion', img: '/assets/sfic61.jpg' },
      { id: 14, title: 'Code Giass', img: '/assets/sfic62.jpg' },
      { id: 15, title: 'Trigun', img: '/assets/sfic63.jpg' },
      { id: 16, title: 'The Girl Who Leapt Through Time', img: '/assets/sfic64.jpg' },
      { id: 17, title: 'Mobile Side Gundam', img: '/assets/sfic65.jpg' },
      { id: 18, title: 'Psycho-Pass', img: '/assets/sfic66.jpg' },
      { id: 19, title: 'Steins;Gate', img: '/assets/sfic67.jpg' },
      { id: 20, title: 'Ghost In the Shell', img: '/assets/sfic68.jpg' },
      { id: 21, title: 'Macross Plus', img: '/assets/sfic69.jpg' },
      { id: 22, title: 'Redline', img: '/assets/sfic70.jpg' },
      { id: 23, title: 'Galaxy Express 999', img: '/assets/sfic71.jpg' },
      { id: 24, title: 'Final Fantasy VII', img: '/assets/sfic25.jpg' },
    ],
  },
];

const SeriesPage = () => {
  const navigate = useNavigate();

  // Assuming seriessections only has one entry for 'Series'
  const allSeriesItems = seriessections[0] ? seriessections[0].items : [];

  return (
    <div className="series-page-container">
      <header className="series-page-header">
        <button onClick={() => navigate('/home')} className="back-button">
          &larr; 
        </button>
        <h1>All Series</h1>
      </header>
      <div className="series-grid">
        {allSeriesItems.map((item) => (
          <div key={item.id} className="series-card">
            <img src={item.img} alt={item.title} className="series-card-img" />
            <div className="series-card-title">{item.title}</div>
            {/* You can add watch/details buttons here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;