import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from "react-router-dom";
import { loginAction } from "/Users/nickohman/Desktop/front-end/front-end/src/actions/loginAction.js"
import {axiosWithAuth} from "/Users/nickohman/Desktop/front-end/front-end/src/utils/axiosWithAuth.js"
import { connect } from "react-redux";

import './login.css'

//State

let Login = props => {
  const { push } = useHistory();

  let [formState, setFormState] = useState({

    username: '',
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
    axiosWithAuth()
      .post("/auth/login", formState)
      .then((res) => {
        localStorage.setItem("token", (res.data.token));
        localStorage.setItem("id", res.data.user.id);
        console.log({ res });
        props.loginAction(res);
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };



return (

  <div id='login-form'>

    <h2>Member Login</h2>

    <form onSubmit={event => submitForm(event)}>

      <label htmlFor='email'>Email</label>

      <input
        type='text'
        id='username'
        name='username'
        onChange={event => formChange(event)}
        value={formState.email} />


      <label htmlFor='password'>Password</label>

      <input
        type='text'
        id='password'
        onChange={event => formChange(event)}
        value={formState.password} />

      <button>Login</button>

    </form>

    <Link to='/register'>Need an account?</Link>

  </div>

)

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.user.username,
    
   
  };
};

export default withRouter(
  connect(mapStateToProps, { loginAction })(Login)
);