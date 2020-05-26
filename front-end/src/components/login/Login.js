import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './login.css'

//State

let Login = props => {

    let [formState, setFormState] = useState({

        email: '',
        password: ''
    
      });

      //Functions

      let formChange = event => {

        setFormState({

            ...formState,
            [event.target.id]: event.target.value

        })

        console.log(formState);

      }

      let submitForm = event => {

        event.preventDefault()

      }

    return (

        <div id='login-form'>

            <h2>Member Login</h2>

            <form onSubmit={event => submitForm(event)}>

                <label htmlFor='email'>Email</label>

                <input 
                type='text' 
                id='email' 
                onChange={event => formChange(event)}
                value={formState.email}/>
                

                <label htmlFor='password'>Password</label>

                <input 
                type='text' 
                id='password' 
                onChange={event => formChange(event)}
                value={formState.password}/>
                    
                <button>Login</button>

            </form>

            <Link to='/register'>Need an account?</Link>

        </div>

    )

}

export default Login;