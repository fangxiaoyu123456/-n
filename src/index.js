import React,{Component} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//reset.css
import './assets/css/reset.css'
//rem.js
import './assets/js/rem'
//ant Design
import 'antd/dist/antd.css';
//路由
import {HashRouter} from 'react-router-dom'
Component.prototype.$axios = axios
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
