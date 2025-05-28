import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaHeart, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './Home.scss';


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


export const seriessections = [
  {
    heading: 'Series',
    items: [
      { id: 1, title: 'The Fabelmans', img: '/assets/sfic49.jpg', video: '/videos/TheFabelmans.mp4' },
      { id: 2, title: 'Final Fantasy', img: '/assets/sfic50.jpg', video: '/videos/FinalFantasy.mp4' },
      { id: 3, title: 'Fate/Zero', img: '/assets/sfic51.jpg', video: '/videos/FateZero.mp4' },
      { id: 4, title: 'Time Of Eve', img: '/assets/sfic52.jpg', video: '/videos/TimeOfEve.mp4' },
      { id: 5, title: 'Nausicaä of the Valley of the Wind', img: '/assets/sfic53.jpg', video: '/videos/NausicaaOfTheValleyOfTheWind.mp4' },
      { id: 6, title: 'Sword Art Online', img: '/assets/sfic54.jpg', video: '/videos/SwordArtOnline.mp4' },
      { id: 7, title: 'Castle In The Sky', img: '/assets/sfic55.jpg', video: '/videos/CastleInTheSky.mp4' },
      { id: 8, title: 'Full Metal Panic!', img: '/assets/sfic56.jpg', video: '/videos/FullMetalPanic.mp4' },
      { id: 9, title: 'Deadman Wonderland', img: '/assets/sfic20.jpg', video: '/videos/DeadmanWonderland.mp4' },
      { id: 10, title: 'Elfen Lied', img: '/assets/sfic58.jpg', video: '/videos/ElfenLied.mp4' },
      { id: 11, title: 'Darker Than Black', img: '/assets/sfic59.jpg', video: '/videos/DarkerThanBlack.mp4' },
      { id: 12, title: 'Ergo Proxy', img: '/assets/sfic60.jpg', video: '/videos/ErgoProxy.mp4' },
      { id: 13, title: 'Neon Genesis Evangelion', img: '/assets/sfic61.jpg', video: '/videos/NeonGenesisEvangelion.mp4' },
      { id: 14, title: 'Code Giass', img: '/assets/sfic62.jpg', video: '/videos/CodeGeass.mp4' },
      { id: 15, title: 'Trigun', img: '/assets/sfic63.jpg', video: '/videos/Trigun.mp4' },
      { id: 16, title: 'The Girl Who Leapt Through Time', img: '/assets/sfic64.jpg', video: '/videos/TheGirlWhoLeaptThroughTime.mp4' },
      { id: 17, title: 'Mobile Side Gundam', img: '/assets/sfic65.jpg', video: '/videos/MobileSuitGundam.mp4' },
      { id: 18, title: 'Psycho-Pass', img: '/assets/sfic66.jpg', video: '/videos/PsychoPass.mp4' },
      { id: 19, title: 'Steins;Gate', img: '/assets/sfic67.jpg', video: '/videos/SteinsGate.mp4' },
      { id: 20, title: 'Ghost In the Shell', img: '/assets/sfic68.jpg', video: '/videos/GhostInTheShell.mp4' },
      { id: 21, title: 'Macross Plus', img: '/assets/sfic69.jpg', video: '/videos/MacrossPlus.mp4' },
      { id: 22, title: 'Redline', img: '/assets/sfic70.jpg', video: '/videos/Redline.mp4' },
      { id: 23, title: 'Galaxy Express 999', img: '/assets/sfic71.jpg', video: '/videos/GalaxyExpress999.mp4' },
      { id: 24, title: 'Final Fantasy VII', img: '/assets/sfic72.jpg', video: '/videos/FinalFantasyVII.mp4' },
    ],
  },
];

