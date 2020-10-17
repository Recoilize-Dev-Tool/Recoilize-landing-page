import '../index.css';
import React from 'react';
import Github from '../assets/github-logo.svg';
import Linkedin from '../assets/linkedin-logo.svg';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
// {`${FaLinkedin}`}
// {`${FaGithub}`}

export default function Navbar() {
    return (  
        <div className="fade-in">  
                <ul>
                    <li><a href="https://www.google.com">Team</a></li>
                    <li><a href="#hash-ancor">Playground</a></li>
                </ul>
                <ul>
                    {/* fix the links, these should go to the corresponding social media site */}
                    <li><a href="https://www.linkedin.com/company/recoilize/" target='_blank'><img id="linkedin-logo" src={ Linkedin }alt="link to linkedin"/></a></li>
                    <li><a href="https://github.com/open-source-labs/Recoilize" target='_blank'><img id="github-logo" src={ Github } alt="link to github"/></a></li>
                </ul>
        </div>
    )
}
    