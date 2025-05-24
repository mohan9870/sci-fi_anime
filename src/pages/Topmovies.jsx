import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Topmovies.scss'; // Create this SCSS file

const TopMovies = ({ sections }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // If no sections passed, use default data internally for Top Movies
  const topMoviesSections = sections && Array.isArray(sections)
    ? sections
    : [
        {
          heading: 'Top Movies',
          items: [
            { id: 25, title: 'Time of Eve', img: '/assets/sfic25.jpg' },
            { id: 26, title: 'Your Name', img: '/assets/sfic26.jpg' },
            { id: 27, title: 'Rakuen Tsuiho', img: '/assets/sfic27.jpg' },
            { id: 28, title: 'Mobile Suit Gundam', img: '/assets/sfic28.jpg' },
            { id: 29, title: 'Code Geass', img: '/assets/sfic29.jpg' },
            { id: 30, title: 'Voices of a Distant Star', img: '/assets/sfic30.jpg' },
            { id: 31, title: 'The Disappearance of Haruhi Suzumiya', img: '/assets/sfic31.jpg' },
            { id: 32, title: 'Battle Angel', img: '/assets/sfic32.jpg' },
            { id: 33, title: 'Megalo Box', img: '/assets/sfic33.jpg' },
            { id: 34, title: 'The Animatrix', img: '/assets/sfic34.jpg' },
            { id: 35, title: 'Parasyte', img: '/assets/sfic35.jpg' },
            { id: 36, title: 'Summer Wars', img: '/assets/sfic36.jpg' },
            { id: 37, title: 'Saiakano', img: '/assets/sfic37.jpg' },
            { id: 38, title: 'Patema Inverted', img: '/assets/sfic38.jpg' },
            { id: 39, title: 'Patema Inverted', img: '/assets/sfic39.jpg' },
            { id: 40, title: 'Appleseed', img: '/assets/sfic40.jpg' },
            { id: 41, title: 'Deca-Dence', img: '/assets/sfic41.jpg' },
            { id: 42, title: 'Harlock', img: '/assets/sfic42.jpg' },
            { id: 43, title: 'Wings of Honneamise', img: '/assets/sfic43.jpg' },
            { id: 44, title: 'Memories', img: '/assets/sfic44.jpg' },
            { id: 45, title: 'The Irregular at Magic High School', img: '/assets/sfic45.jpg' },
            { id: 46, title: 'Patlabor', img: '/assets/sfic46.jpg' },
            { id: 47, title: 'Children Who Chase Lost Voices', img: '/assets/sfic47.jpg' },
            { id: 48, title: 'Silent Möbius', img: '/assets/sfic48.jpg' },
          ],
        },
      ];

  return (
    <div className="top-movies-container">
      <header className="top-movies-header"> {/* Added a header for the button and heading */}
        <button onClick={() => navigate('/home')} className="back-button">
          &larr; {/* Back arrow */}
        </button>
        {/* The heading is now inside the header */}
        <h2 className="section-heading">{topMoviesSections[0]?.heading || 'Top Movies'}</h2>
      </header>
      {topMoviesSections.map((section) => (
        <section key={section.heading} className="top-movies-section">
          {/* The h2 element that was here is now moved into the header */}
          <div className="top-movies-grid">
            {section.items?.map((item) => (
              <div key={item.id} className="top-movie-card">
                <img src={item.img} alt={item.title} className="movie-img" />
                <p className="movie-title">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TopMovies;
