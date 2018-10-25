import React, { Component } from 'react';
import '../css/NavBar.css';

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
             <img alt="logo"/>
             <ul>
                 <li>Entertainment</li>
                 <li>Politics</li>
                 <li>Economics</li>
                 <li>Causes</li>
             </ul>
             <div className="buttons-wrap">
                 <div className="login">Login</div>
                 <div className="sign-up">Sign up</div>
                 </div>
            </div>
            <div className="headline">Search. Learn. <span className="last-word">Know.</span></div>
            <div className="center-search">
            <div className="search-inputs-left">
            <input  
            autoComplete="off"
            placeholder="News title, Keword"                   
            className="input-left"
            />
            <i class="fa fa-search"></i>          
            </div>
            <div className="search-inputs-right">
            <i class="fas fa-map-marker-alt"></i>
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
