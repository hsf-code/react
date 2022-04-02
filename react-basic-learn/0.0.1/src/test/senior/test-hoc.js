import React, { PureComponent, Fragment } from 'react';


/**
 * hoc 高阶组件
 * 高阶组件是参数为组件，返回值为新组件的函数。
 *    主要原理在函数中做一些，然后返回一个组件
 *
 *  使用原则：
 *      1、HOC 为组件添加特性。自身不应该大幅改变约定。HOC 返回的组件与原组件应保持类似的接口。
 *      2、HOC 应该透传与自身无关的 props。
 * */
class TestHoc extends PureComponent{

  render() {
    return(
        <Fragment>
          2222
        </Fragment>
    )
  }
}

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}

export default TestHoc;