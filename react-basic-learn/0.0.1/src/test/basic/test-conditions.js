import React, { PureComponent } from "react";

/**
 * 条件渲染：
 *      1、使用if 因为jsx的语法可以赋值给变量
 *      2、&& 与运算符进行 （ true && expression ）
 *      3、三目运算符 （ condition ? true : false  ）
 *
 *    阻止渲染：
 *        1、如果是render 返回 null 就不会渲组件，但是不会影响lifecycle
 *        2、如果是变量直接赋值 null 对应的元素也不会渲染
 *
 *
 * 事件：
 *    对于react中的事件触发的时候会传入一个e（事件对象），这个事件对象是react自己合成的事件对象
 *    它与原生的事件并不相同；
 *    绑定事件：onClick
 *    绑定this：
 *        1、在constructor，进行函数中的this绑定；
 *        2、在jsx中使用bind绑定；
 *        3、在jsx语法使用箭头函数绑定；
 *        4、在类中，声明函数的时候使用箭透函数声明；
 *
 *
 * */
class TestConditions extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      isRender: false
    }
  }

  /**
   * if 条件渲染
   * */
  testRender() {
    if (!this.state.isRender) {
      return <div>没有渲染</div>;
    } else {
      return <div>渲染了</div>;
    }
  }

  render() {
    return(
        <>
          {/*{ this.testRender() }*/}
          {/* && 运算符   */}
          {/*{ this.state.isRender && <div>渲染了</div> }*/}
          { this.state.isRender ? <div>渲染了</div> : <div>没有渲染</div>  }
        </>
    )
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ isRender: true })
    }, 2000)
  }
}

export default TestConditions;