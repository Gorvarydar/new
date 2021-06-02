/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
 import {addPost} from './redux/state'
 import {updateNewPostText} from './redux/state'
 import {addDialog} from './redux/state'
 import {updateDialog} from './redux/state'

 export  let rerenderEntireTree = (state) => {

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
  

