import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import UserProfile from './components/userProfile'
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
      </BrowserRouter>
     
    </div>
  );
}

export default App;
