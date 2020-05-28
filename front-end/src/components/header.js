import React from 'react'
import {
    BrowserRouter as Router,
    Link,
   
  } from 'react-router-dom';

const Header=() => {
    return (
       <Router>
          <Link to="/">Login</Link>
           <Link to="/register">Sign Up</Link>
           
           <Link href="https://lambda-comake.github.io/UI/">More Info</Link>
       </Router>
    )
}
export default Header
