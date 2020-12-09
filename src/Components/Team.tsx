import React, {useState, useEffect} from 'react';
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
import janis from '../assets/janis.png';
import edward from '../assets/edward.png';
import jaime from '../assets/jaime.png';
import Anthony from '../assets/anthonyM.png';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

interface Person {
    src: string;
    alt: string;
    name: string;
    linkedin: string;
    github: string;
}

export default function Team() {
    // currentSlide is to keep track of what slide page we're on in the carousel
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // when the component mounts,
    // set an interval to change the contributers slide every 5 seconds
    useEffect(() => {
        setInterval(() => {
            setCurrentSlide((prevSlide) => {
                if (prevSlide >= carousel.length - 1) {
                    return 0;
                }
                return prevSlide + 1
            })
        }, 5000);
    }, [])

    // ! To add yourself to the website:
    //     1. import your image (png)
    //     2. create a Person object in the pictures array
    //     3. refresh your page
    //     4. Done!    
    const pictures: Person[] = [
        {
            src : Anthony,
            alt : 'Anthony',
            name: 'Anthony Magallanes',
            linkedin : 'https://www.linkedin.com/in/anthony-magallanes/',
            github : 'https://github.com/amagalla'
        },
        {
            src : jaime,
            alt : 'jaime',
            name: 'Jaime Baik',
            linkedin : 'https://www.linkedin.com/in/jaime-baik/',
            github : 'https://github.com/jaimebaik'
        },
        {
            src : janis,
            alt : 'janis',
            name: 'Janis Hernandez Aguilar',
            linkedin : 'https://www.linkedin.com/in/janis-h/',
            github : 'https://github.com/Janis-H'
        },
        {
            src : edward,
            alt : 'edward',
            name: 'Edward Shei',
            linkedin : 'https://www.linkedin.com/in/edwardshei/',
            github : 'https://github.com/calibeach'
        },
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

    // carousel is an array of Person subArrays
    // each subArray is an object of people
    const carousel: Person[][] = [];

    // slide length is the number of people per 'slide' 
    // at the bottom of the website
    // ! NOTE: if you change this number,
    // ! you have to change the number of 
    // ! grid-template-columns and grid-template-areas
    // ! in .grid-container (in the Team.scss file) 
    const SLIDE_LENGTH = 6;

    let count = 0
    let picSubArr: Person[] = [];
    for (let i = 0; i < pictures.length; i += 1) {
        // if count is equal to slide length
        if (count === SLIDE_LENGTH) {
            // reassign count to 0
            count = 0;
            // push subArr into carousel
            carousel.push(picSubArr);
            // empty subarr
            picSubArr = [];
        }
        // push current picture into subArr
        picSubArr.push(pictures[i]);
        // increment count
        count++;
    }
    carousel.push(picSubArr);
    
    return (
            <div className="light-background" id="contributor-anchor">
                <h2 className="section-title-center">Contributors</h2>
                <div id="contributor-pictures" className="grid-container">
                { carousel[currentSlide].map((pic, i) => {
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
                })}</div>
            </div>
    )
}
