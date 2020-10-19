import React from 'react';
import saejin from '../assets/saejin.png';
import davide from '../assets/davide.png';
import jonathan from '../assets/jones.png'
import bren from '../assets/bren.png';
import aaron from '../assets/aaron.png';
import taven from '../assets/taven.png';
import jesus from '../assets/jesus.png';
import steven from '../assets/steven.png';
import spenser from '../assets/spenser.png';
import justin from '../assets/justin.png';
import anthony from '../assets/anthony.png';
import henry from '../assets/henry.png';
import seungho from '../assets/seungho.png';
import sean from '../assets/sean.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { link } from 'fs';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';

export default function Team() {
    const pictures = [
        { 
            src : saejin,
            alt : 'saejin',
            linkedin : 'https://github.com/skang1004',
            github : 'https://www.linkedin.com/in/saejinkang1004/'
        },
        {
            src : jonathan,
            alt : 'jonathan',
            linkedin : 'https://www.linkedin.com/in/jon-escamilla/',
            github : 'https://github.com/jonescamilla'
        },
        {
            src : bren,
            alt : 'bren',
            linkedin : 'https://www.linkedin.com/in/brenyamaguchi/',
            github : 'https://github.com/brenyama'
        },
        {
            src : sean,
            alt : 'sean',
            linkedin : 'https://www.linkedin.com/in/sean-smith17/',
            github : 'https://github.com/SmithSean17'
        },
        {
            src : henry,
            alt : 'henry',
            linkedin : 'https://www.linkedin.com/in/henrytaing/',
            github : 'https://github.com/henrytaing'
        },
        {
            src : steven,
            alt : 'steven',
            linkedin : 'https://github.com/Steven-Nguyen-T',
            github : 'https://www.linkedin.com/in/steven-nguyen-t/'
        },
        {
            src : spenser,
            alt : 'spenser',
            linkedin : 'https://www.linkedin.com/in/spenser-schwartz/',
            github : 'https://github.com/spenserschwartz'
        },
        {
            src : seungho,
            alt : 'seungho',
            linkedin : 'https://www.linkedin.com/in/s2unghobaek/',
            github : 'https://github.com/hobaek'
        },
        {
            src : justin,
            alt : 'justin',
            linkedin : 'https://www.linkedin.com/in/justinchoo93/',
            github : 'https://github.com/justinchoo93'
        },
        {
            src : anthony,
            alt : 'anthony',
            linkedin : 'https://www.linkedin.com/in/anthony-lin/',
            github : 'https://github.com/anthonylin198'
        },
        {
            src : aaron,
            alt : 'aaron',
            linkedin : 'https://www.linkedin.com/in/aaron-yang-393616160/',
            github : 'https://github.com/aaronyang24'
        },
        {
            src : jesus,
            alt : 'jesus',
            linkedin : 'https://www.linkedin.com/in/jesus-modesto-vargas/',
            github : 'https://github.com/jmodestov'
        },
        {
            src : taven,
            alt : 'taven',
            linkedin : 'https://www.linkedin.com/in/taven-shumaker/',
            github : 'https://github.com/TavenShumaker'
        },
        {
            src : davide,
            alt : 'davide',
            linkedin : 'https://www.linkedin.com/in/davide-molino/',
            github : 'https://github.com/davidemmolino'
        }
    ];

    return (
        <div>
            <h2 className="section-title-right">Contributors</h2>
            <div id="contributor-pictures" className="grid-container">
                {pictures.map((pic, i) => {
                    const linkedinIcon = <a href={ pic.linkedin }><FontAwesomeIcon icon={faLinkedin} className="social-icons linkedin"/></a>
                    const github = <a href={ pic.github } target="_blank" ><FontAwesomeIcon icon={faGithubSquare} className="social-icons github"/></a>

                    return (
                        <div>
                            <div>
                                <img src={pic.src} alt={pic.alt} key={`${pic.alt}-${i}`} className="contributor" />
                            </div>
                            <div className="flex-container">
                                { linkedinIcon }
                                { github }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
