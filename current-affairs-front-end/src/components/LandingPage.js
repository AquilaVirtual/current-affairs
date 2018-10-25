import React, { Component } from 'react';
import '../css/LandingPage.css';
import NavBar from './NavBar'
import green from '../imgs/green.jpg';
import earth from "../imgs/earth.jpg";
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
            <img className="green-marker" alt="green marker" src={green} />
            <div className="check-list">Get exclusive access to the latest news!</div>
            <img className="green-marker" alt="green marker" src={green} />
            <div className="check-list">Receive updates when relevant news happen!</div>
            <img className="green-marker" alt="green marker" src={green} />
            <div className="check-list">Be in the know!</div>
            </div>
            <img className="middle-image"alt="purple earth" src={earth} />
        </div>)
    }

}

export default LandingPage;
