import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { div } from 'framer-motion/client';
import '../css/footer.css'
import logo from '../assets/image.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <>

<footer className="mt-auto">
  <div className="container mb-5">
    <div className="row">
      <div className="col-md-4 mb-3">
        <Link to="/" className="pb-5" ><img src={logo} style={{height: "40px"}} alt="" /></Link>
        <p className='mt-4'>
         Let’s Build and Grow Together
        </p>
      </div>

      <div className="col-md-4 mb-3">
        <h5 className='mb-3'>Quick Links</h5>
        <ul className="list-unstyled">
          <li className='mb-3'>
            <Link to="" className="text-decoration-none py-3">
              Home
            </Link>
          </li>
          <li className='mb-3'>
            <Link to="/about" className="text-decoration-none py-3">
              About Us
            </Link>
          </li>
          <li className='mb-3'>
            <Link to="/contact" className="text-decoration-none py-3">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-md-4 mb-3">
        <h5 className='mb-3'>Follow Us</h5>
        <ul className="list-inline social-icons">
          <li className="list-inline-item me-5">
            <a href="#" className="">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item me-5">
            <a href="#" className="">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item me-5">
            <a href="#" className="">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item me-5">
            <a href="https://in.linkedin.com/company/techtors-solutions" target='_blank' className="">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* <hr className="mb-4" /> */}

    
  </div>
  <div className="mb-0 bottom-footer">
      <div className=" text-center">
        <p className='mb-0 p-3 '>&copy; 2025 <strong>Techtors</strong>. All rights reserved.</p>
      </div>
    </div>
</footer>

   </>
  );
}