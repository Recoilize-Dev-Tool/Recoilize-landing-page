import React from 'react';
import metricsGif from '../../assets/interpolate.gif';

const hText: string = 'Performance Metrics';

const pText: string = 'Recoilize monitors component render times of your application and displays this data in useful ways.\n\nThe Flamegraph describes render times of each component plus its children at every level of the component tree.\n\nThe Ranked Graph describes render times for each individual component.';



export default function MetricsSection() {
    return (
        <div className="feature-card">
            <div className="feature-gif">
                <img src={ metricsGif } alt="GIF displaying graphs of render metrics"/>
            </div>
            <div className="feature-text-right">
                <h2 className="feature-heading">{hText}</h2>
                <p className="feature-paragraph">{pText}</p>
            </div>
        </div>
    )
}