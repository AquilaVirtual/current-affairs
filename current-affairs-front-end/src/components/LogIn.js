import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SignUp from './SignUp';

import '../css/LogIn.css';
class LogIn extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {                           
                email: '',               
                password: '',                           
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
  
        render() {
            return (
                <div>      
                  
            <div className="login" onClick={this.handleClickOpen}>Login</div>
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="form-dialog-title">Login to Current Affairs</DialogTitle>
          <div  className="login-wrap">
          <DialogContent>
            <DialogContentText>            
            <div className="form-group">
             <input className="form-control" placeholder="Email" name='email' type="text" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
            <input className="form-control" placeholder="Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
            </DialogContentText>
       
          </DialogContent>
          </div>
          <DialogActions>
            <div className="buttons-wrap">
            <button className="signin-buttons" onClick={this.handleClose} >
              Cancel
            </button>
            <button className="signin-buttons" onClick={this.handleClose} >
             Login
            </button>
            </div>
          </DialogActions>
            <div className="login-switch">
            <div><a href="#">Forgot Password?</a></div> 
            </div>         
          </Dialog>
                
                  </div>
                    )
                }           
               }
    export default LogIn; 