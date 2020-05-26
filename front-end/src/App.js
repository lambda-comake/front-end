import React, { useState } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateProfile from './components/createprofile/CreateProfile';

import './App.css';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Route path='/login'> 

          <Login />

        </Route>

        <Route path='/register'>

          <Register />

        </Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
