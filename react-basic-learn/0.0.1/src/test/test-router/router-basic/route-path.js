import {Route, Routes} from "react-router-dom";
import About from "./about";
import Users from "./user";
import Home from "./home";
import AboutA from '../6.x/components/about-a'
import AboutID from '../6.x/components/about-id'

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