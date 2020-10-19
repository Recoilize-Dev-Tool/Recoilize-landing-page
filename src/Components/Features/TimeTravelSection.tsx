import React from 'react';
import TimeTravelGif from '../../assets/demo1.gif';

const hText: string = 'Time Travel';

const pText: string = 'The snapshots list provides state the state thoughout the applications runtime. Each time a state change occurs a new snapshot is added. These snapshots can be clicked to view information about application at that instance of state. Alternatively the jump button can be pressed to revert application state back a pervious instance.';



export default function TimeTravelSection() {
    return (
        <div className="feature-card">
            <div className="feature-text-left">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
            <div className="feature-gif">
                <img src={ TimeTravelGif } alt="GIF demonstrating time travel dubugging"/>
            </div>
        </div>
    )
}