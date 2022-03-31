import React from 'react';

/**
 * 定义组件的方式：
 *    类型：类组件、函数式组件，
 *    组件名称必须以大写字母开头。
 * */

/**
 * props
 *    数据状态的传递，单项数据流（不可反向修改），
 * */
class TestCompoentProp extends React.Component{

  render() {
    return(
        <div>
          { this.props.name }
        </div>
        )

  }
}

export default TestCompoentProp;