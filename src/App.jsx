import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import MegaMenu from './components/MegaMenu'
import Service from './pages/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const servicesData = [
  {
    id: 1,
    name: "Website Development",
    heroTagline: "We build fast, secure, and stunning websites that help your business grow online.",
    about: "We design and develop responsive, SEO-friendly websites tailored to your brand. From concept to launch, we ensure your website represents your business perfectly and delivers a seamless user experience that keeps visitors engaged.",
    process: [
      "Research & Planning",
      "Design & Development",
      "Testing & Quality Check",
      "Launch & Support"
    ],
    whyChooseUs: [
      {
        title: "Experienced Team",
        description: "Experienced team with creative and technical expertise",
        svg: (<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "SEO-optimized",
        description: "SEO-optimized, mobile-friendly, and scalable design",
        svg:(<div className="icon-wrapper bg-soft-success">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                className="text-success">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>)
      },
      {
        title: "On-time delivery",
        description: "On-time delivery with transparent communication",
        svg:(<div className="icon-wrapper bg-soft-danger fs-6" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-danger " width="30px">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>)
      },
      {
        title: "Support",
        description: "Continuous post-launch maintenance and support",
        svg:(<div className="icon-wrapper bg-soft-warning">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                className="text-warning">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>)
      },
      
    ],
    cta: "Ready to take your business online? Let’s build it together.",
    buttonText: "Get a Free Consultation"
  },

  {
    id: 2,
    name: "Software Development",
    heroTagline: "Turning your ideas into smart, scalable digital solutions.",
    about: "We specialize in developing custom software solutions that solve real-world problems. From enterprise-level systems to business tools, we build software that’s reliable, secure, and easy to use — designed to grow with your business.",
    process: [
      "Requirement Analysis",
      "System Design & Architecture",
      "Development & Integration",
      "Testing, Deployment & Support"
    ],
    whyChooseUs: [

      {
        title: "Custom Solutions",
        description: "Custom-built solutions to fit your workflow",
        svg:(<div className="icon-wrapper bg-soft-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary" width="30px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
     </div>)
      },
      {
        title: "Efficient Development",
        description: "Agile and efficient development approach",
        svg:(<div className="icon-wrapper bg-soft-success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-success" width="30px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
       </div>)
      },
      {
        title: "Scalable Architecture",
        description: "Scalable and future-ready architecture",
        svg:(<div className="icon-wrapper bg-soft-danger">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-danger">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
          </svg>
        </div>)
      },
      {
        title: "Support",
        description: "Dedicated support and continuous improvements",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      }      
      
    ],
    cta: "Let’s turn your ideas into reality — one line of code at a time.",
    buttonText: "Let’s Talk"
  },

  {
    id: 3,
    name: "E-commerce Development",
    heroTagline: "Empowering your online business with seamless shopping experiences.",
    about: "We create powerful and engaging e-commerce platforms designed to convert visitors into loyal customers. From intuitive design to secure checkout systems, we make sure your store performs flawlessly and represents your brand with confidence.",
    process: [
      
      "Strategy & Platform Selection",
      "Store Design & Development",
      "Integration & Optimization",
      "Launch & Ongoing Support"
    ],
    whyChooseUs: [


      {
        title: "Custom Solutions",
        description: "Custom-built stores tailored to your brand",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Secure Payment",
        description: "Secure payment gateways and smooth checkout flow",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Easy-to-Manage",
        description: "Easy-to-manage product and order systems",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "SEO Optimization",
        description: "Conversion-focused design and SEO optimization",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      } ,  


      
      
      
      
    ],
    cta: "Ready to grow your online store? Let’s make it happen.",
    buttonText: "Start Your Project"
  },

  {
    id: 4,
    name: "Digital Marketing",
    heroTagline: "Grow your brand with strategies that deliver measurable results.",
    about: "We help your business get discovered, drive engagement, and increase conversions through data-driven digital marketing strategies. From SEO and social media to targeted campaigns, we ensure every click brings you closer to success.",
    process: [
      "Research & Competitor Analysis",
      "Strategy Development",
      "Campaign Execution",
      "Tracking & Optimization"
    ],
    whyChooseUs: [



      {
        title: "Tailored Marketing",
        description: "Tailored marketing strategies for your business goals",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "SEO Optimization",
        description: "SEO, Social Media, and PPC expertise",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Real-time Analytics",
        description: "Real-time analytics and transparent reporting",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Growth Based",
        description: "Focus on ROI and sustainable growth",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },

      
      
    ],
    cta: "Let’s grow your digital presence — and your business.",
    buttonText: "Boost My Brand"
  },

  {
    id: 5,
    name: "Software Testing",
    heroTagline: "Delivering quality and performance — every time.",
    about: "We ensure your applications are secure, reliable, and bug-free through comprehensive testing. From manual to automated QA, our testing process guarantees your software performs flawlessly across all devices and conditions.",
    process: [
      "Requirement Analysis",
      "Test Planning & Design",
      "Manual & Automated Testing",
      "Reporting & Continuous Improvement"
    ],
    whyChooseUs: [


      {
        title: "End-to-end Testing",
        description: "Thorough end-to-end testing for all platforms",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Early Bug Detection",
        description: "Early bug detection and detailed reports",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Skilled QA",
        description: "Skilled QA engineers and automation tools",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      {
        title: "Perfomance Tracking",
        description: "Continuous improvement and performance tracking",
        svg:(<div className="icon-wrapper bg-soft-primary">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" className='text-primary'>
                                <circle cx="12" cy="7" r="3"/>
                                <path d="M12 10c-2.5 0-4.5 2-4.5 4.5V18h9v-3.5c0-2.5-2-4.5-4.5-4.5z"/>
                                <circle cx="5" cy="9" r="2.5"/>
                                <path d="M5 11.5c-2 0-3.5 1.6-3.5 3.5V18h5"/>
                                <circle cx="19" cy="9" r="2.5"/>
                                <path d="M19 11.5c2 0 3.5 1.6 3.5 3.5V18h-5"/>
                            </svg>
                        </div>)
      },
      

    ],
    cta: "Ensure quality, boost performance — let’s test your success.",
    buttonText: "Get in Touch"
  }
];


  return (
    <>
   
    <BrowserRouter basename="/crispy-octo-happiness">

     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path="/service/:id" element={ <Service servicesData={servicesData}/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
