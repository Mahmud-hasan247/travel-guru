import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <button class="btn btn-light"><img src={logo} alt=""/></button>
          <form class="form-inline my-2 my-lg-0">
              <input className="form-control  input" placeholder="Search your Destination..." ></input>
            </form>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item items">
                News
              </li>
              <li class="nav-item items">
                Destination
              </li>
              <li class="nav-item items">
                Blog
              </li>
              <li class="nav-item items">
                Contact
              </li>
              <li class="nav-item">
                <Link to ='/login'>
                  <Button variant="contained" color="primary">Login</Button>
                </Link>
                
              </li>
              
            </ul>
            
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;