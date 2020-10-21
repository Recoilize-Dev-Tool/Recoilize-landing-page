import React from 'react'
import { Slide } from 'react-slideshow-image';
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
      <h1>Getting Started</h1>
      <div className='inner'>
        <ul className='listItems'>
          <li>1. npm install recoilize</li>
          <li>2. import recoilize debugger</li>
          <li>3. implement {"<"}RecoilizeDebugger{">"}</li>
        </ul>
        <div>
        <Slide id='slide' easing="ease">
          <div className="each-slide">
            <div className='solo-slide' style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className='solo-slide' style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
        </div>
      </div>
      <p>For more information on getting started visit our <a href='https://github.com/open-source-labs/Recoilize' target='blank'>GitHub</a></p>
    </div>
  )
}
