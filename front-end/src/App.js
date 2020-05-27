import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import Feed from './components/feed/Feed'

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

        <Route path='/feed'>

          <Feed />

        </Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
