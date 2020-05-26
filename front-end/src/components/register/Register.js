import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as yup from 'yup';

import './register.css'

let Register = props => {


    //State

    let [formState, setFormState] = useState({

        email: '',
        password: ''
    
    });

    const [inputErrors, setInputErrors] = useState({ //State for form input validation errors

        email: "",
        password: ""

    });

    const formSchema = yup.object().shape({

        email: yup
            .string()
            .email("- Must be a valid email address.")
            .required("- Must include email address."),
        password: yup
            .string()
            .min(6, "- Passwords must be at least 6 characters long.")
            .required(" -Password is Required"),
    });


    //Functions

    let formChange = event => {

    setFormState({

        ...formState,
        [event.target.id]: event.target.value

        })

        //Sets inputErrors state if invalid input

        yup
            .reach(formSchema, event.target.id)
            .validate(event.target.value)
            .then(valid => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.id]: ''

                });

            })
            .catch(err => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.id]: err.errors[0]

                });

            })

    console.log(formState);

    event.persist()

    }

    let submitForm = event => {

    event.preventDefault()

    }

    useEffect(() => {

    //Input validation schema using Yup

    const formSchema = yup.object().shape({

        email: yup
            .string()
            .email("- Must be a valid email address.")
            .required("- Must include email address."),
        password: yup
            .string()
            .min(6, "- Passwords must be at least 6 characters long.")
            .required(" -Password is Required"),
      });

      //Enables button if the input is valid

      formSchema.isValid(formState).then(valid => { 

        document.querySelector('form button').disabled = !valid;

    })


    },[formState])

    return (

        <div id='form-container'>

            <h2>Register</h2>

            <form onSubmit={event => submitForm(event)}>

                <label htmlFor='email'>Email {inputErrors.email}</label>

                <input 
                type='text' 
                id='email' 
                onChange={event => formChange(event)}
                value={formState.email}/>
                

                <label htmlFor='password'>Password {inputErrors.password}</label>

                <input 
                type='text' 
                id='password' 
                onChange={event => formChange(event)}
                value={formState.password}/>
                    
                <button disabled>Submit</button>

            </form>

            <Link to='/login'>Already have an account?</Link>

        </div>

    )

}

export default Register;