import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Styled.css';
import Footer from "../components/Footer"

console.log("I RAN")
const Splash = () => (
  <div>
    <div id="video-container">
      <video id="video" muted loop autoPlay> 
      <source src="http://muloux.com/wp-content/uploads/2018/05/White-Smoke.mp4"/>
        Your browser does not support the video tag.
      </video>
      <div classname="container splash-container">
        <div className="splash-container_content">
          <div className="splash-container_content_header">
            <h3>Please confirm you are of legal age.</h3>
          </div>
          <Link to="/Cookbook">
            <button>I am over 21</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

export default Splash;