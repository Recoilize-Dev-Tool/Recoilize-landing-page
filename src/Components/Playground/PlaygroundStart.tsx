import React from 'react';
import {useSetRecoilState} from 'recoil';
import {playStart} from '../Store/Atoms';

export default function PlaygroundStart() {

  const triggerPlay = useSetRecoilState(playStart)

  return (
    <div id="playground-start">
      <p>This playground, and even this entire webiste, is built using Recoil!</p>
      <p>Download the Recoilize Dev Tool in the Google Chrome Store and try it out here.</p>
      <div>
      <button type="button" className="btn btn-primary btn-lg" onClick={()=>window.open('https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik?hl=en')}>Download</button>
      <button type="button" className="btn btn-secondary btn-lg" onClick={()=>triggerPlay(true)}>Play</button>
      </div>
    </div>
  )
}