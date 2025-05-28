import React, { useEffect, useRef, useState } from 'react';
import './AiVoiceToggle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AiVoiceToggle = ({ aiVoiceEnabled, onToggleAiVoice }) => {
    const audioRef = useRef(null);
    const timeoutRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (aiVoiceEnabled) {
            
            timeoutRef.current = setTimeout(() => {
                audioRef.current = new Audio('/audio/ai-voice.mp3'); 
                audioRef.current.play();
                setIsPlaying(true);
            }, 5000); 
        } else {
           
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
