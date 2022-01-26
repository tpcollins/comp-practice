import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"; // How to import boot strap in index.js after installing ( npm i bootstrap@5.1.3)
import Counters from './Components/counters'; // Importing counter component; Counter is a default export so no need for curly braces

ReactDOM.render( // Render element allows for useability of whatever component is passed in to the <React.StrictMode> tag
                 // Where "Counter" is typically says "App." By passing "Counter" into the statement, instead of rendering the default react app, it will now render the new Counter -
                 // - element. This will get the output of the component. Determined by what is what is returned from the render method in counter module
  <React.StrictMode>
    <Counters /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
