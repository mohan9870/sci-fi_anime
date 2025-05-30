import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from './PlayerControls';
import DataScanOverlay from './DataScanOverlay';
import QuantumSkipFX from './QuantumSkipFX';
import TemporalReplayFX from './TemporalReplayFX';
import AiVoiceToggle from './AiVoiceToggle';
import VideoPlayer from './VideoPlayer';
import BackgroundVisuals from './BackgroundVisuals';
import './Video.scss';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faForward, faUndo, faEye, faClosedCaptioning, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faPlay, faPause, faForward, faUndo, faEye, faClosedCaptioning, faCaretUp, faCaretDown);

function Video({ navigateTo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isQuantumSkipping, setIsQuantumSkipping] = useState(false);
  const [isTemporalReplaying, setIsTemporalReplaying] = useState(false);
  const [isDataScanning, setIsDataScanning] = useState(false);
  const [aiVoiceEnabled, setAiVoiceEnabled] = useState(false);
  const [currentEpisodeMetadata, setCurrentEpisodeMetadata] = useState(null);
  
  const [currentSubtitleLanguage, setCurrentSubtitleLanguage] = useState('off');
  const [quality, setQuality] = useState('1080p'); 

  const videoSrc = "/videos/GhostInTheShell-1080p.mp4";
  const availableSubtitleLanguages = [
    { code: 'off', label: 'Off' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
   
  ];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
     
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);
  const onSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time); 
    }
  };


  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); 
    }
  };


  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration); 
      setCurrentEpisodeMetadata({
        title: "Episode 1: The First Contact",
        episodeNumber: 1,
        director: "Ava Tech",
        cast: ["Commander Vox", "Unit 734", "Dr. Aris"],
        trivia: [
          "The alien language is based on ancient Sanskrit, with a dialect from Kepler-186f.",
          "The spaceship 'Odyssey' design was inspired by deep-sea anglerfish.",
          "This scene uses a new volumetric rendering technique for nebula effects."
        ],
        commentary: [
          { time: 5, text: "Observe energy fluctuations around the alien artifact." },
          { time: 25, text: "The suits have adaptive camouflage in passive mode." },
          { time: 50, text: "The data burst suggests a non-terrestrial origin." }
        ]
      });
    }
  };

  
  const handleQuantumSkip = () => {
    if (videoRef.current) {
      const skipAmount = 10; 
      const newTime = Math.min(videoRef.current.currentTime + skipAmount, duration);
      videoRef.current.currentTime = newTime;
      setIsQuantumSkipping(true); 
      setTimeout(() => {
        setIsQuantumSkipping(false); 
      }, 500);
    }
  };

  
  const handleTemporalReplay = () => {
    if (videoRef.current && !isTemporalReplaying) {
      setIsTemporalReplaying(true);
      const originalPlaybackRate = videoRef.current.playbackRate;
      videoRef.current.playbackRate = 0.5; 
      setTimeout(() => {
        videoRef.current.playbackRate = originalPlaybackRate; 
        setIsTemporalReplaying(false); 
      }, 3000);
    }
  };

 
  const toggleDataScan = () => {
    setIsDataScanning(!isDataScanning);
  };

 
  const speakAiVoice = (text) => {
    if ('speechSynthesis' in window && aiVoiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (isDataScanning && aiVoiceEnabled && currentEpisodeMetadata?.commentary) {
      const activeCommentary = currentEpisodeMetadata.commentary.find(
        c => currentTime >= c.time && currentTime < c.time + 10 
      );
      if (activeCommentary) {
        speakAiVoice(activeCommentary.text); 
      }
    }
  }, [currentTime, isDataScanning, aiVoiceEnabled, currentEpisodeMetadata]);

  const handleQualityChange = (newQuality) => {
    setQuality(newQuality);
    
    console.log(`Video quality changed to: ${newQuality}`);
  };

  
  const handleSubtitleLanguageChange = (languageCode) => {
    setCurrentSubtitleLanguage(languageCode);
    
    console.log(`Subtitle language changed to: ${languageCode}`);
   
  };


  return (
    <div className="sci-fi-player-container">

      <BackgroundVisuals activeVisual={isDataScanning ? 'neural-grid' : 'starscape'} />

   
      <VideoPlayer videoRef={videoRef} isPlaying={isPlaying} src={videoSrc} />

     
      {isQuantumSkipping && <QuantumSkipFX />}
      {isTemporalReplaying && <TemporalReplayFX />}

      <PlayerControls
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onQuantumSkip={handleQuantumSkip}
        onTemporalReplay={handleTemporalReplay}
        onToggleDataScan={toggleDataScan}
        onSeek={onSeek}
        isDataScanning={isDataScanning}
     
        subtitlesEnabled={currentSubtitleLanguage !== 'off'} 
        onSubtitleLanguageChange={handleSubtitleLanguageChange}
        currentSubtitleLanguage={currentSubtitleLanguage} 
        availableSubtitleLanguages={availableSubtitleLanguages}
   
        quality={quality}
        onQualityChange={handleQualityChange}
        qualityOptions={['1080p', '720p', '480p', '360p']} 
      />

    
      {isDataScanning && (
        <DataScanOverlay
          currentTime={currentTime}
          episodeMetadata={currentEpisodeMetadata}
          onClose={() => setIsDataScanning(false)}
        />
      )}

   
      <AiVoiceToggle
        aiVoiceEnabled={aiVoiceEnabled}
        onToggleAiVoice={() => setAiVoiceEnabled(!aiVoiceEnabled)}
      />
    </div>
  );
}

export default Video;
