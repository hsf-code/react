import React, { PureComponent } from "react";

/**
 * state
 *    1、构造函数是唯一可以给 this.state 赋值的地方。
 *    2、state的修改需要用setState方法去更新；
 *    3、state的更新可能是异步的；
 *    4、state的更新会被合并；
 *
 * setState
 *    语法：setState(updater, [callback])
 *        updater 更新器（对象或者函数）
 *        callback 回调函数 （修改state之后，会调用）
 *    作用：用来更新state，对于传入的参数的不同，底层处理的逻辑结构不一样；
 *    注意：
 *       1、setState的调用，其实并不一定立马更新state的状态；
 *       2、批量推迟更新，（在更新state之后，立马获取state的值，可能不是最新的state），解决方式（回调函数的方式，
 *       类似于vue的nextTick）；
 *       3、当你的代码中使用shouldComponentUpdate且返回值是false
 *       这个时候使用setState，组件是不会渲染,但是呢！state的状态改变了；
 *    使用：
 *        updater：
 *            1、函数：(state, props) => stateChange
 *               传入的参数state、props都是最新，返回值会合并到state中（浅合并）
 *            2、对象：{}
 *              也是一个浅合并；
 *              注意：
 *                  1、将要合并的对象，会放入一个queue中，在一个周期内，进行批量处理，
 *                    你会有什么问题呢？（依赖的state状态，不是最新的）
 *                        就是你上一个修改state状态之后，但是下一个要更改的对象中，如果依赖state的状态，
 *                        可能不是最新的state，
 *                        例如：
 *                           请看代码：
 *
 *                     解决办法：
 *                        1、使用updater是函数形式
 *                          去更改state，因为(state, props) => stateChange ，每次拿到的state和props都是最新的
 *                        2、异步函数
 *                           setTimeout、promise
 *        callback
 *            1、state合并完之后，会调用，但是一般不建议这么做，可以使用componentDidUpdate代替
 *
 *
 * */
class TestState extends PureComponent{
  constructor(props) {
    super(props);
    this.state= {
      text: '你好呀，李银河！',
      count: 1
    }
  }

  render() {
    return(
        <div>
          { this.state.text } { this.state.count  }
        </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return false
  // }

  componentDidMount() {
    // 在react 本身环境下，会批量处理state，所以每次更新中的count都是之前的1，而不是最新结果
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})

    // 通过回调的方式，拿到最新的state、props
    // this.setState((state, props)=>{
    //   return { count: state.count + 1}
    // })
    // this.setState((state, props)=>{
    //   return { count: state.count + 1}
    // })
    // this.setState((state, props)=>{
    //   return { count: state.count + 1}
    // })
    // this.setState((state, props)=>{
    //   return { count: state.count + 1}
    // })
    // this.setState((state, props)=>{
    //   return { count: state.count + 1}
    // })
    // 异步的方式拿到最新的state
    // setTimeout(()=>{
    //   console.log('dddd')
    //   this.setState({text:'hsf'}, ()=>{
    //     console.log('aaaa', this.state)
    //   })
    // }, 3000)
    // setTimeout(()=>{
    //   this.setState({ count: this.state.count + 1})
    //   this.setState({ count: this.state.count + 1})
    //   this.setState({ count: this.state.count + 1})
    //   this.setState({ count: this.state.count + 1})
    //   this.setState({ count: this.state.count + 1})
    // }, 0)
    new Promise((resolve, reject)=>{
      resolve(1)
    }).then(res=>{
      this.setState({ count: this.state.count + 1})
      this.setState({ count: this.state.count + 1})
      this.setState({ count: this.state.count + 1})
      this.setState({ count: this.state.count + 1})
      this.setState({ count: this.state.count + 1})
    })
  }
}

export default TestState;