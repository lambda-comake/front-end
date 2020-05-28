import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import UserProfile from './components/userProfile'
import Main from './components/main'
import EditIssue from './components/editIssue'
// import Feed from './components/feed/Feed';
import AddIssue from './components/addissue/AddIssue';
import PrivateRoute from './utils/PrivateRoute'
import Header from './components/header'

import './App.css';
// import { updateProfile } from './actions/profileAction';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Login} /> 
        <Route exact path='/register' component={Register} /> 


        <PrivateRoute exact path='/profile' component={UserProfile} />
        <PrivateRoute exact path='/main' component={Main}/>

        <PrivateRoute exact path='/editIssues/:id' component={EditIssue}  />

        <PrivateRoute path='/add-issue'>

          <AddIssue />

        </PrivateRoute>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
