import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LatestReleases.scss';

const LatestReleases = ({ sections }) => {
  const navigate = useNavigate();
  const latestSections = sections && Array.isArray(sections)
    ? sections
    : [
        {
          heading: 'Latest Releases',
          items: [
            { id: 1, title: 'Evangelion', img: '../assets/action.jpg' },
            { id: 2, title: 'Gantz-O', img: '/assets/img2.jpg' },
            { id: 3, title: 'Akira', img: '/assets/img3.jpg' },
            { id: 4, title: 'Castle In The Sky', img: '/assets/img4.jpg' },
            { id: 5, title: 'Wonderful Days', img: '/assets/img5.jpg' },
            { id: 6, title: 'Cowboy Bebop', img: '/assets/img6.jpg' },
            { id: 7, title: 'Paprika', img: '/assets/img7.jpg' },
            { id: 8, title: 'The Empire Of Corpses', img: '/assets/sfic8.jpg' },
            { id: 9, title: 'King Of Thorn', img: '/assets/sfic9.jpg' },
            { id: 10, title: 'The Girl Who Leapt Through Time', img: '/assets/sfic10.jpg' },
            { id: 11, title: 'Ghost In The Shell', img: '/assets/sfic11.jpg' },
            { id: 12, title: 'Dragon Ball Super', img: '/assets/sfic12.jpg' },
            { id: 13, title: 'Neon Genesis Evangelion', img: '/assets/sfic13.jpg' },
            { id: 14, title: 'Metropolis', img: '/assets/sfic14.jpg' },
            { id: 15, title: 'SteamBoy', img: '/assets/sfic15.jpg' },
            { id: 16, title: 'Made In Abyss', img: '/assets/sfic16.jpg' },
            { id: 17, title: 'Stand by Me Doraemon', img: '/assets/sfic17.jpg' },
            { id: 18, title: 'Psycho-Pass', img: '/assets/sfic18.jpg' },
            { id: 19, title: 'Steins;Gate', img: '/assets/sfic19.jpg' },
            { id: 20, title: 'Jin-Roh', img: '/assets/sfic20.jpg' },
            { id: 21, title: 'Macross Plus', img: '/assets/sfic21.jpg' },
            { id: 22, title: 'Redline', img: '/assets/sfic22.jpg' },
            { id: 23, title: 'Galaxy Express 999', img: '/assets/sfic23.jpg' },
            { id: 24, title: 'Final Fantasy VII', img: '/assets/sfic24.jpg' },
          ],
        },
      ];

  return (
    <div className="latest-releases-container">
      <header className="latest-releases-header"> 
        <button onClick={() => navigate('/home')} className="back-button">
          &larr;
        </button>
       
        <h2 className="section-heading">{latestSections[0]?.heading || 'Latest Releases'}</h2>
      </header>
      {latestSections.map((section) => (
        <section key={section.heading} className="latest-releases-section">
          
          <div className="latest-releases-grid">
            {section.items?.map((item) => (
              <div key={item.id} className="latest-release-card">
                <img src={item.img} alt={item.title} className="release-img" />
                <p className="release-title">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LatestReleases;
