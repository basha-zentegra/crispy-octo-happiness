import React from 'react'
import whyChooseUsImg from '../assets/why-choose-us.png'
import teamWork from '../assets/team-work.svg'

function WhyChooseUs() {
  return (
    <div className='container'>
        <h2 className="fw-bold text-techtor">Why Choose Us?</h2>
        <div className='d-flex justify-content-between'>
           <aside>
                 <div className='d-flex myCard' style={{backgroundColor:"#FEF3C6"}}>
                    <div className='myCard-head'>
                        <i class="bi bi-clock-history fs-1"></i> 
                    </div>
                    <div className='myCard-body'>
                        <h5 className='m-0'>On-Time Delivery</h5>
                    </div>
                </div>

                <div className='d-flex myCard' style={{backgroundColor:"#CBFBF1"}}>
                    <div className='myCard-head'>
                        <i class="bi bi-chat-dots-fill fs-1"></i>
                    </div>
                    <div className='myCard-body'>
                        <h5 className='m-0'>Transparent Communication</h5>
                    </div>
                </div>

                <div className='d-flex myCard' style={{backgroundColor:"#E0E7FF"}}>
                    <div className='myCard-head'>
                        <i class="bi bi-gear-fill fs-1"></i>
                    </div>
                    <div className='myCard-body'>
                        <h5 className='m-0'>Ongoing Support</h5>
                    </div>
                </div>

                <div className='d-flex myCard' style={{backgroundColor:"#FFE2E2"}}>
                    <div className='myCard-head'>
                        <i class="bi bi-arrows-fullscreen fs-1"></i>
                    </div>
                    <div className='myCard-body'>
                        <h5 className='m-0'>Scalable Solutions</h5>
                    </div>
                </div>
           </aside>
           <section style={{alignContent:"center"}}>
                
                <img className='' style={{width:"600px"}} src={teamWork} alt="" />
        
           </section>
        </div>
        
    </div>
  )
}

export default WhyChooseUs