import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';
import {PlaygroundRender} from './Components/PlaygroundSection';

const root = document.getElementById('root');

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  root
);

// A second ReactDOM.render is necessary so that the Recoilize Dev Tool only shows the state for the playground. This rerender must happen after the first render at root otherwise the id of 'playground-container' will be undefined.

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger root = {document.getElementById('playground-container')}/>
    <PlaygroundRender />
  </RecoilRoot>,
  document.getElementById('playground-container')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();