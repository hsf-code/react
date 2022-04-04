// import Test1 from "./test/basic/test";
// import TestJsx from "./test/basic/test-jsx";
// import TestCompoentProp from "./test/basic/test-compoent-prop";
// import TestLifeCycle from "./test/basic/test-life-cycle";
// import TestProps from "./test/basic/test-props";
// import TestState from './test/basic/test-state'
// import TestConditions from "./test/basic/test-conditions";
// import TestListKey from "./test/basic/test-list-key";
// import TestForm from "./test/basic/test-form";
// import TestContext from "./test/senior/test-context";
// import TestRefs from "./test/senior/test-refs";
// import TestHoc from "./test/senior/test-hoc";
// import TestPortals from "./test/senior/test-portals";
// import HookExample from './test/hooks/test-hook1'
import {
  Outlet
} from "react-router-dom";
import React from "react";
import './App.css';
import RoutePath from "./test/test-router/router-basic/route-path";
import RouteNav from "./test/test-router/router-basic/router-nav";

import Router6Entry from './test/test-router/6.x';
import AuthTest from './test/test-router/6.x/components/auth'

// function App() {
//   return (
//     <div className="App">
//       {/*<Test1></Test1>*/}
//       {/*<TestJsx></TestJsx>*/}
//       {/*<TestCompoentProp name={'hsf'}></TestCompoentProp>*/}
//       {/*<TestLifeCycle></TestLifeCycle>*/}
//       {/*<TestState></TestState>*/}
//       {/*<TestProps></TestProps>*/}
//       {/*<TestConditions></TestConditions>*/}
//       {/*<TestListKey></TestListKey>*/}
//       {/*<TestForm></TestForm>*/}
//       {/*<TestContext></TestContext>*/}
//       {/*<TestRefs></TestRefs>*/}
//       {/*<TestHoc></TestHoc>*/}
//       {/*2222*/}
//       {/*<TestPortals></TestPortals>*/}
//       {/*<HookExample></HookExample>*/}
//     </div>
//   );
// }

/**
 * 路由的使用
 *  应用需要被BrowserRouter包裹，
 *
 * */
// function App() {
//   return (
//         <div className="App">
//           <h1>Bookkeeper</h1>
//           <RouteNav></RouteNav>
//           <RoutePath></RoutePath>
//           <Outlet />
//         </div>
//   );
// }

function App() {
  return (
        <div className="App">
          <AuthTest></AuthTest>
          {/*<Router6Entry></Router6Entry>*/}
        </div>
  );
}
export default App;
