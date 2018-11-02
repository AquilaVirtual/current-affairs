import React from "react";
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../css/SignUp.css';


 let backend = 'https://lamb-notes.herokuapp.com/';
// let backend = 'http://localhost:5000/';
// let heroku = 'https://currentaffairs.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }

class SignUp extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                username: '',                           
                email: '',               
                password: '',
                confirmPassword: '',                           
                error: false,
                open: false,
                errorMessage: ''
            };
        }  
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
        
        
        createUser = event => {
          event.preventDefault();
          if(this.state.password !== this.state.confirmPassword) {
              this.setState({
                  errorMessage: "Passwords don't match!"                
              })
              return;
          }
          const user = {
              name: this.state.name,
              username: this.state.username,
              password: this.state.password,
              email: this.state.email,
  
          };
          axios.post(`${backend}api/users/register`, user)
          .then(response => {
              console.log("SignUp",response)
              localStorage.setItem('token', response.data.token)
              this.props.history.push(`/login`)           
              this.setState({
                  error: false
                  });
              })
              .catch(err => {              
                  this.setState({
                      error: true,
                      errorMessage: err.response.data.error
                  })
              })
      };
        render() {
            return (
        <div>                 
        <div className="sign-up" onClick={this.handleClickOpen}>Sign Up</div>
        <Dialog 
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <div  className="sign-up-wrap">
          <DialogContent>
            <DialogContentText>
            <div className="form-group">                        
            <input className="form-control" placeholder="Full Name" name='name' type="text" value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
            <input className="form-control" placeholder="Username" name='username' type="text" value={this.state.username} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">                            
             <input className="form-control" placeholder="Email" name='email' type="email" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">                            
            <input className="form-control" placeholder="Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
           <div className="form-group">                            
            <input className="form-control" placeholder="Confirm Password" name='confirmPassword' type="password" value={this.state.confirmPassword} onChange={this.handleInputChange} />
            </div>                        
            </DialogContentText>
       
          </DialogContent>
          </div>              
          <DialogActions>
          <div className="buttons-wrap">
          <button className="sign-up-buttons" onClick={this.handleClose} color="primary">
              Cancel
            </button>
            <button className="sign-up-buttons" onClick={this.handleClose} color="primary">
              Sign Up
            </button>
            </div>
          </DialogActions>
          {/* <div className="signup-switch">
           <div>Already have an account?<div className="switch-to-signin" onClick={this.anotherClose}><SignUp /></div></div>
            </div>  */}
          </Dialog>  
         </div>
             )
            }           
        }
    export default SignUp; 