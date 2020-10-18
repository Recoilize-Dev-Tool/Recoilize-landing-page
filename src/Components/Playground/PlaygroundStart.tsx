import React from 'react';
import {useSetRecoilState} from 'recoil';
import {playStart} from '../Store/Atoms';

export default function PlaygroundStart() {

  const triggerPlay = useSetRecoilState(playStart)

  return (
    <div id="PlaygroundStart">
      <p>This playground, and even this entire webiste, is built with Recoil. Download the Recoilize Dev Tool in the Google Chrome Store and try it out here.</p>
      <div>
      <button>Download</button>
      <button onClick={()=>triggerPlay(true)}>Play</button>
      </div>
    </div>
  )
}