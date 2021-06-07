import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireFree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireFree(store.getState());

store.subscribe(rerenderEntireFree);



