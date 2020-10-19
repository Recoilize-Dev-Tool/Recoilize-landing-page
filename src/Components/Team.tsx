import React from 'react';
import saejin from '../assets/saejin.png';
import davide from '../assets/davide.png';
import jones from '../assets/jones.png'
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


const linkedinIcon = <a href=""><FontAwesomeIcon icon={faLinkedin} className="social-icons"/></a>
const github = <a href=""><FontAwesomeIcon icon={faGithubSquare} className="social-icons"/></a>

export default function Team() {
    const pictures = [
        { 
            src : saejin,
            alt : 'saejin',
        },
        {
            src : jones,
            alt : 'jones'
        },
        {
            src : bren,
            alt : 'bren'
        },
        {
            src : sean,
            alt : 'sean'
        },
        {
            src : henry,
            alt : 'henry'
        },
        {
            src : steven,
            alt : 'steven'
        },
        {
            src : spenser,
            alt : 'spenser'
        },
        {
            src : seungho,
            alt : 'seungho'
        },
        {
            src : justin,
            alt : 'justin'
        },
        {
            src : anthony,
            alt : 'anthony'
        },
        {
            src : aaron,
            alt : 'aaron'
        },
        {
            src : jesus,
            alt : 'jesus'
        },
        {
            src : taven,
            alt : 'taven'
        },
        {
            src : davide,
            alt : 'davide'
        }
    ];

    return (
        <div>
            <h2 className="section-title-right">Contributors</h2>
            <div id="contributor-pictures" className="grid-container">
                {pictures.map((pic, i) => {
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
