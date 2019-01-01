import React, { Component } from "react";
import { Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import User from "./components/User";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import SearchResults from "./components/SearchResults";
import NavBar from "./components/NavBar";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/results" component={SearchResults} />
        <Route path="/user" component={User} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
