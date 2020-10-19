import React from 'react';
import saejin from '../assets/saejin.jpeg';
import jones from '../assets/jones.png';
import bren from '../assets/bren.jpeg';
import sean from '../assets/sean.png';
import henry from '../assets/henry.jpeg';
import steven from '../assets/steven.jpeg';
import spenser from '../assets/spenser.jpeg';
import seungho from '../assets/seungho.jpeg';
import justin from '../assets/justin.jpeg';
import anthony from '../assets/anthony.png';
import aaron from '../assets/aaron.png';
import taven from '../assets/taven.png';
import jesus from '../assets/jesus.png';
import davide from '../assets/davide.png';

export default function Team() {
    const pictures = [
        { 
            src : saejin,
            alt : 'saejin'
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
            <div id="profile-pictures">
                {pictures.map((pic, i) => {
                    console.log(pic.src)
                    return <img src={pic.src} alt={pic.alt} key={`${pic.alt}-${i}`} />
                })}
            </div>
        </div>
    )
}
