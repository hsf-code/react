import React, { PureComponent } from 'react';


/**
 * 组件中错误的捕捉：
 *    错误类型：
 *      1、事件处理错误；
 *      2、异步代码错误；
 *      3、服务端渲染；
 *      4、它自身抛出的错误；
 * 在react中使用：
 *      static getDerivedStateFromError 捕捉错误来源，渲染错误页面；
 *      componentDidCatch 接收错误信息
 *
 * 注意：
 *    错误边界仅可以捕获其子组件的错误
 *
 * */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;