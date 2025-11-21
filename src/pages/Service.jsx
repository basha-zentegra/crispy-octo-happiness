import React from 'react'
import Pricing from '../components/Pricing'
import fivestepImg from '../assets/5-step-process.png'
import ChooseUs from '../components/ChooseUs'
import CTA from '../components/CTA'
import { useParams } from "react-router-dom";

const Service = ({servicesData}) => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === Number(id));


  if (!service) return <h2>Service not found</h2>;
  console.log(service)

  return (
    <>
        <section className='text-center about-hero' >
            <h1 className='big-text-about-us fw-mediu text-techtors text-uppercase'>{service.name}</h1>
            <h3 className='fw-semibold'>{service.heroTagline}</h3>

            <article className='d-flex justify-content-center mt-5'>
              <div className='border border-dark w-75 mt-4 gradient-wrapper-service mt-5'>
                <p className=' mx-5 px-5 my-3'>{service.about}</p>
              </div>
            </article>
            
            <div className="glow"></div>
            <div className="glow2"></div>
        </section>

        <section className='mt-4'>
          <ChooseUs service={service} />
        </section>
        <section>
            <Pricing/>
        </section>
        <section className='text-center my-5 py-5'>
          <img src={fivestepImg} style={{width: '70vw'}} alt="" />
        </section>
        
        <section className='my-5 py-5'>
          <CTA />
        </section>
    </>
  )
}

export default Service
