import React from 'react';
import './QuantumSkipFX.scss'; // CSS for glitch, blur, color shift

const QuantumSkipFX = () => {
    return (
        <div className="quantum-skip-fx">
            {/* Glitch lines that appear during the warp effect */}
            <div className="glitch-line line-1"></div>
            <div className="glitch-line line-2"></div>
            <div className="glitch-line line-3"></div>
            {/* Text indicating the quantum jump */}
            <div className="glitch-text">/// QUANTUM JUMP ///</div>
        </div>
    );
};

export default QuantumSkipFX;