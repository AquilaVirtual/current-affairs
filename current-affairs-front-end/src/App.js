import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import User from './components/User';
import LogIn from './components/LogIn';


import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="app-container">

      <Route path="/user" component={User} />
      <Route path="/login" component={LogIn} />
       <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
