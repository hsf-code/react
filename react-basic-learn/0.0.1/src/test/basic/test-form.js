import React, { PureComponent } from "react";



/**
 * 表单：
 *
 *    受控组件：
 *        表单的数据源，变成react的state（单一的数据源），表单发生的事件被react控制，
 *        也就是简单的说，表单的交互在react的控制中；
 *        1、通过给表单元素value赋值（其值来源为state），这样表单组件就会受控；
 *    非受控组件：
 *
 *
 * */
class TestForm extends  PureComponent{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            名字:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
    );
  }
}

export default TestForm;