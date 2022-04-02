import React, { PureComponent } from 'react';

/**
 * context 上下文：（类似于 vue provide/inject）
 *    使用的规则：
 *        当我们多个组件/或者多层组件，都使用同样的数据，就可以把这些数据提出来，作为公用的data
 *        主要目的：避免层层传递一些属性
 *
 *
 *        api:
 *            1、React.createContext 创建一个上下文对象(假设叫：Context)；
 *               创建Context之后，如果后续的组件在使用的时候，上层没有被Provider包裹
 *               使用的数据就是默认初始化的数据；
 *
 *            2、Context.Provider 必须设置value，且会覆盖初始化的默认value（Context的值）
 *                提供一个载体，数据一发生改变，子组件（使用其提供的数据的）都可以收到相应的改变（重新渲染），
 *                并且这个渲染是不受shouldComponentUpdate的影响的；
 *              使用：
 *                使用 <Context.Provider value={} > 去包裹你需要共享数据的组件：
 *                   1、value是共享的数据，需要传递，
 *                   2、在需要使用value的组件内部，需要用静态属性static contextType（已经声明）接收这个
 *                      Context对象，在子组件的实例上会绑定context（就是共享的数据）
 *
 *            3、Class.contextType（类的静态属性，链接上下文对象）需要定义value：
 *                static contextType = Context;
 *                拿到this.context的共享数据
 *                注意：
 *                    这个是基于类组件，但是函数式组件就不可以使用；
 *
 *            4、Context.Consumer 不需要定义value：
 *              可以为函数式组件传递context
 *              1、Provider的包裹
 *               当你使用Provider的包裹时候，它的函数返回value就是Provider提供的value，没有就是默认
 *              2、Provider的不包裹
 *                拿到的value就是创建的Context时候的默认值；
 *
 *
 * */
const Theme = {
  btn: 'light',
  select:'light'
}
const ThemeContext = React.createContext(Theme);

class TestContext extends PureComponent{

  render() {
    return (
        <ThemeContext.Provider value={ 'light' } >
          <Toolbar />
        </ThemeContext.Provider>
    // <ThemeContext.Provider value={ '' } >
    //   <ThemeContext.Consumer  >
    //     { (value)=>{ return <Toolbar context={value} /> } }
    //   </ThemeContext.Consumer>
    // </ThemeContext.Provider>

    );
  }
}



function Toolbar(props) {
  console.log('Toolbar', props)
  return (
      <div>
        <ThemedButton />
      </div>
  );
}


class ThemedTest extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    console.log('button-test', this.context)
    return <button theme={this.context}>2222</button>;
  }
}


class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

function Button(props){
  console.log('context', props.theme)
  return (
      <button>context</button>
  )
}

export default TestContext;
// export default ThemedTest;