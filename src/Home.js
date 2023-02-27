import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./About";
const himanshu = () => {
  return (
    <div id="wrapper">
        <div id="header">
          <img src={require('./img/logo.png')} id="img1"></img>
          <div id="menu_bar">
          <a href=''>Home</a>
          <a href=''>About Us</a>
          <a href=''>Services</a>
          <a href=''>Products</a>
          <a href=''>Contact Us</a>
          </div>
          <div id='touch'>
          <a name="" id="touch" class="btn btn-primary" href="#" role="button">Get in Touch</a>
          </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./img/logo.png')} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={require('./img/logo.png')} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={require('./img/logo.png')} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default himanshu
