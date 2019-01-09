import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import LandingPage from "./components/LandingPage";
import User from "./components/User";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import SearchResults from "./components/SearchResults";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

import "./css/App.css";
let key = process.env.REACT_APP_NEWSAPIKEY;
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: [],
      category: ""
    };   
  }
  componentWillMount(){
    this.search = searchObject => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${
            searchObject.countryCode
          }&category=${searchObject.category}&apiKey=${key}`
        )
        .then(res => {
          console.log("News", res.data);
          this.setState({
            search: res.data.articles
          });
        })
        .then(() => {
          this.props.history.push("/results");
        })
        .catch(err => {
          console.log(err);
        });
    };
 
  }
  render() {
    return (
      <div className="app-container">
        <NavBar />      
        <Route
          exact
          path="/"
          render={props => <Search search={this.search} />}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/results"
            render={props => <SearchResults search={this.state.search} />}
          />
          <Route path="/user" component={User} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
