import '../index.scss';
import React from 'react';
import Github from '../assets/github-logo.svg';
import Linkedin from '../assets/linkedin-logo.svg';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// {`${FaLinkedin}`}
// {`${FaGithub}`}

export default function Navbar() {
  return (  
    <nav className='nav'>
      <div id='nav-left' className="fade-in" >  
        <ul>
          <li><a href="/src/index.tsx">Home</a></li>
          <li><a href="#contributor-pictures">Team</a></li>
          <li><a href="#playground-section">Playground</a></li>
        </ul>
      </div>
      <div id='nav-right'>
        <ul>
          <li><a href="https://www.linkedin.com/company/recoilize/" target='_blank'><img id="linkedin-logo" src={Linkedin} alt="link to linkedin"/></a></li>
          <li><a href="https://github.com/open-source-labs/Recoilize" target='_blank'><img id="github-logo" src={Github} alt="link to github"/></a></li>
        </ul>
      </div>
    </nav>
    )
}
    