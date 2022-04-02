import React, { PureComponent } from "react";


/**
 * list的渲染问题：
 *      1、借助与map函数
 *
 * key:
 *    为何使用key，带来哪些好处？
 *    key其实就是一个元素的标识，来快速判断该元素在下一次更新的时候是否需要更新；
 *
 *    1、key的取值最好是唯一的，一般不使用下标来作为key
 * */
class TestListKey extends PureComponent{
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    );
    return(
        <div>{listItems}</div>
    )
  }
}

export default TestListKey;