import React from 'react';
import {Link} from 'react-router-dom';

import './login.css'

class Login extends React.Component {

    render() {

        return (

            <div id='login-form'>

                <h2>Member Login</h2>

                <form>

                    <label htmlFor='username'>Username</label>

                    <input 
                    type='text' 
                    id='username' />

                    <label htmlFor='password'>Password</label>

                    <input 
                    type='text' 
                    id='password' />
                        
                    <button>Login</button>

                </form>

                <Link to='register'>Need an account?</Link>

            </div>

        )

    }

}

export default Login;