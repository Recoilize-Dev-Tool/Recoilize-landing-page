import React from 'react';
import Logo from '../assets/recoilize-gray-01.png';

export default function LandingPage() {
    return (
        <div id="landing" className="fade-in">
            <img src={Logo} alt="Recoilize logo"/>
            <div>
                <h1>Recoilize 1.0</h1>
                <h2 id='italic'>What is Recoilize all about?</h2>
            </div>
            <h2 className="fade-in-later">Recoilize is a Chrome Dev Tool meant for debugging applications built with the experimental Recoil.js state management library.
            <br/>
            <br/>
            The tool records Recoil state and allows users to easily debug their applications with features such as visualization of the component graph <br/>
            and time traveling to previous states.</h2>
        </div>
    )
}