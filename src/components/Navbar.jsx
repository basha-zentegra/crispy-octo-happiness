import React from 'react';
import logo from '../assets/image.png'
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';

function Navbar() {

  document.querySelectorAll('.dropdown-mega').forEach(function(dropdown){

    dropdown.addEventListener('mouseenter', function(){
      const menu = this.querySelector('.dropdown-menu');
      new bootstrap.Dropdown(this.querySelector('[data-bs-toggle="dropdown"]')).show();
    });

  });

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5" href="#"><img src={logo}
        style={{height: "40px"}} alt="" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            
          
            <li className="nav-item dropdown dropdown-mega">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
              <div className="dropdown-menu mega-menu p-">
                <div className="container">
                  <MegaMenu />
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"   >Contact Us</Link>
            </li>
            
          </ul>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
