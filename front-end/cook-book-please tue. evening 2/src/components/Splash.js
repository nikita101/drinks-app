import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Styled.css'

const Splash =()=>(
  <div>
    <h1>Welcome!</h1>
    <h3>Please confirm you are of legal age.</h3>
    <Link to="/Cookbook">
      <button>I am over 21</button>
    </Link>
  </div>
)

export default Splash;