import React from 'react'
const networkVid = require('../../assets/networkVid.mp4');

const hText: string = 'Visualize Atoms and Selectors';

const pText: string = 'Atoms and selectors are visualized by Recoilize to show relationships. Selectors are linked to the atom or selector from which they derive data to form a network. This network can visualize all application state at once, or be filtered to show particular atoms/selectors of interest.';



export default function NetworkSection() {
    return (
        <div className="feature-card right-card">
            <div className="feature-gif">
                <video autoPlay loop muted controls={false}>
                    <source src={networkVid} type="video/mp4"/>
                </video>
            </div>
            <div className="feature-text-right">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
        </div>
    )
}

//<video autoplay loop muted controls = "false">
//<source src="goats.mp4" type="video/mp4">