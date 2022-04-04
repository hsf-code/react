import React from "react";
import {Outlet} from "react-router-dom";

class About extends React.Component{
  render() {
    return(
        <>
          <h2>About</h2>
          <Outlet />
        </>
    )
  }
}

export default About;