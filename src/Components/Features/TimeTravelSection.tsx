import React from 'react';
const timeTravelVid = require('../../assets/timeTravelVid.mp4');

const hText: string = 'Time Travel';

const pText: string = 'The snapshots list provides state the state thoughout the applications runtime. Each time a state change occurs a new snapshot is added. These snapshots can be clicked to view information about application at that instance of state. Alternatively the jump button can be pressed to revert application state back a pervious instance.';



export default function TimeTravelSection() {
    return (
        <div className="feature-card first-feature-card">
            <div className="feature-text-left">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
            <div className="feature-gif">
                <video autoPlay loop muted controls={false}>
                    <source src={timeTravelVid} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}