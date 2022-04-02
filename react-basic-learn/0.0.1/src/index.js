/**
 * 核心包：
 *    承载组件的数据的存储与交互
 * */
import React from 'react';
/**
 * dom 渲染包 对于pc 和 phone 的渲染的结果，有所不同
 * */
import ReactDOM from 'react-dom';

// 其他混入
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/**
 * program entry
 *   <App /> 组件 jsx 语法
 *    <React.StrictMode> 组件
 * */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/**
 *  对于react来说，template in js ，存在与高度耦合，
 *  对于组件来说就是一个js 的 object，写成<App />，其实是babel在其中充当着关键，
 *  jsx语法就是babel进行解析
 *
 * */
