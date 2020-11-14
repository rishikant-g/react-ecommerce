import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js'
import reportWebVitals from './reportWebVitals';
import MyStore from "./Store/Store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={MyStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
