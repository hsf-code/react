import React, { PureComponent, Fragment } from 'react';
import ReactDOM from "react-dom";

/**
 * createPortal 其实就是将dom挂载到你想挂载的地方，但是还是通过render渲染
 *
 * */
class TestPortals extends PureComponent{
  render() {
    return ReactDOM.createPortal(<div>TestPortals</div>,  document.getElementById('app'));
  }
}

export default TestPortals;

