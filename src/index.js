/* eslint-disable */

import state from './redux/state'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
 import {addPost} from './redux/state'
 import {updateNewPostText} from './redux/state'
 import {addDialog} from './redux/state'
 import {updateDialog} from './redux/state'
 import {subscribe} from './redux/state'

 let rerenderEntireTree = (state) => {

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>

    <App state={state} 
    addPost={addPost} 
    updateNewPostText={updateNewPostText}
    addDialog={addDialog} 
    updateDialog={updateDialog}/> 
  </React.StrictMode>,
</BrowserRouter>,
  document.getElementById('root')
)
  }

  rerenderEntireTree(state);

  subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

