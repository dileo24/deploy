import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
//import axios from "axios";

/* axios.defaults.baseURL = 'http://localhost:3001';//servidor local */
//axios.defaults.baseURL = 'https://pi-dogs-dileo.up.railway.app/';//servidor deployado

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