export const latestReleasesSections = [
  {
    heading: 'Latest Releases',
    items: [
      { id: 1, title: 'Evangelion', img: '/assets/action.jpg', video: '/videos/Evangelion.mp4' },
      { id: 2, title: 'Gantz-O', img: '/assets/img2.jpg', video: '/videos/GantzO.mp4' },
      { id: 3, title: 'Akira', img: '/assets/img3.jpg', video: '/videos/Akira.mp4' },
      { id: 4, title: 'Castle In The Sky', img: '/assets/img4.jpg', video: '/videos/CastleInTheSky.mp4' },
      { id: 5, title: 'Wonderful Days', img: '/assets/img5.jpg', video: '/videos/WonderfulDays.mp4' },
      { id: 6, title: 'Cowboy Bebop', img: '/assets/img6.jpg', video: '/videos/CowboyBebop.mp4' },
      { id: 7, title: 'Paprika', img: '/assets/img7.jpg', video: '/videos/Paprika.mp4' },
      { id: 8, title: 'The Empire Of Corpses', img: '/assets/sfic8.jpg', video: '/videos/TheEmpireOfCorpses.mp4' },
      { id: 9, title: 'King Of Thorn', img: '/assets/sfic9.jpg', video: '/videos/KingOfThorn.mp4' },
      { id: 10, title: 'The Girl Who Leapt Through Time', img: '/assets/sfic10.jpg', video: '/videos/TheGirlWhoLeaptThroughTime.mp4' },
      { id: 11, title: 'Ghost In The Shell', img: '/assets/sfic11.jpg', video: '/videos/GhostInTheShell.mp4' },
      { id: 12, title: 'Dragon Ball Super', img: '/assets/sfic12.jpg', video: '/videos/DragonBallSuper.mp4' },
      { id: 13, title: 'Neon Genesis Evangelion', img: '/assets/sfic13.jpg', video: '/videos/NeonGenesisEvangelion.mp4' },
      { id: 14, title: 'Metropolis', img: '/assets/sfic14.jpg', video: '/videos/Metropolis.mp4' },
      { id: 15, title: 'SteamBoy', img: '/assets/sfic15.jpg', video: '/videos/Steamboy.mp4' },
      { id: 16, title: 'Made In Abyss', img: '/assets/sfic16.jpg', video: '/videos/MadeInAbyss.mp4' },
      { id: 17, title: 'Stand by Me Doraemon', img: '/assets/sfic17.jpg', video: '/videos/StandByMeDoraemon.mp4' },
      { id: 18, title: 'Psycho-Pass', img: '/assets/sfic18.jpg', video: '/videos/PsychoPass.mp4' },
      { id: 19, title: 'Steins;Gate', img: '/assets/sfic19.jpg', video: '/videos/SteinsGate.mp4' },
      { id: 20, title: 'Jin-Roh', img: '/assets/sfic20.jpg', video: '/videos/JinRoh.mp4' },
      { id: 21, title: 'Macross Plus', img: '/assets/sfic21.jpg', video: '/videos/MacrossPlus.mp4' },
      { id: 22, title: 'Redline', img: '/assets/sfic22.jpg', video: '/videos/Redline.mp4' },
      { id: 23, title: 'Galaxy Express 999', img: '/assets/sfic23.jpg', video: '/videos/GalaxyExpress999.mp4' },
      { id: 24, title: 'Final Fantasy VII', img: '/assets/sfic24.jpg', video: '/videos/FinalFantasyVII.mp4' },
    ],
  },
];

