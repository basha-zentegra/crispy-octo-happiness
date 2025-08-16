import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SplitText from '../components/SplitText'
import aboutHome from '../assets/about-home.png'
import heroImage from '../assets/chandan-nobg.png'
import websiteMockup from '../assets/hero-grapic-animation.png'
import mobileMockup from '../assets/mobile-mockup.png'
import HomeService from '../sections/HomeService'
import WhyChooseUs from '../sections/WhyChooseUs'
import HomeAbout from '../sections/HomeAbout'
import Footer from '../components/Footer'

function Home() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      console.log('Fonts loaded!');
      setFontsLoaded(true);
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className='mx-5'>
      <Navbar />
     
        <section className='d-flex justify-content-evenly' style={{ minHeight: '70vh' }}>
            <div className="container-fluid d-flex align-items-center justify-content-center m-5" style={{ width: '50%' }}>
            <div className='text-start'>
                {fontsLoaded && (
                    <SplitText
                        text="Let’s Build and Grow Together"
                        className="big-text text-dark"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                )}
                <div className='hero-p-div'>
                    <p className=" py-2 mx-4 fw-400" >
                        Partner with us to take your business to the next level.
                    </p>
                </div>
                <div className="d-flex justify-content-start gap-3 mt-5">
                    <button 
                        style={{background: "#546BD6", borderRadius: "6px"}}
                        className="btn btn-techtors btn-lg px-5">
                        Get Started
                    </button>
                    <button 
                        style={{border: "solid 1px #222", borderRadius: "5px"}}
                        className="btn  btn-lg px-4">
                        Learn More
                    </button>
                </div>
            </div>
        </div>

        <div style={{ width: '50%',  position: "relative" }} className='container m-5 image-fade-container'>
            <svg style={{position: "absolute", left: "0", bottom: "0", zIndex: 1, opacity: 0.7 }} width="600" height="400" viewBox="0 0 359 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8984 227.927C16.8984 227.927 83.3933 104.832 116.752 109.912C150.112 114.992 129.956 188.776 157.5 187.5C185.044 186.224 244 123 244 123L322.5 33" stroke="url(#paint0_linear_0_1)" stroke-width="33" stroke-linecap="round"/>
                <path d="M271.538 14.7523C271.538 14.7523 334.193 8.00566 338.95 11.1784C343.707 14.3511 348.374 72.7143 348.374 72.7143" stroke="#4FDF59" stroke-width="20" stroke-linecap="round"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="280.439" y1="-7.92263" x2="57.7193" y2="261.653" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4FDF59"/>
                <stop offset="1" stop-color="#7DC3B3"/>
                </linearGradient>
                </defs>
            </svg>
            <img className='website-mockup' src={websiteMockup} alt="" />
            
            <img className='mobile-mockup' src={mobileMockup} alt="" />

            <img className='hero-piechart' src="https://cdn-icons-png.flaticon.com/128/2257/2257295.png" alt="" />

            <img style={{ position: "relative", zIndex: 3 }} src={heroImage} className="img-fluid hero-img image ms-3 mt-3" alt="right-side" />
            <div style={{  zIndex: 30 }} className="fade-overlay"></div>
            

        </div>



        </section>

        <HomeAbout />

        <HomeService />

        <div className="free-consultation text-center text-white">
            <h1 className='fw-bold my-3'>Get a Free Consultation</h1>
            <button style={{color: "white", border: "1px solid white"}} className='btn'>Get Started <i class="bi bi-arrow-right"></i></button>
        </div>
        <br />
        <br />

        <WhyChooseUs />



        {/* <section className="py-5 bg-white" id="about">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h2 className="fw-bold text-techtors mb-3">Our Mission</h2>
                    <p className="lead text-muted">
                    We're on a mission to empower individuals and teams to grow together through knowledge sharing, collaboration, and action.
                    </p>
                    <p>
                    Whether you're just starting your journey or scaling new heights, we're here to support you with tools, insights, and a thriving community that believes in progress.
                    </p>
                    <a href="#features" className="btn btn-outline-techtors mt-3">
                    Learn More
                    </a>
                </div>
                <div className="col-lg-6">
                    <img
                    src={aboutHome}
                    alt="Mission illustration"
                    className="img-fluid rounded"
                    />
                </div>
                </div>
            </div>
        </section> */}



    </div>
  );
}

export default Home;

