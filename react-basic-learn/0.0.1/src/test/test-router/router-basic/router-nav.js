import { NavLink } from "react-router-dom";

function RouteNav(){

  return(
      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
      >
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">home</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/about">about</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/about/a">about-a</NavLink> |{" "}
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/users">users</NavLink>
      </nav>
  )
}

export default RouteNav;