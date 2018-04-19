import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import MainRoutes from 'routes';
import registerServiceWorker from './registerServiceWorker';
import { ProgressBar, progressBarFetch, setOriginalFetch} from 'react-fetch-progressbar';
import './index.css';


const config = {
    apiKey: "AIzaSyAUaFRLKB53S3diCShNb99X6_V7o0Kg7CA",
    authDomain: "bitget-61a45.firebaseapp.com",
    databaseURL: "https://bitget-61a45.firebaseio.com",
    projectId: "bitget-61a45",
    storageBucket: "bitget-61a45.appspot.com",
    messagingSenderId: "1004375743165"
  };
firebase.initializeApp(config);
setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

ReactDOM.render(
    <div> 
        <ProgressBar/>
        <MainRoutes />
    </div>, 
document.getElementById('root'));
registerServiceWorker();
