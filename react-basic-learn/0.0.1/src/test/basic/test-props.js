import React, { PureComponent } from "react";


/**
 * props
 *    解释：数据传递对象
 *    函数式的组件（默认会传递），类组件，也会传递（绑定在this）
 *
 *    相对于组件（传递数据）来说：
 *        jsx所接收的属性或者一个组件，都会转为一个对象，这个对象被命名为props
 *        1、传递普通变量
 *        2、传递组件
 *    注意：
 *        1、props 是只读的；
 * */
class TestProps extends PureComponent{

  render() {
    return (
        <div>
         <Test1 name={ Test2 }  ></Test1>
        </div>
    )
  }
}

function Test1(props){
  return(
      <div>{ props.name() }</div>
  )
}

function Test2(props){
  return(
      <div>test2</div>
  )
}

export  default TestProps;