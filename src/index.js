import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img from './assets/global-gallery-banner.JPG'
import Card from './card.js';


ReactDOM.render(
  <React.StrictMode>
    <App title="GLOBAL GALLERY"  />
    <Card title="World top" img={img}></Card>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
