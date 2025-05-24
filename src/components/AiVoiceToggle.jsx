import React, { useEffect, useRef, useState } from 'react';
import './AiVoiceToggle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AiVoiceToggle = ({ aiVoiceEnabled, onToggleAiVoice }) => {
    const audioRef = useRef(null);
    const timeoutRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (aiVoiceEnabled) {
            // Wait 5 seconds before playing
            timeoutRef.current = setTimeout(() => {
                audioRef.current = new Audio('/audio/ai-voice.mp3'); // Replace with your actual path
                audioRef.current.play();
                setIsPlaying(true);
            }, 5000); // Change to 10000 for 10 seconds
        } else {
            // If toggled off, stop audio or cancel delay
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }

        return () => {
            clearTimeout(timeoutRef.current);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [aiVoiceEnabled]);

    return (
        <button className="ai-voice-toggle-button" onClick={onToggleAiVoice}>
            <FontAwesomeIcon icon={aiVoiceEnabled ? 'volume-up' : 'volume-mute'} />
            <span className="button-label">{aiVoiceEnabled ? 'AI VOICE ON' : 'AI VOICE OFF'}</span>
        </button>
    );
};

export default AiVoiceToggle;
