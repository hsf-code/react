import React from "react";
/**
 * 类组件
 * */
class Test1 extends  React.Component{
   name = '111';
  render() {
    // jsx
    return(
        <>
          <div className={'test1'}>
            {
              this.name
            }
          </div>
        </>
    )
  }
}

export  default  Test1;