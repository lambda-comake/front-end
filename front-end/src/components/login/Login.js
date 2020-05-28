import React, { useState, useEffect } from 'react';
import { useHistory, withRouter, Link } from "react-router-dom";
import { loginAction } from "../../actions/loginAction";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { connect } from "react-redux";

import * as yup from 'yup';


import './login.css';

let Login = props => {
  const { push } = useHistory();

    //State

    let [formState, setFormState] = useState({

        username: '',
        password: ''
    
    });

    const [inputErrors, setInputErrors] = useState({ //State for form input validation errors

        username: "",
        password: ""

    });

    const formSchema = yup.object().shape({

        username: yup
            .string()
            .required("- Must include a username."),
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
      
    axiosWithAuth()
      .post("/auth/login", formState)
      .then((res) => {
        // console.log(res.data)
        props.loginAction(res);
        localStorage.setItem("token", (res.data.token));
        localStorage.setItem("user_id", (res.data.user_id));
        // console.log('!!!!!!!!!!!!!!',{ res });
        push("/main");
      })
      .catch((err) => {
        console.log(err);
      });
    }


    useEffect(() => {

    //Input validation schema using Yup

    const formSchema = yup.object().shape({

        username: yup
            .string()
            .required("- Must include a username."),
        password: yup
            .string()
            .min(2, "- Passwords must be at least 6 characters long.")
            .required(" -Password is Required"),
      });

      // Enables button if the input is valid

      formSchema.isValid(formState).then(valid => { 

        document.querySelector('form button').disabled = !valid

    })


    },[formState])
return (

    <div id='form-container'>

        <h2>Member Login</h2>

        <form onSubmit={event => {submitForm(event)}}>

                <label htmlFor='username'>Username {inputErrors.username}</label>

                <input 
                type='text' 
                id='username' 
                onChange={event => formChange(event)}
                value={formState.username}/>
                

                <label htmlFor='password'>Password {inputErrors.password}</label>

                <input 
                type='password' 
                id='password' 
                onChange={event => formChange(event)}
                value={formState.password}/>
                    
                <button>Login</button>

    </form>

    <Link to='/register'>Need an account?</Link>

  </div>

)

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    issues: state.allIssues.issues
    //username: state.user.username,
    
   
  };
};

export default withRouter(
  connect(mapStateToProps, { loginAction })(Login)
);

//export default Login;