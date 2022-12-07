import React from 'react'
import logo from './images/hero-img.svg';
export default function Homei() {
  return (
    <>

  <section id="hero" className="d-flex align-items-center my-3">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Make Your Nonprofit Stand Out From Others.</h1>
          <h2>Captivate your audience with memorable branding. Explore opportunities to step up your Nonprofit’s design below.</h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 hero-img">
        <img src={logo} alt="Girl in a jacket" width="500" height="600"/>
        </div>
      </div>
    </div>

  </section>

    </>
    
  )
}
export{ Homei};
