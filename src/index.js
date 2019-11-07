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
import {BrowserRouter} from 'react-router-dom'
axios.interceptors.response.use(res => {
    console.log('======='+res.config.url+'========')
    console.log(res)
    if(res.data.code==-1){
        window.open('http://localhost:3000/login','_self')
        res.data.data = []
        return res
    }
    return res
});

Component.prototype.$axios = axios
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// var file = e.target.files[0];
// var reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onload = result => {
// this.url = result.target.result;
// };
