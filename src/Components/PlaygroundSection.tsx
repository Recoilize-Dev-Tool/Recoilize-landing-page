import React from 'react';
import Playground from './Playground/Playground';

export default function PlaygroundSection() {
    return (
        <div>
            <h2 id="hash-ancor" className='section-title-left'>#Playground</h2>
            <h3 className='section-subtitle'>This is where you can try out our dev tool</h3>
            <div id='playground-section'>
                <Playground />
            </div>
        </div>
    )
}