import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import NavBar from "./NavBar";

import green from "../imgs/green.jpg";
import earth from "../imgs/earth.jpg";

import "../css/LandingPage.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  alert = () => {
    window.alert(
      "This functionality is not available yet, please check back later."
    );
  };
  render() {
    return (
      <div className="landing-container">
        <NavBar />
        <div className="list-container">
          <img className="green-marker" alt="green marker" src={green} />
          <div className="check-list">
            Get exclusive access to the latest news
          </div>
          <img className="green-marker" alt="green marker" src={green} />
          <div className="check-list">
            Receive updates when relevant news happen
          </div>
          <img className="green-marker" alt="green marker" src={green} />
          <div className="check-list">Be in the know</div>
        </div>
        <div className="middle-content">
          <div className="promo-title">
            Find the news that everyone is talking about
          </div>
          <img className="middle-image" alt="purple earth" src={earth} />
        </div>
        <div className="bottom">
          <div className="bottom-inputs">
            <div className="email-bar">
              <input
                autoComplete="off"
                placeholder="Your email"
                className="subscribe-email"
                onClick={this.alert}
              />
              <i className="fas fa-envelope" />
            </div>
            <div className="country-bar">
              <i className="fas fa-map-marker-alt" />
              <input
                autoComplete="off"
                placeholder="Country"
                className="subscribe-country"
                onClick={this.alert}
              />
            </div>
            <button className="btn-subscribe-cta" onClick={this.alert}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="footer">
          <div
            className="logo"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Current <p>Affairs</p>
          </div>
          <span>Copyright 2018</span>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
