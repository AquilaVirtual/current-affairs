import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Countries from "./Countries";

import hamburger from "../imgs/hamburger.png";
import "../css/NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  userAccount = () => {
    this.props.history.push("/user");
  };

  alert = () => {
    window.alert(
      "This functionality is not available yet, please check back later."
    );
  };
  redirectToHome = () => {
     this.props.history.push('/');
 }
  render() {
    const { anchorEl } = this.state;

    return (
      <div className="navbar-container">
        <div className="nav-items">
          <div className="logo" onClick={this.redirectToHome}>
            Current <p>Affairs</p>
          </div>
          <ul>
            <li>
              <Countries value="Entertainment" />
            </li>
            <li>
              <Countries value="Politics" />
            </li>
            <li>
              <Countries value="Technology" />
            </li>
            <li>
              <Countries value="Science" />
            </li>
          </ul>
          {localStorage.getItem("token") ? (
            <div className="hamburger-menu">
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <img className="hamburger" alt="hamburger" src={hamburger} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.userAccount}>My account</MenuItem>
                <MenuItem onClick={this.logOut}>Logout</MenuItem>
              </Menu>
              {`${localStorage.getItem("name").split(" ")[0]}`}
            </div>
          ) : (
            <div className="buttons-wrap">
              <LogIn />
              <SignUp />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
