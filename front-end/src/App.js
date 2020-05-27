import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import UserProfile from './components/userProfile'
import Feed from './components/feed/Feed'
import Main from './components/main'

import './App.css';
import { updateProfile } from './actions/profileAction';

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
        <UserProfile exact path='/profile' />
        <Main exact path='/main' />

        <Route path='/feed'>

          <Feed />

        </Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
