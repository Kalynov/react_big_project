import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import store, { subscribe } from './redux/reduxStore';
//import { addPost, apdatePostText } from './redux/state';
import App from './App';


let renderFullTree = (state) => {
  ReactDOM.render(
    <App
      state = {state}
      store = {store}
      dispatch = {store.dispatch.bind(store)}
     /*  apdatePostText = {store.apdatePostText.bind(store)}
      addPost = {store.addPost.bind(store)} */
    />, document.getElementById('root'));
};


renderFullTree(store.getState());
store.subscribe(()=>{
  let state = store.getState()
  renderFullTree(state);

});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
