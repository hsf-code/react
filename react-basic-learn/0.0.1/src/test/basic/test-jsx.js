import React, { Component } from 'react';

/**
 * 为何使用jsx：
 *    React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，
 *    jsx可以当作变量使用
 *    { } 在jsx你是可以放入js的表达式，但是不可以放入赋值语句
 *       表达式：变量，三元运算符，函数等等；
 *    注意：
 *      所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，
 *      而不使用 HTML 属性名称的命名约定。
 *          例如：className
 * */
function name(str){
  if(str){
    return <div>{ str + 'hsf' }</div>;
  }

  return null;
}
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    '你好，李银河！'
);
let  welcome = <div>欢迎使用react!</div>
class TestJsx extends  Component{
  render() {
    // return(
    //   <div>
    //     { welcome  }{name('通过')}
    //   </div>
    //
    // )
    return element;
  }
}

/**
 *  Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
 * */
export default  TestJsx;