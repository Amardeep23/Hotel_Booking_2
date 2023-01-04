import React from "react";
import navbar_logo from '../../assets/img/navbar_logo.jpg'
import './Navbar.css'
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navpar_p">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="navbar_logo_img" src={navbar_logo} alt="navbar_logo" width={70} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{color:'rgb(255,209,24)'}}>
              <li class="nav-item" >
                <a class="nav-link active" aria-current="page" href="#" style={{color:'rgb(255,209,24)'}}>
                  Hotels
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{color:'rgb(255,209,24)'}}>
                  Trips
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:'rgb(255,209,24)'}}
                >
                  Your Profile
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sign Up
                    </a>
                  </li>
                  
                </ul>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input
                className="form-control me-2 placeholde_navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button style={{fontFamily:'cursive', backgroundColor:'rgb(255,209,24)', color:'#000'}}  variant="contained" type='submit'>Submit</Button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
