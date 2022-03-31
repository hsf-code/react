import React from "react";
/**
 * 生命周期:（目前是基于类组件）
 *      让外部代码知道，当前的状态，这些钩子函数，都是React.Component中自带的
 *      顺序：
 *          1、constructor:
 *              使用规则：
 *                1、如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
 *              注意：
 *                1、如果使用constructor，实现super，实例化父组件，但是你需要将props用父组件保存，
 *                  否则，this.props 在构造函数中可能会出现未定义的 bug。
 *                2、在这个里面不需要使用setState方法，其实原因是在为state赋初始值，只有构造函数可以直接赋值，
 *                  其他的地方你需要使用setSate方法，
 *                3、state的状态不要和props相关连（避免产生副作用），因为修改了props并不会修改state的状态，
 *                    如果想更新state的状态，要经过setSate；
 *
 *          2、getDerivedStateFromProps
 *              1、在初始化挂载和更新的时候都会调用，根据props的值去判断是否更新state的状态
 *              2、此方法无权访问组件实例undefined
 *
 *          3、shouldComponentUpdate
 *              1、初始化渲染的时候，是不会调用的，其次使用forceUpdate（）也不会调用；
 *              2、props、state 更新的时候，会被调用，根据其返回值去判别是否需要去更新组件（默认是返回true。返回false不更新）
 *              3、如果做一些组件的渲染的性能优化也可选，但是最好使用内置的PureComponent组件；
 *            注意：
 *                在这个钩子函数中，不建议使用JSON.stringify()，影响性能
 *
 *          4、render（组件必须实现）
 *             这里返回需要渲染的，模版
 *
 *          5、getSnapshotBeforeUpdate
 *             获取最近一次更新的快照（也就是可以获取到上一次的state，props）
 *             返回值snapshot 的值（或 null）。
 *
 *          6、componentDidUpdate(prevProps, prevState, snapshot)
 *             组件首次挂载是不会触发的
 *             组件更新，snapshot 是getSnapshotBeforeUpdate函数的返回值；
 *
 *          7、componentDidMount()
 *             组件首次挂载
 *
 *          8、componentWillUnmount()
 *            组件将要卸载
 *
 *   目前的常用的钩子函数，还有一些函数也是钩子函数，应该避免使用
 * */
class TestLifeCycle extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name: 'hsf' }
    console.log('constructor')
  }
 static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps', props, state, this)
   return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate', prevState)
    return 333;
  }

  // 组件已经挂载
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        name: 'aaa'
      })
    }, 2000)
    console.log('组件已经挂载！componentDidMount')
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate', prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('组件将要卸载！componentWillUnmount')
  }

  render() {
    console.log('render 函数')
    return(
      <div>{ this.state.name }</div>
    )
  }
}

export default TestLifeCycle;