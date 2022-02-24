import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";





const firebaseConfig = {
  apiKey: "AIzaSyBDCTxwQq1rIWPxfQiEuaBl1LlSPwg0A-Q",
  authDomain: "shadow-games-ecommerce.firebaseapp.com",
  projectId: "shadow-games-ecommerce",
  storageBucket: "shadow-games-ecommerce.appspot.com",
  messagingSenderId: "794963416105",
  appId: "1:794963416105:web:66276975e8174f9ad93838"
};
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
