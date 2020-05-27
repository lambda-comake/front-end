import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import UserProfile from './components/userProfile'
import Feed from './components/feed/Feed'
import Main from './components/main'
import EditIssue from './components/editIssue'

import './App.css';
import { updateProfile } from './actions/profileAction';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path='/login' component={Login} /> 
          
        
        <Route exact path='/register' component={Register} />
          
        
        <Route exact path='/profile' component={UserProfile} />
        <Route exact path='/main' component={Main}/>

        <Route exact path='/editIssues/:id' component={EditIssue}  />

      </BrowserRouter>
     
    </div>
  );
}

export default App;
