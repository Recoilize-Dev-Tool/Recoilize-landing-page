import React from 'react'

export default function ProductDownload() {
  return (
    <div className='Product'>
      <div className='inner'>
        <h2  className="section-title-center" style={{ color:  "#8d93ab" }}>A Chrome extension that helps debug Recoil applications by memorizing the state of components with every render.</h2 >
        <div className='buttons'>
           <a href='' className='button'>Get Started</a>
           <a href='https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik?hl=en' target='_blank' className='button'>Download</a>
        </div>
        <p>Recoil debugging tool to help developers log state change, travel back to previous 
          state, and visualize their recoil-based applications.
        </p>
      </div>
    </div>
  )
}
