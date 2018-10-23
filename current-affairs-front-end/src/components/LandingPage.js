import React, { Component } from 'react';
import '../css/LandingPage.css';
import NavBar from './NavBar'

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {

         } 
    }
    render() {
        return (
            <div className="landing-container">
            <NavBar />
            <div>LandingPage here</div>
        </div>)
    }

}

export default LandingPage;
