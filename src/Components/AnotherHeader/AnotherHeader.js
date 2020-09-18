import React, { useContext } from 'react';
import logo from '../../../src/Logo.png';
import { UserContext } from '../../App';
import './AnotherHeader.css';

const AnotherHeader = () => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);
    return (
        <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <button class="btn btn-light"><img src={logo} alt=""/></button>
          <div class="collapse navbar-collapse right-side" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item nav-items">
                News
              </li>
              <li class="nav-item nav-items">
                Destination
              </li>
              <li class="nav-item nav-items">
                Blog
              </li>
              <li class="nav-item nav-items">
                Contact
              </li>
              <li class="nav-item nav-items" style={{color: 'primary', fontWeight:"bold"}}>
                {!signedInUser ? 'contact' : signedInUser.name}
              </li>
              
              
            </ul>
            
          </div>
        </nav>
      </div>
    </>
    );
};

export default AnotherHeader;