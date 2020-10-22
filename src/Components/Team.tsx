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

export default function Team() {
    const pictures = [
        {
            src : aaron,
            alt : 'aaron',
            name: 'Aaron Yang',
            linkedin : 'https://www.linkedin.com/in/aaronyang24/',
            github : 'https://github.com/aaronyang24'
        },
        {
            src : jesus,
            alt : 'jesus',
            name: 'Jesus Vargas',
            linkedin : 'https://www.linkedin.com/in/jesus-modesto-vargas/',
            github : 'https://github.com/jmodestov'
        },
        {
            src : taven,
            alt : 'taven',
            name: 'Taven Shumaker',
            linkedin : 'https://www.linkedin.com/in/taven-shumaker/',
            github : 'https://github.com/TavenShumaker'
        },
        {
            src : davide,
            alt : 'davide',
            name: 'Davide Molino',
            linkedin : 'https://www.linkedin.com/in/davide-molino/',
            github : 'https://github.com/davidemmolino'
        },
        {
            src : henry,
            alt : 'henry',
            name: 'Henry Taing',
            linkedin : 'https://www.linkedin.com/in/henrytaing/',
            github : 'https://github.com/henrytaing'
        },
        {
            src : steven,
            alt : 'steven',
            name: 'Steven Nguyen',
            linkedin : 'https://github.com/Steven-Nguyen-T',
            github : 'https://www.linkedin.com/in/steven-nguyen-t/'
        },
        {
            src : spenser,
            alt : 'spenser',
            name: 'Spenser Schwartz',
            linkedin : 'https://www.linkedin.com/in/spenser-schwartz/',
            github : 'https://github.com/spenserschwartz'
        },
        {
            src : seungho,
            alt : 'seungho',
            name: 'Seungho Baek',
            linkedin : 'https://www.linkedin.com/in/s2unghobaek/',
            github : 'https://github.com/hobaek'
        },
        {
            src : justin,
            alt : 'justin',
            name: 'Justin Choo',
            linkedin : 'https://www.linkedin.com/in/justinchoo93/',
            github : 'https://github.com/justinchoo93'
        },
        {
            src : anthony,
            alt : 'anthony',
            name: 'Anthony Lin',
            linkedin : 'https://www.linkedin.com/in/anthony-lin/',
            github : 'https://github.com/anthonylin198'
        },
        { 
            src : saejin,
            alt : 'saejin',
            name: 'Saejin Kang',
            linkedin : 'https://github.com/skang1004',
            github : 'https://www.linkedin.com/in/saejinkang1004/'
        },
        {
            src : jonathan,
            alt : 'jonathan',
            name: 'Jonathan Escamilla',
            linkedin : 'https://www.linkedin.com/in/jon-escamilla/',
            github : 'https://github.com/jonescamilla'
        },
        {
            src : bren,
            alt : 'bren',
            name: 'Bren Yamaguchi',
            linkedin : 'https://www.linkedin.com/in/brenyamaguchi/',
            github : 'https://github.com/brenyama'
        },
        {
            src : sean,
            alt : 'sean',
            name: 'Sean Smith',
            linkedin : 'https://www.linkedin.com/in/sean-smith17/',
            github : 'https://github.com/SmithSean17'
        }
    ];

    return (
        <div className="light-background" id="contributor-anchor">
            <h2 className="section-title-center">Contributors</h2>
            <div id="contributor-pictures" className="grid-container">
                {pictures.map((pic, i) => {
                    const linkedinIcon = <div><a href={ pic.linkedin } target="blank" ><FontAwesomeIcon icon={faLinkedin} className="social-icons linkedin"/></a></div>
                    const github = <div><a href={ pic.github } target="blank" ><FontAwesomeIcon icon={faGithubSquare} className="social-icons github"/></a></div>

                    return (
                        <div className="individual-pic-container">
                            <div className="grid-flex">
                                <img src={pic.src} alt={pic.alt} key={`${pic.alt}-${i}`} className="contributor" />
                            </div>
                            <p>{ pic.name }</p>
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
