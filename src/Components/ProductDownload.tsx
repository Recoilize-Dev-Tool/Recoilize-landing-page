import React from 'react'

export default function ProductDownload() {
  return (
    <div id='Product' className='Product light-background'>
      <div className='inner'>
        <h2 style={{ color:  "#393b44" }}>A Chrome extension that helps debug Recoil applications by memorizing the state of components with every render.</h2 >
        <div className='buttons'>

           <a href='#getting-started-anchor'><button className="grey-button btn-left">Get Started</button></a>
           <button className="grey-button btn-right" onClick={()=>window.open('https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik?hl=en')}>Download</button>

        </div>
        <p>Recoil debugging tool to help developers log state change, travel back to previous 
          state, and visualize their recoil-based applications.
        </p>
      </div>
    </div>
  )
}
