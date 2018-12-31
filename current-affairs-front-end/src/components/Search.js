import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from 'axios';

import "../css/Search.css";

let key = process.env.REACT_APP_NEWSAPIKEY;

class NavBar extends Component {
  constructor() {
    super();
    this.state = { 

    };
  }
  alert = () => {
    window.alert(
      "This functionality is not available yet, please check back later."
    );
  };
  componentDidMount(){
   axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${key}`)
   .then(res=> {
       console.log("News", res)
})
}
render() { 

    return (
      <div className="search-container"> 
          <div className="search-body"> 
        <div className="headline">
          Search. Learn. <span className="last-word">Know.</span>
        </div>
        <div className="center-search">
          <div className="search-input-left">
            <input
              autoComplete="off"
              placeholder="News title, Keyword"
              className="input-left"
              onClick={this.alert}
            />
            <i className="fa fa-search" />
          </div>
          <div className="search-input-right">
            <i className="fas fa-map-marker-alt" />
            <input
              autoComplete="off"
              placeholder="Country"
              className="input-right"
              onClick={this.alert}
            />
          </div>
          <button onClick={this.alert} className="btn-main-cta">
            Search
          </button>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
