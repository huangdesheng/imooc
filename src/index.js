/*
   React是 React 的核心库，
   ReactDOM 是提供与 DOM 相关的功能，

*/
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';      css可以删掉

//引入App.js这个组件
import Admin from './admin';
import 'antd/dist/antd.css'

//不用管  加快react运行速度的一个js文件
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));


registerServiceWorker();
