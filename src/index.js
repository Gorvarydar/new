import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Mmm,Hi...', counts: 5},
  { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
  { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
]
let messages = [
  { id: 1, text: 'What`s uuuuuuup!!!!' },
  { id: 2, text: 'Niiiice!!!!' },
  { id: 3, text: 'Yeahhhhh...' },
  { id: 4, text: 'YO!!!' },
]

let dialogs = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' },
  { id: 4, name: 'fourth' }
]

ReactDOM.render(
  <React.StrictMode>
    
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
