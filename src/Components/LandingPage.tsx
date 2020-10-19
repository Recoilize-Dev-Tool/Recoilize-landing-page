import React from 'react';
import Logo from '../assets/recoilize-gray-01.png';

export default function LandingPage() {
    return (
        <div id="Landing" className="fade-in">
          <div id='inner'>
            <h1>Recoilize<img src={Logo} alt="Recoilize logo"/></h1>
            <p id='italic'>Development Tool for Recoil</p>
          </div>
        </div>
    )
}