import React, { useState, useEffect, useRef } from 'react'; // Re-import these hooks
import { FaPlay, FaHeart, FaTimes } from 'react-icons/fa'; // Re-import icons
import { useNavigate } from 'react-router-dom';

import './Home.scss'; // Ensure your SCSS file is imported

// --- Data for the main hero slider (re-added) ---
const images = [
  {
    src: '/assets/homeanime1img.jpg',
    title: 'Akira',
    description: 'Akira is a cyberpunk action film and is the best-known work of director Katsuhiro Otomo.',
    video: '/videos/GhostInTheShell-1080p.mp4',
  },
  {
    src: '/assets/homeanime2img.jpg',
    title: 'SteamBoy',
    description: 'Steamboy is a 2004 Japanese animated steampunk action film.',
    video: '/videos/STEAMBOY-1080p.mp4',
  },
  {
    src: '/assets/homeanime3img.jpg',
    title: 'Perfect Blue',
    description: 'Perfect Blue is a psychological thriller anime film directed by Satoshi Kon.',
    video: '/videos/PerfectBlue-1080p.mp4',
  },
];

// --- Your existing data for content rows (unchanged) ---
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
      { id: 9, title: 'Deadman Wonderland', img: '/assets/sfic20.jpg' },
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
      { id: 24, title: 'Final Fantasy VII', img: '/assets/sfic72.jpg' },
    ],
  },
];

const latestReleasesSections = [
  {
    heading: 'Latest Releases',
    items: [
      { id: 1, title: 'Evangelion', img: '/assets/action.jpg' },
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

const topMoviesData = [
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
];


function Homepage() {
  // --- State and Hooks for the main hero slider (re-added) ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!selectedVideo) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }
    return () => clearTimeout(timeoutRef.current);
  }, [selectedVideo, currentIndex]);

  const handleWatchNow = (image) => {
    setSelectedVideo(image);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // --- Function for clickable content row items (unchanged) ---
  const handleItemClick = (id, title) => {
    console.log(`Clicked on: ${title} (ID: ${id})`);
    // Example navigation to a detail page:
    // navigate(`/details/${id}`);
  };

  return (
    <div className="homepage">
      {/* --- Main Hero Slider Section (re-added) --- */}
      <section className="hero-slider-section"> {/* Renamed class for clarity */}
        {!selectedVideo ? (
          <div className="slider-content">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="slider-image"
            />
            <div className="slider-info">
              <h2>{images[currentIndex].title}</h2>
              <p>{images[currentIndex].description}</p>
              <div className="button-group"> {/* Added button-group for styling */}
                <button className="watch-now-btn" onClick={() => handleWatchNow(images[currentIndex])}>
                  <FaPlay /> Watch Now
                </button>
                {/* Optional: Add a "Like" or "Add to Wishlist" button */}
                <button className="add-wishlist-btn">
                  <FaHeart /> Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="video-player-container"> {/* Renamed class for clarity */}
            <button className="close-video-btn" onClick={closeVideo}>
              <FaTimes /> Close
            </button>
            <video controls autoPlay className="video-player">
              <source src={selectedVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </section>

      {/* --- Content Row Sections (unchanged from last iteration) --- */}

      {/* Series Section */}
      {seriessections.map(({ heading, items }) => (
        <section key={heading} className="content-row-section">
          <h2>{heading}</h2>
          <div className="content-row-items">
            {items.slice(0, 24).map(({ id, title, img }) => (
              <div key={id} className="content-row-item" onClick={() => handleItemClick(id, title)}>
                <img src={img} alt={title} />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Latest Releases Section */}
      {latestReleasesSections.map(({ heading, items }) => (
        <section key={heading} className="content-row-section">
          <h2>{heading}</h2>
          <div className="content-row-items">
            {items.slice(0, 24).map(({ id, title, img }) => (
              <div key={id} className="content-row-item" onClick={() => handleItemClick(id, title)}>
                <img src={img} alt={title} />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Top Movies Section */}
      <section className="content-row-section">
        <h2>Top Movies</h2>
        <div className="content-row-items">
          {topMoviesData.slice(0, 24).map(({ id, title, img }) => (
            <div key={id} className="content-row-item" onClick={() => handleItemClick(id, title)}>
              <img src={img} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;