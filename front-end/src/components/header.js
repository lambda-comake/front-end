import React from 'react'
import {Link} from 'react-router-dom';

import './header.css'

const Header=() => {
    return (
        <nav id='topNav'>

            <Link to="/">Login</Link>
            <Link to="/register">Sign Up</Link>
            <Link href="https://lambda-comake.github.io/UI/">More Info</Link>

        </nav>
    )
}
export default Header
