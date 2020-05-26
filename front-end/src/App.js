import React, { useState } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import Login from './components/login/Login'

import './App.css';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Route path='/login'> 

          <Login />

        </Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
