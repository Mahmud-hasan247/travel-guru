import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link to='/'>
            <button
              className="btn btn-light"
            >
              <img src={logo} alt="" />
            </button>
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control  input"
              placeholder="Search your Destination..."
            />
          </form>

          <div
            className="collapse navbar-collapse right-side"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <Link to='/home'>
                <li class="nav-item items">
                  Home
              </li>
              </Link>
              {/* <li class="nav-item items">
                Destination
              </li> */}
              {/* <li class="nav-item items">
                Blog
              </li> */}
              {/* <li class="nav-item items">
                Contact
              </li> */}
              <li class="nav-item">
                <Link to='/login'>
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