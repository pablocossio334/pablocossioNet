import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD_4Vi4zTb9a_QMeR2k8BGLdfXl6xqpDUk",

  authDomain: "pablocossio-91dd6.firebaseapp.com",

  projectId: "pablocossio-91dd6",

  storageBucket: "pablocossio-91dd6.appspot.com",

  messagingSenderId: "1050812381934",

  appId: "1:1050812381934:web:1b530a60011eb5726d91ff",

  measurementId: "G-NEYE9FED20"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>
   
    <App />

  </React.StrictMode>,
)
