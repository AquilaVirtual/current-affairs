import React, { Component } from 'react';
import '../css/NavBar.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
class NavBar extends Component {
    constructor() {
        super();
        this.state = {

         } 
    }
    render() {
        return (
            <div className="navbar-container">
            <div className="nav-items">
             <div className="logo" >Current <p>Affairs</p></div>
             <ul>
                 <li><a href="#">Entertainment</a></li>
                 <li><a href="#">Politics</a></li>
                 <li><a href="#">Economics</a></li>
                 <li><a href="#">Causes</a></li>
             </ul>
             <div className="buttons-wrap">           
             <LogIn  />       
             <SignUp />        
             </div>
            </div>
            <div className="headline">Search. Learn. <span className="last-word">Know.</span></div>
            <div className="center-search">
            <div className="search-inputs-left">
            <input  
            autoComplete="off"
            placeholder="News title, Keyword"                   
            className="input-left"
            />
            <i className="fa fa-search"></i>          
            </div>
            <div className="search-inputs-right">
            <i className="fas fa-map-marker-alt"></i>
              <input               
            autoComplete="off"
            placeholder="Country..."                   
            className="input-right"
            />
            </div>
            <button className="btn-main-cta">Search Countries</button>
            </div>
        </div>
        )
    }

}

export default NavBar;
