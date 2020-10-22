import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../assets/slideimages/slide1.png';
import slide2 from '../assets/slideimages/slide2.png';
import slide3 from '../assets/slideimages/slide3.png';

const slideImages = [
  slide1,
  slide2,
  slide3,
];

export default function GettingStarted() {
  return (

    <div id='getting-started' className='getting-started light-background'>
      <h1 id="getting-started-anchor">Getting Started</h1>
      <div className='inner'>
        <ul className='listItems'>
          <li>1. npm install recoilize</li>
          <li>2. import recoilize debugger</li>
          <li>3. implement {"<"}RecoilizeDebugger{">"}</li>
        </ul>
        <div className='slide-container'>
        <Fade id='slide' easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Fade>
        </div>
      </div>
      <p>For more information on getting started visit our <a href='https://github.com/open-source-labs/Recoilize' target='blank'>GitHub</a></p>
    </div>
  )
}
