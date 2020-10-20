import React from 'react';
import {useRecoilValue} from 'recoil';
import Playground from './Playground/Playground';
import PlaygroundStart from './Playground/PlaygroundStart';
import {playStart} from './Store/Atoms';
import TicTacToe from './Playground/TicTacToe';

export default function PlaygroundSection() {

const play = useRecoilValue(playStart)
 
return (
    <div className="dark-background" id="playground-section">

        <h2 className="section-title-center">Give it a try!</h2>

        <div id="playground-container">
        { play ? <TicTacToe /> : <PlaygroundStart />}
        </div>
    </div>
)
}