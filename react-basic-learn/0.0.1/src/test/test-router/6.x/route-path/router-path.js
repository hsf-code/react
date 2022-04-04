import {Route, Routes} from "react-router-dom";
import About from "../components/about";
import Users from "../components/user";
import Home from "../components/home";
import AboutA from '../components/about-a'
import AboutID from '../components/about-id'


/**
 * router：
 *  路由其实就是一个组件，你需要将你想应用的地方进行包裹；
 *      1、<BrowserRouter> 将你的应用包裹在其中，（类似于vue的use），使得你可以在应用的任何位置使用router
 *      2、<Routes>, <Route/>, <Link></Link>
 *         <Route/> 单个路由，勾芡组件使用的；
 *         <Routes> 相当于6版本之下的<Switch>将单个所有的路由包裹，自动匹配你的path。从而展示不同ui
 *         <Link> 就是一个导航的router组件；
 * */
function RoutePath(){

  return(
      <Routes>
        <Route  path="/" element={ <Home /> }></Route>
        <Route  path="about" element={ <About />}>
          {/* 路由的嵌套 */}
          <Route  path="a" element={  <AboutA /> }></Route>
          {/* 动态的路由 /about/233 */}
          <Route  path=":id" element={ <AboutID />}/>
          {/* 索引路由：父路由匹配但子路由不匹配就出现出现，子路由匹配就不出现 */}
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
          />
        </Route>
        <Route path="users" element={  <Users /> }></Route>

        {/* 不匹配的路由 */}
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
      </Routes>
  )
}

export default RoutePath;