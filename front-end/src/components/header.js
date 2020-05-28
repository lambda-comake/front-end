import React from 'react'
import {Link} from 'react-router-dom';

const Header=() => {
    return (
<>
          <Link to="/">Login</Link>
           <Link to="/register">Sign Up</Link>
           <Link href="https://lambda-comake.github.io/UI/">More Info</Link>
</>
    )
}
export default Header
