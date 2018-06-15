import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Styled.css';
import Footer from "../components/Footer"

console.log("I RAN")
const Splash = () => (
  <div>
    <div id="video-container">
      <video id="video" muted loop autoPlay> 
      <source src="http://muloux.com/wp-content/uploads/2018/06/ezgif.com-gif-maker-1.mp4"/>
        Your browser does not support the video tag.
      </video>
      <div classname="container splash-container">
        <div className="splash-container_content">
          <div className="splash-container_content_header">
            <h3>Please confirm your age.</h3>
            <Link to="/Cookbook">
            <button>I am over 21</button>
          </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
)

export default Splash;