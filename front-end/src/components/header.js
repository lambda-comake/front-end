import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <div className='container'>
            <div className='logo'>
                <p>Co-Make</p>
            </div>
            <div className='links'>
            <Link to="/">Login</Link>
            <Link to="/register">Sign Up</Link>
            <a href="https://lambda-comake.github.io/UI/">More Info</a>
            </div>
            </div>
        </>
    )
}
export default Header
