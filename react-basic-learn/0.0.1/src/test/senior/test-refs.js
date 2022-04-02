import React, { PureComponent } from 'react';


/**
 * refs
 *  其实就是为了组件内部元素暴露出去；
 *  forwardRef
 *  createRef
 *
 * */


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={ ()=>{ props.testClick() } }>
      {props.children}
    </button>
));

// 你可以直接获取 DOM button 的 ref：
const getBtn = React.createRef();

class TestRefs extends PureComponent{
  getBtn(){
    console.log('ref', getBtn)
  }
  render() {
    return(
        <div>
          <FancyButton ref={getBtn} testClick={ this.getBtn } >Click me!</FancyButton>
        </div>
    )
  }
}


export default TestRefs;