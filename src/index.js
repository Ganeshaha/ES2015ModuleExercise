import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import foods from './foods';
import {choice, remove} from './helpers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
let randFruit = choice(foods());
console.log(`I' like one ${randFruit}, please `);
console.log(`Here you go: ${randFruit}`);
console.log("Delicious! May I have another");
let fruitsLeft = remove(foods(), randFruit);
console.log(`I’m sorry, we’re all out. We have ${fruitsLeft.length} left.`);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
