import React from 'react';
import saejin from '../assets/saejin.png'
import davide from '../assets/davide.png'

export default function Team() {
    const pictures = [
        // <img src={`${saejin}`} alt="no"/>,
        // <img src={`${davide}`} alt="yes"/>
        { 
            src : '../assets/saejin.png',
            alt : 'saejin'
        },
        {
            src : '../assets/jones.png',
            alt : 'jones'
        },
        {
            src : '../assets/bren.png',
            alt : 'bren'
        },
        {
            src : '../assets/sean.png',
            alt : 'sean'
        },
        {
            src : '../assets/henry.png',
            alt : 'henry'
        },
        {
            src : '../assets/steven.png',
            alt : 'steven'
        },
        {
            src : '../assets/spenser.png',
            alt : 'spenser'
        },
        {
            src : '../assets/seungho.png',
            alt : 'seungho'
        },
        {
            src : '../assets/justin.png',
            alt : 'justin'
        },
        {
            src : '../assets/anthony.png',
            alt : 'anthony'
        },
        {
            src : '../assets/aaron.png',
            alt : 'aaron'
        },
        {
            src : '../assets/jesus.png',
            alt : 'jesus'
        },
        {
            src : '../assets/taven.png',
            alt : 'taven'
        },
        {
            src : '../assets/davide.png',
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
