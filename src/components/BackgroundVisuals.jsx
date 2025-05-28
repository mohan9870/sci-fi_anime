import React from 'react';
import './BackgroundVisuals.scss';

const BackgroundVisuals = ({ activeVisual }) => {
    return (
        <div className="background-visuals-container">
           
            <div className={`starscape-bg ${activeVisual === 'starscape' ? 'active' : ''}`}></div>

          
            <div className={`neural-grid-bg ${activeVisual === 'neural-grid' ? 'active' : ''}`}></div>

           
        </div>
    );
};

export default BackgroundVisuals;