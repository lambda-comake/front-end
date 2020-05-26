import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from "react-router-dom";
import {axiosWithAuth} from '/Users/nickohman/Desktop/front-end/front-end/src/utils/axiosWithAuth.js'
import { connect } from "react-redux";
import {registerAction} from '/Users/nickohman/Desktop/front-end/front-end/src/actions/registerAction.js'
import axios from "axios"

import './register.css';

//State

let Register = props => {
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
      .post("auth/register", formState)
      .then((res) => {
        localStorage.setItem("token", (res.data.token));
        localStorage.setItem("userID", res.data.user.id);

        console.log({ res });
        props.registerAction(res);
        push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error. Please try again.")
        
      });
  };



return (

  <div id='register-form'>

    <h2>Register an account</h2>

    <form onSubmit={event => submitForm(event)}>

      <label htmlFor='email'>Email</label>

      <input
        type='text'
        name='username'
        id='username'
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

  </div>

)

}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    username: state.user.username,
   
  };
};

export default withRouter(
  connect(mapStateToProps, { registerAction })(Register)
);