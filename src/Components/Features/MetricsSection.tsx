import React from 'react';
import ToggleGif from '../../assets/interpolate.gif';

export default function TimeTravelSection() {
    return (
        <div id="toggle-div" className="scroll-fade">
            {/* fix the formatting of this */}
            <h2 className="section-title-right">#ToggleMultipleGraphs</h2>
            <div id="toggle-container">
                <div>
                    <img src={ ToggleGif } alt="GIF demonstrating time travel dubugging"/>
                </div>
                <div>
                    <h2>Toggle multiple graphs depending on your taste</h2>
                </div>
            </div>
        </div>
    )
}