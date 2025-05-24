import React from 'react';
import './TemporalReplayFX.scss'; // CSS for desaturation, film grain, subtle distortion

const TemporalReplayFX = () => {
    return (
        <div className="temporal-replay-fx">
            {/* Distortion overlay for glitch effects */}
            <div className="distortion-overlay"></div>
            {/* Film grain overlay */}
            <div className="grain-overlay"></div>
            {/* Text indicating slow motion */}
            <div className="slow-motion-text">/// REPLAY INITIATED ///</div>
        </div>
    );
};

export default TemporalReplayFX;