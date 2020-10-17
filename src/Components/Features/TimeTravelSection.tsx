import React from 'react';
import TimeTravelGif from '../assets/demo1.gif';

export default function TimeTravelSection() {
    return (
        <div id="time-travel-div">
            {/* fix the formatting of this */}
            <h2 className="section-title-left">#TimeTravelDebugging</h2>
            <div id="timetravel-container">
                <div>
                    <img src={ TimeTravelGif } alt="GIF demonstrating time travel dubugging"/>
                </div>
                <div>
                    <h2>Innovative debugging tool made specifically for Recoil</h2>
                </div>
            </div>
        </div>
    )
}