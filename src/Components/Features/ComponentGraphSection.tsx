import React from 'react'
const componentVid = require('../../assets/componentVid.mp4');

const hText: string = 'Component Graph';

const pText: string = 'Recoilize provides a visualization of the the component tree. See the heirarchy of React components while also being provided information on which components are subscribed to particular atoms and selectors, as well as the current values of those selectors.\n\nAdditional functionality has been added to the component graph to support React Concurrent-Mode. Visualize which components were suspended during rendering.';

export default function ComponentGraphSection() {
    return (
        <div className="feature-card">
            <div className="feature-text-left">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
            <div className="feature-gif">
                <video autoPlay loop muted controls={false}>
                    <source src={componentVid} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
