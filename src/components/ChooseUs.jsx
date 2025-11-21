import React from 'react'
import '../css/chooseus.css'

const ChooseUs = ({service}) => {
  return (
    <>

    <div className="bg-light">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="section-heading display-6 mb-3">Why Choose Us for {service.name}</h1>
                {/* <p className="text-muted lead">Professional web solutions crafted to enhance your online presence.</p> */}
            </div>

            <div className="row g-4">


                {service.whyChooseUs.map(e => (

                <div className="col-md-6">
                    <div className="card feature-card h-100 p-4">
                        {e.svg || "no data"}
                        <h3 className="card-title">{e.title}</h3>
                        <p className="card-text text-muted">{e.description}
                        </p>
                    </div>
                </div>

                ))}

                



                {/* <div className="col-md-6">
                    <div className="card feature-card h-100 p-4">
                        <div className="icon-wrapper bg-soft-success">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                className="text-success">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3 className="card-title">SEO-optimized</h3>
                        <p className="card-text text-muted">{service.whyChooseUs[1].description}</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card feature-card h-100 p-4">
                        <div className="icon-wrapper bg-soft-danger fs-6" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-danger " width="30px">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <h3 className="card-title">On-time delivery</h3>
                        <p className="card-text text-muted">{service.whyChooseUs[2].description}</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card feature-card h-100 p-4">
                        <div className="icon-wrapper bg-soft-warning">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                className="text-warning">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 className="card-title">Support</h3>
                        <p className="card-text text-muted">{service.whyChooseUs[3].description}</p>
                    </div>
                </div> */}

            </div>
        </div>
    </div>

    </>
  )
}

export default ChooseUs