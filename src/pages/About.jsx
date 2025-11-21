import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <div className='mx-5'>


        <section className='text-center about-hero' >
            <h6 className='lead fw-medium text-techtors'>MISSION</h6>
            <h1 className='big-text-about-us'>On a mission to help businesses <br /> grow with <span className='text-techtors'>technology</span>.</h1>
            <p>A smarter, simpler platform that keeps teams aligned, focused, and <br /> driving every project toward one goal: profitability through clarity and <br /> coordination.</p>
            <div className="glow"></div>
            <div className="glow2"></div>
        </section>

        <section className='DNA '>

            <div >
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='mb-5 text-techtors'>Our DNA - <span className='fs-6 lead mb-0 text-dark'>Our success is rooted in our core values, which shape every aspect of our work, from fostering collaboration to making well-informed decisions.</span></h2>
                
            </div>

            <div className='d-flex'>
                <div className='d-flex gap-5'>
                    <div className='dna-divs'>
                        <div className='about-icon' style={{backgroundColor:"#00A669"}}><i class="bi bi-shield-check"></i></div>
                        <h4 className='my-4'>Trust</h4>
                        <p className='m-0'>Trust is the bedrock of our company, shaping our growth and success.</p>
                    </div>
                    <div className='dna-divs'>
                        <div className='about-icon' style={{backgroundColor:"#A05EFF"}}><i class="bi bi-people"></i></div>
                        <h4 className='my-4'>Teamwork</h4>
                        <p className='m-0'>Trust is the bedrock of our company, shaping our growth and success.</p>
                    </div>
                    <div className='dna-divs'>
                        <div className='about-icon' style={{backgroundColor:"#F73D38"}}><i class="bi bi-fire"></i></div>
                        <h4 className='my-4'>Passion</h4>
                        <p className='m-0'>Trust is the bedrock of our company, shaping our growth and success.</p>
                    </div>
                </div>

                <div className='d-flex gap-5'>
                    <div className='dna-divs' >
                        <div className='about-icon' style={{backgroundColor:"#56423E"}}><i class="bi bi-award"></i></div>
                        <h4 className='my-4'>Integrity</h4>
                        <p className='m-0'>Trust is the bedrock of our company, shaping our growth and success.</p>
                    </div>
                    <div className='dna-divs'>
                        <div className='about-icon' style={{backgroundColor:"#0048CF"}}><i class="bi bi-bullseye"></i></div>
                        <h4 className='my-4'>Commitment</h4>
                        <p className='m-0'>Trust is the bedrock of our company, shaping our growth and success.</p>
                    </div>
                    
                </div>
            </div>

        </section>

        <section>
            <div className="free-consultation text-center text-white">
                
                <button style={{color: "white", border: "none"}} className='btn'> <h1 className='fw-bold my-3'>Contact Us <i class="bi bi-arrow-right"></i></h1> </button>
            </div>
        </section>

    
    </div>
  )
}

export default About