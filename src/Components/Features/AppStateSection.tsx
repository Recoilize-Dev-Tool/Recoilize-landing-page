import React from 'react'
import appStateGif from '../assets/demo1.gif';

const hText: string = 'Monitor Application State';

const pText: string = 'Two Recoilize features aid in the monitoring of state variables.\n\nStateTree displays the shape and value of all state varialbes in the application at a given instance.\n\nStateDiff displays only state varibles that have changed from the previous instance to the current instance.';

export default function AppStateSection() {
    return (
        <div className="feature-card">
            <div className="feature-left-text">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
            <div className="feature-gif-right">
                <div>
                    <img src={ appStateGif } alt="GIF showing display of state varaibles"/>
                </div>
            </div>
        </div>
    )
}
