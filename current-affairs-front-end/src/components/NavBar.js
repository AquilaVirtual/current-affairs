import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import LogIn from './LogIn';
import SignUp from './SignUp';

import hamburger from '../imgs/hamburger.png';
import '../css/NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
         } 
    }  
       
   
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      logOut = () => {
          localStorage.removeItem('token');
          this.props.history.push('/');
      }

      userAccount = () => {
          this.props.history.push('/user');
      }

    alert = () => {
        window.alert("This functionality is not available yet, please check back later.")
    }
    render() {
        const { anchorEl } = this.state;
        return (
            <div className="navbar-container">
            <div className="nav-items">
             <div className="logo" >Current <p>Affairs</p></div>
             <ul>
                 <li  onClick={this.alert} ><a href="#">Entertainment</a></li>
                 <li  onClick={this.alert}><a href="#">Politics</a></li>
                 <li  onClick={this.alert}><a href="#">Economics</a></li>
                 <li  onClick={this.alert}><a href="#">Causes</a></li>
             </ul>
             {localStorage.getItem('token') ? (
                 <div className="hamburger-menu">
                 <Button
                   aria-owns={anchorEl ? 'simple-menu' : undefined}
                   aria-haspopup="true"
                   onClick={this.handleClick}
                 >
                   <img className="hamburger"alt="hamburger" src={hamburger}/>                 
                 </Button>
                 <Menu
                   id="simple-menu"
                   anchorEl={anchorEl}
                   open={Boolean(anchorEl)}
                   onClose={this.handleClose}
                 >
                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                   <MenuItem onClick={this.user}>My account</MenuItem>
                   <MenuItem onClick={this.logOut }>Logout</MenuItem>
                 </Menu>
               </div>     
      
     ) : (
             <div className="buttons-wrap">           
             <LogIn  />       
             <SignUp />        
             </div>
             )}
            </div>
            <div className="headline">Search. Learn. <span className="last-word">Know.</span></div>
            <div className="center-search">
            <div className="search-inputs-left">
            <input  
            autoComplete="off"
            placeholder="News title, Keyword"                   
            className="input-left"
            onClick={this.alert}
            />
            <i className="fa fa-search"></i>          
            </div>
            <div className="search-inputs-right">
            <i className="fas fa-map-marker-alt"></i>
              <input               
            autoComplete="off"
            placeholder="Country..."                   
            className="input-right"
            onClick={this.alert}
            />
            </div>
            <button  onClick={this.alert} className="btn-main-cta">Search Countries</button>
            </div>
        </div>
        )
    }

}

export default withRouter(NavBar);
