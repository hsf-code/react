import React, { useState,useEffect } from 'react';

/**
 * hooks:
 *    Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。
 *    注意：
 *        Hook 不能在 class 组件中使用
 *
 *   api-hook
 *    1、state-hook
 *        useState 初始化state，并且可以修改state（针对于单个state属性）
 *        useState：
 *            参数：就是你需要初始化，state中变量的初始值
 *                 单次声明并赋值一个state的变量
 *            返回值：
 *                  [ stateVar, setStateHandler ]
 *
 *    2、effect-hook （副作用的钩子）
 *        其实我可以执行一些操作，达到一些目的；
 *        useEffect：
 *            第一次渲染后会调用，每次更新的时候也会调用；
 *            相当于 componentDidMount 和 componentDidUpdate、componentWillUnmount  钩子
 *          参数：
 *             1、第一位是回调函数（需要执行的函数和这几个钩子函数一样，componentDidMount 和 componentDidUpdate）
 *                在特定时机去执行（第一次渲染之后和每次更新之后都会执行）
 *          返回值：
 *             如果有，react 会在组件卸载的时候执行清除操作，执行你的返回值；
 *             其实例如：
 *                当我们在组件中设置一个定时器，然后在组件卸载的时候，去清除定时器；
 *
 *     还有很多的hook
 *
 * 自定义hook：
 *    1、自定义hook你需要使用use开头，
 *    2、hook之间的调用，作用域是完全独立的，
 *
 * */
// function Example() {
//   // 声明一个叫 “count” 的 state 变量。
//   const [count, setCount] = useState(0);
//
//   return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//   );
// }

//  等价的示例
// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//
//   render() {
//     return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//     );
//   }
// }



function HookExample() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
  );
}

export default HookExample;