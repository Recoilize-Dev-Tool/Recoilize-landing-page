import '../index.scss';
import React from 'react';
import Github from '../assets/github-logo.svg';
import Linkedin from '../assets/linkedin-logo.svg';


export default function Navbar() {

  return (  
    <nav className='nav-bar'>
      <div id='nav-left' className="fade-in" >  
        <ul>
          <li><a href="#Landing">Home</a></li>
          <li><a href="#contributor-anchor">Contributors</a></li>
          <li><a href="#playground-section">Playground</a></li>
        </ul>
      </div>
      <div id='nav-right'>
        <ul>
          <li><a href="https://www.linkedin.com/company/recoilize/" target='blank'><img id="linkedin-logo" src={Linkedin} alt="link to linkedin"/></a></li>
          <li><a href="https://github.com/open-source-labs/Recoilize" target='blank'><img id="github-logo" src={Github} alt="link to github"/></a></li>
        </ul>
      </div>
    </nav>
    )
}
    