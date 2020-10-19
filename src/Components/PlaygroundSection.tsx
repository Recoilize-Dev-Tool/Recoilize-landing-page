import React from 'react';
import {useRecoilValue} from 'recoil';
import Playground from './Playground/Playground';
import PlaygroundStart from './Playground/PlaygroundStart';
import {playStart} from './Store/Atoms';

export default function PlaygroundSection() {

const play = useRecoilValue(playStart)
 
return (
    <div className="main-section" id="playground-section">
        <h1>Give it a try!</h1>
        <div id="playground-container">
        { play ? <Playground /> : <PlaygroundStart />}
        </div>
    </div>
)
}