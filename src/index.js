import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Flex } from '@material-ui/core';
import App from "./App.js";

ReactDOM.render(
  <div>
    <h1>To Do App</h1>
    <div>
      <a href="https://kde-space.github.io/TO_DO_APP/index.html" target="_blank">リファレンス</a>
    </div>
    <App/>
  </div>,
  document.getElementById("root")
);

