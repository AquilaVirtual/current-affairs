import React from "react";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../css/Account.css';
class Account extends React.Component {
    
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
          <button className="sign-up-buttons" onClick={this.handleClose} color="primary">
              Cancel
            </button>
            <button className="sign-up-buttons" onClick={this.handleClose} color="primary">
              Sign Up
            </button>
          </DialogActions>
          </Dialog>  
         </div>
             )
            }           
        }
    export default Account; 