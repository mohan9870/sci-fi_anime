import React from 'react';
import './BackgroundVisuals.scss'; // Extensive CSS for background animations

const BackgroundVisuals = ({ activeVisual }) => {
    return (
        <div className="background-visuals-container">
            {/* Starscape background - active by default or when not data scanning */}
            <div className={`starscape-bg ${activeVisual === 'starscape' ? 'active' : ''}`}></div>

            {/* Neural Grid background - active when data scanning */}
            <div className={`neural-grid-bg ${activeVisual === 'neural-grid' ? 'active' : ''}`}></div>

            {/* You could add more background types (e.g., circuit board, quantum portal) here
                and control their visibility based on the 'activeVisual' prop or other states.
            */}
        </div>
    );
};

export default BackgroundVisuals;