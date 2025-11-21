import React from 'react'
import '../css/cta.css'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-12">
                
                
                <div className="card card-glow hvr-glow">
                <div className="card-body">
                    <h5 className="card-title text-center">Ready to take your business online? Let’s build it together.</h5>
                    {/* <p className="card-text">Experience the mesmerizing glow of our new card component. With a gradient background and a smooth hover animation, this card will captivate your users and elevate the look and feel of your website.</p> */}
                    <div className='text-center'>
                        <Link to="/contact" className="btn btn-glow ">Get a Free Consultation</Link>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default CTA