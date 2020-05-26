import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import logger from 'redux-logger';

//styles
import './index.css';

//components
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers"

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store} >
      <Router>
          <App />
      </Router>
  </Provider>
  , document.getElementById('root'));

