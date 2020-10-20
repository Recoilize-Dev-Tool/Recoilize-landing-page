import React from 'react';
import {useRecoilValue} from 'recoil';
import Playground from './Playground/Playground';
import PlaygroundStart from './Playground/PlaygroundStart';
import {playStart} from './Store/Atoms';

export default function PlaygroundSection() {

const play = useRecoilValue(playStart)
 
return (
    <div>
        <h1>Give it a try!</h1>

        <h2 className="section-title-center">Give it a try!</h2>

        <div id="playground-container">
        { play ? <Playground /> : <PlaygroundStart />}
        </div>
    </div>
)
}