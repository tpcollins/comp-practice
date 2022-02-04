import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"; // How to import boot strap in index.js after installing ( npm i bootstrap@5.1.3)

ReactDOM.render( // Render element allows for useability of whatever component is passed in to the <React.StrictMode> tag
                 // Whatever is in "<React.StrictMode />" is what is going to be rendered. This is how you build your component tree.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
