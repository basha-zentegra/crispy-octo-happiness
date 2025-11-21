import React from 'react'
import { Link } from 'react-router-dom'

const MegaMenu = () => {
  return (
    <>

    <section className='row g-4 m-1'>

        <div className="col-6">

            <Link to="/service/1" className='d-flex my- py-4 serviceDiv text-dark'>
                    <svg width="100" height="auto" viewBox="0 0 75 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.9" width="75" height="51" fill="#51A2FF"/>
                        <rect x="1" y="5" width="73" height="45" fill="white"/>
                        <circle cx="4" cy="3" r="1" fill="#FF6467"/>
                        <circle cx="7" cy="3" r="1" fill="#05DF72"/>
                        <circle cx="10" cy="3" r="1" fill="#FFDF20"/>
                        <path d="M49 35H11V12H49V35Z" fill="#ED6BFF"/>
                        <path d="M48.151 39.1647L49.8479 41.8331" stroke="black"/>
                        <path d="M46.1201 36.4429L51.4453 38.6696L48.5 39.5L46.8544 42.1681L46.1201 36.4429Z" fill="black"/>
                    </svg>
                    
                    <div className='ms-4'>
                        <h5 >Web Development</h5>
                        {/* <Link className="fs-5" to="/service/1">Web Development</Link> */}
                        <p className='small text-muted'>Crafting responsive, fast, and user-friendly websites tailored to your brand.</p>
                    </div>

            </Link>

        </div>

        <div className="col-6">
            <Link to="/service/2" className='d-flex my- py-4  serviceDiv text-dark'>
                    <svg width="100" height="auto" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="55" width="46" height="9" fill="#FFD230"/>
                    <rect x="33" y="55" width="11" height="9" transform="rotate(-90 33 55)" fill="#FFD230"/>
                    <rect opacity="0.9" width="75" height="48" fill="#51A2FF"/>
                    </svg>

                    
                    <div className='ms-4'>
                        <h5 >Software Development</h5>
                        <p className='small text-muted'>Building secure, scalable, and custom software to meet your business needs.</p>
                    </div>

                </Link>
        </div>

        <div className="col-6">
            <Link to="/service/3" className='d-flex my-  py-4 serviceDiv text-dark'>
                    <svg width="100" height="auto" viewBox="0 0 82 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.930604 0.113137C0.976867 1.11207 1.02313 2.111 1.06939 3.10993C1.451 3.07661 1.8326 3.0433 2.2142 3.00998C4.14713 2.84123 6.08005 2.67248 8.01298 2.50374L6.84348 1.77778C9.01758 6.23003 11.1917 10.6823 13.3658 15.1345C13.5339 15.4787 13.7019 15.823 13.87 16.1672C14.2134 16.0165 14.5568 15.8658 14.9002 15.7152C14.7608 15.3584 14.6213 15.0016 14.4818 14.6449C12.6779 10.0302 10.8739 5.41557 9.06999 0.800914L8.78431 0.0701167L7.90049 0.074958C5.96025 0.0855861 4.02 0.0962142 2.07975 0.106842C1.6967 0.10894 1.31365 0.111039 0.930604 0.113137Z" fill="#FF8904"/>
                        <path d="M8 7.5L81.5 2L61.5 45H22L8 7.5Z" fill="#ED6BFF"/>
                        <circle cx="31" cy="54" r="5" fill="#FF8904"/>
                        <circle cx="52" cy="54" r="5" fill="#FF8904"/>
                    </svg>
                    
                    <div className='ms-4'>
                        <h5 >Ecommerce Development</h5>
                        <p className='small text-muted'>Designing powerful online stores to boost sales and customer experience.</p>
                    </div>

                </Link>
        </div>

        <div className="col-6">
            <Link to="/service/4" className='d-flex my- py-4 serviceDiv text-dark'>
                    <svg className=' ms-3 me-2' width="85" height="auto" viewBox="0 0 51 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="15" width="29" height="18" fill="#FFD230"/>
                        <rect x="9" y="33" width="7" height="31" fill="#FFD230"/>
                        <path d="M0 18.6748L3 15V33L0 30.0226V18.6748Z" fill="#FFD230"/>
                        <path d="M24 13.1455L51 1V44L24 34.2865V13.1455Z" fill="#51A2FF"/>
                        <rect x="46" width="2" height="44" fill="white"/>
                    </svg>


                    <div className='ms-4'>
                        <h5>Digital Marketing</h5>
                        <p className='small text-muted'>Driving growth with SEO, social media, and data-driven marketing strategies.</p>
                    </div>

                </Link>
        </div>

        
        <div className="col-6">
            <Link to="/service/5" className='d-flex my- py-4 serviceDiv text-dark'>
                   <svg width="100" height="auto" viewBox="0 0 77 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="55" width="46" height="9" fill="#FFD230"/>
                        <rect x="33" y="55" width="11" height="9" transform="rotate(-90 33 55)" fill="#FFD230"/>
                        <rect opacity="0.9" width="75" height="48" fill="#51A2FF"/>
                        <path d="M61.0159 40.1842C60.5479 40.5985 60.0799 41.0127 59.612 41.427C59.7079 41.8497 59.8194 42.2585 59.9466 42.6536C60.4551 44.2338 61.2132 45.593 62.2209 46.7312C65.7479 50.7152 69.6145 54.3984 73.8209 57.7808C74.1213 58.0225 74.4235 58.2625 74.7274 58.5011C75.1954 58.0868 75.6634 57.6725 76.1313 57.2582C75.9314 56.9276 75.7298 56.5985 75.5264 56.271C72.6788 51.6856 69.4916 47.4009 65.9647 43.417C64.957 42.2787 63.6997 41.3614 62.1928 40.665C61.8161 40.4909 61.4238 40.3306 61.0159 40.1842Z" fill="#F67454" mask="url(#path-4-inside-1_1001_4)"/>
                        <circle cx="57" cy="37" r="11" fill="black"/>
                        <circle cx="57" cy="37" r="10" fill="white"/>
                    </svg>

                    <div className='ms-4'>
                        <h5>Software Testing</h5>
                        <p className='small text-muted'>Ensuring quality and performance through rigorous testing and bug fixing.</p>
                    </div>


                </Link>
        </div>

    </section>

    
        
    </>
  )
}

export default MegaMenu