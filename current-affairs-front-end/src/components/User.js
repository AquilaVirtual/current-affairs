import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      newUsername: "",
      email: "",
      newEmail: "",
      password: "",
      newPassword: "",
      verifyPassword: "",
      error: false,
      errorMessage: ""
    };
  }

  render() {
    return (
      <div>
        <div className="user-settings">
          <div className="settings">
            <div className="info-label">Username:</div>
            <div className="info-data">{this.state.username}</div>
            <button className="username-button" onClick={this.changeUsername}>
              Change{" "}
            </button>
          </div>
          <div className="settings">
            <div className="info-label">Email:</div>
            <div className="info-data_email"> {this.state.email}</div>
            <button className="email-button" onClick={this.changeEmail}>
              Change
            </button>{" "}
          </div>
          <div className="settings">
            Password: ******************{" "}
            <button className="password-button" onClick={this.changePassword}>
              Change
            </button>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default User;
