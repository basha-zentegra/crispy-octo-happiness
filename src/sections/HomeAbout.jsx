import React from 'react'
import whyChooseUsImg from '../assets/why-choose-us.png'


function HomeAbout() {
  return (
    <div className='container mt-5' style={{height: "100vh", alignContent:"center"}}>
        <div className='d-flex' >
            
            <aside>
                <h2 className='fw-bold text-techtor mb-4'>Who Are We?</h2>

                <img className='' style={{width:"600px"}} src={whyChooseUsImg} alt="" />
                
                
            </aside>
            <section style={{alignContent:"center"}}>
                <div className='ms-5'>

                    <p className='text-justify lead'>We’re a team of friends who turned our shared passion for technology into a purpose-driven startup. At Techtors, we’re dedicated to helping businesses grow by building smart, scalable, and impactful digital solutions.</p>
                    <div className='my-4'>
                            
                        <p className='lead fw-medium'><span className='py-2 px-4' style={{width: "max-content", backgroundColor: "#F8F8F8", borderRadius: "10px"}}> <strong>Let’s build. Let’s grow. Together.</strong> </span></p>
                    </div>
                    <button 
                        style={{background: "#546BD6", borderRadius: "6px"}}
                        className="btn btn-techtors btn-lg px-5 mt-4">
                        Learn more
                    </button>

                </div>
                            
                            
                    
            </section>
        </div>
    </div>
  )
}

export default HomeAbout