import React from 'react';
import {useRecoilValue} from 'recoil';

import PlaygroundStart from './Playground/PlaygroundStart';
import {playStart} from './Store/Atoms';
import TicTacToe from './Playground/TicTacToe';


export function PlaygroundRender () {
    const play = useRecoilValue(playStart)
    return (
        <>
        { play ? <TicTacToe /> : <PlaygroundStart />}
        </>
    )
}


export default function PlaygroundSection() {

return (
    <div className="dark-background" id="playground-section">

        <h2 className="section-title-center">Give it a try!</h2>

        <div id="playground-container"></div>
    </div>
)
}