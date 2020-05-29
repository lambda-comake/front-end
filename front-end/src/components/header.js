import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

const Header=() => {
    return (
        <nav id='topNav'>

            <Link to="/">Login</Link>
            <Link to="/register">Sign Up</Link>
            <a href="https://lambda-comake.github.io/UI/">More Info</a>

        </nav>
    )
}
export default Header
