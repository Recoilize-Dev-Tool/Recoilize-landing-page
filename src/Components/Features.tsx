import TimeTravelSection from './Features/TimeTravelSection';
import MetricsSection from './Features/MetricsSection';
import NetworkSection from './Features/NetworkSection';
import ComponentGraphSection from './Features/ComponentGraphSection';
import AppStateSection from './Features/AppStateSection';
import React from 'react';

export default function Features() {
    return (
        <div>
            <MetricsSection />
            <NetworkSection />
            <ComponentGraphSection />
            <AppStateSection />
        </div>
    )
}

