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
                 <button>Login</button>
                 <button>Sign up</button>
            </div>
            <div className="center__search">
            <input               
            autoComplete="off"
            placeholder="interest..."                   
            className="center-input"
            />
              <input               
            autoComplete="off"
            placeholder="Country..."                   
            className="center-input"
            />
            </div>
        </div>
        )
    }

}

export default NavBar;
