import React from 'react';
import './TemporalReplayFX.scss'; 

const TemporalReplayFX = () => {
    return (
        <div className="temporal-replay-fx">
            
            <div className="distortion-overlay"></div>
           
            <div className="grain-overlay"></div>
           
            <div className="slow-motion-text">/// REPLAY INITIATED ///</div>
        </div>
    );
};

export default TemporalReplayFX;