import React from 'react'
const appStateVid = require('../../assets/stateVid.mp4');

const hText: string = 'Monitor Application State';

const pText: string = 'Two Recoilize features aid in the monitoring of state variables.\n\nStateTree displays the shape and value of all state varialbes in the application at a given instance.\n\nStateDiff displays only state varibles that have changed from the previous instance to the current instance.';

export default function AppStateSection() {
    return (
        <div className="feature-card last-card">
            <div className="feature-text-left">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
            <div className="feature-gif">
                <video autoPlay loop muted controls={false}>
                    <source src={appStateVid} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
