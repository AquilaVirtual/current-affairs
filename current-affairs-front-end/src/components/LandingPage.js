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
            <div className="list-container">
            <img alt="green marker" src={"../imgs/green-mark.jpg"} />
            <div className="check-list">Get exclusive access to the latest news!</div>
            <img alt="green marker" src={"../imgs/green-mark.jpg"} />
            <div className="check-list">Receive updates when relevant news happen!</div>
            <img alt="green marker" src={"../imgs/green-mark.jpg"} />
            <div className="check-list">Be in the know!</div>
            </div>
            <img className="middle-image"alt="purple earth" src={"../imgs/p-earth.png"} />
        </div>)
    }

}

export default LandingPage;