export const topMoviesData = [
  { id: 25, title: 'Time of Eve', img: '/assets/sfic25.jpg', video: '/videos/TimeOfEve.mp4' },
  { id: 26, title: 'Your Name', img: '/assets/sfic26.jpg', video: '/videos/YourName.mp4' },
  { id: 27, title: 'Rakuen Tsuiho', img: '/assets/sfic27.jpg', video: '/videos/RakuenTsuiho.mp4' },
  { id: 28, title: 'Mobile Suit Gundam', img: '/assets/sfic28.jpg', video: '/videos/MobileSuitGundam.mp4' },
  { id: 29, title: 'Code Geass', img: '/assets/sfic29.jpg', video: '/videos/CodeGeass.mp4' },
  { id: 30, title: 'Voices of a Distant Star', img: '/assets/sfic30.jpg', video: '/videos/VoicesOfADistantStar.mp4' },
  { id: 31, title: 'The Disappearance of Haruhi Suzumiya', img: '/assets/sfic31.jpg', video: '/videos/TheDisappearanceOfHaruhiSuzumiya.mp4' },
  { id: 32, title: 'Battle Angel', img: '/assets/sfic32.jpg', video: '/videos/BattleAngel.mp4' },
  { id: 33, title: 'Megalo Box', img: '/assets/sfic33.jpg', video: '/videos/MegaloBox.mp4' },
  { id: 34, title: 'The Animatrix', img: '/assets/sfic34.jpg', video: '/videos/TheAnimatrix.mp4' },
  { id: 35, title: 'Parasyte', img: '/assets/sfic35.jpg', video: '/videos/Parasyte.mp4' },
  { id: 36, title: 'Summer Wars', img: '/assets/sfic36.jpg', video: '/videos/SummerWars.mp4' },
  { id: 37, title: 'Saiakano', img: '/assets/sfic37.jpg', video: '/videos/Saiakano.mp4' },
  { id: 38, title: 'Patema Inverted', img: '/assets/sfic38.jpg', video: '/videos/PatemaInverted.mp4' },
  { id: 39, title: 'Patema Inverted', img: '/assets/sfic39.jpg', video: '/videos/PatemaInverted.mp4' },
  { id: 40, title: 'Appleseed', img: '/assets/sfic40.jpg', video: '/videos/Appleseed.mp4' },
  { id: 41, title: 'Deca-Dence', img: '/assets/sfic41.jpg', video: '/videos/DecaDence.mp4' },
  { id: 42, title: 'Harlock', img: '/assets/sfic42.jpg', video: '/videos/Harlock.mp4' },
  { id: 43, title: 'Wings of Honneamise', img: '/assets/sfic43.jpg', video: '/videos/WingsOfHonneamise.mp4' },
  { id: 44, title: 'Memories', img: '/assets/sfic44.jpg', video: '/videos/Memories.mp4' },
  { id: 45, title: 'The Irregular at Magic High School', img: '/assets/sfic45.jpg', video: '/videos/TheIrregularAtMagicHighSchool.mp4' },
  { id: 46, title: 'Patlabor', img: '/assets/sfic46.jpg', video: '/videos/Patlabor.mp4' },
  { id: 47, title: 'Children Who Chase Lost Voices', img: '/assets/sfic47.jpg', video: '/videos/ChildrenWhoChaseLostVoices.mp4' },
  { id: 48, title: 'Silent Möbius', img: '/assets/sfic48.jpg', video: '/videos/SilentMobius.mp4' },
];


function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!selectedVideo) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [selectedVideo, currentIndex]);

  const handleWatchNow = (item) => {
   
    navigate('/video', { state: { videoUrl: item.video, title: item.title } });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  
  const handleItemClick = (item) => {
    if (item.video) {
      navigate('/video', { state: { videoUrl: item.video, title: item.title } });
    } else {
      console.warn(`No video found for: ${item.title}`);
    
    }
  };

  const handleViewAllClick = (path) => {
    navigate(path);
  };

  const handleAddToWishlist = () => {
    navigate('/mylist');
  };

  return (
    <div className="homepage">
     
      <section className="hero-slider-section">
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
              <div className="button-group">
                <button className="watch-now-btn" onClick={() => handleWatchNow(images[currentIndex])}>
                  <FaPlay /> Watch Now
                </button>
                <button className="add-wishlist-btn" onClick={handleAddToWishlist}>
                  <FaHeart /> Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ) : (
         
          <div className="video-player-container">
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

     
      {seriessections.map(({ heading, items }) => (
        <section key={heading} className="content-row-section">
          <div className="section-header">
            <h2>{heading}</h2>
            <button className="view-all-btn" onClick={() => handleViewAllClick('/series')}>
              View All
            </button>
          </div>
          <div className="content-row-items">
            {items.slice(0, 24).map((item) => (
              <div key={item.id} className="content-row-item" onClick={() => handleItemClick(item)}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

     
      {latestReleasesSections.map(({ heading, items }) => (
        <section key={heading} className="content-row-section">
          <div className="section-header">
            <h2>{heading}</h2>
            <button className="view-all-btn" onClick={() => handleViewAllClick('/latest')}>
              View All
            </button>
          </div>
          <div className="content-row-items">
            {items.slice(0, 24).map((item) => (
              <div key={item.id} className="content-row-item" onClick={() => handleItemClick(item)}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

     
      <section className="content-row-section">
        <div className="section-header">
          <h2>Top Movies</h2>
          <button className="view-all-btn" onClick={() => handleViewAllClick('/topmovies')}>
            View All
          </button>
        </div>
        <div className="content-row-items">
          {topMoviesData.slice(0, 24).map((item) => (
            <div key={item.id} className="content-row-item" onClick={() => handleItemClick(item)}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;