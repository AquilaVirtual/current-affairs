import React from "react";
import { withRouter } from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import axios from "axios";

import "../css/LogIn.css";

let backend = "https://lamb-notes.herokuapp.com/";
// import SignUp from './SignUp';
// let backend = 'http://localhost:5000/';
// let heroku = 'https://currentaffairs.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
      open: false,
      errorMessage: ""
    };
  }

  login = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(`${backend}api/users/login`, user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("username", this.state.username);
        this.setState({
          error: false
        });
        setTimeout(() => {
          this.props.history.push("/");
        }, 200);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: true,
          errorMessage: err.response.data.error
        });
      });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="login" onClick={this.handleClickOpen}>
          Login
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Login to Current Affairs
          </DialogTitle>
          <div className="login-wrap">
            <DialogContent>
              <DialogContentText>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Email"
                    name="username"
                    type="text"
                    required
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    required
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
          <DialogActions>
            <div className="buttons-wrap">
              <button className="signin-buttons" onClick={this.handleClose}>
                Cancel
              </button>
              <button className="signin-buttons" onClick={this.login}>
                Login
              </button>
            </div>
          </DialogActions>
          <div className="login-switch">
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default withRouter(LogIn);
