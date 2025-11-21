import React from 'react'

const Contact = () => {
  return (
    <div className='mx-5'>
        <section className='text-center about-hero' >
            <h6 className='lead fw-medium text-techtors'>CONTACT US</h6>
            <h1 className='big-text-about-us'>We’d love to hear from <span className='text-techtors'>you!</span></h1>
            <p>Whether you’re looking to build a website, develop software,<br/> launch an e-commerce store, or grow your business with digital marketing <br /> <strong>— our team is here to help.</strong> </p>
            <div className="glow"></div>
            <div className="glow2"></div>
        </section>
        <section className='row'>

          <div className="col text-center">
            <h5><i class="bi bi-geo-alt-fill text-techtors"></i> Banglore</h5>
          </div>
          <div className="col text-center"><h5><i class="bi bi-envelope-fill text-techtors"></i> contact@techtors.in</h5></div>
          <div className="col text-center"><h5><i class="bi bi-telephone-fill text-techtors"></i> +91 9360149208</h5></div>

        </section>
        {/* form  */}
        <section className='row my-5 ' >
          <div className='col-3'></div>
          <div className='col-6 border p-5 py- rounded text-center'>
            <h4 className='mb-4'>Let’s Talk</h4>
            <form action="">
              <input type="text" class="form-control mb-3"  placeholder='Name'></input>
              <input type="email" class="form-control mb-3"  placeholder='Email'></input>
              <input type="number" class="form-control mb-3" placeholder='Phone'></input>
              <textarea class="form-control mb-5" id="exampleFormControlTextarea1" rows="4" placeholder='Message'></textarea>
              <button className='btn-sm btn btn-techtors mb-4' type='submit'>Submit</button>
            </form>
          </div>
          <div className='col-3'></div>
        </section>
    </div>
  )
}

export default Contact