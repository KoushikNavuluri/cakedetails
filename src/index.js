import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import MyRouter from './components/MyRouter';
import CakeList from './components/CakeList';
import { Carousel } from 'bootstrap';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import Reebookstore from "./reduxstore/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Reebookstore}>
    <MyRouter />

 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
