import React from 'react'
import logo from './images/about-img.svg';
export default function Abouti() {
  return (
  <>
            <section id="about" className="about">
      <div className="container">

        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={logo} className="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">One Page Portfolio Websites</h3>
            <p data-aos="fade-up" data-aos-delay="100">
            Thinking about creating a design portfolio website? We have handpicked 25 outstanding design portfolio websites built with Pixpa to take inspiration from.   </p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>A curated collection of 3418 portfolio websites for inspiration and references. Each review includes a full screenshot of the website design along with noteworthy features. See One Page Portfolio Templates if you need a quicker solution.</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Creative Director, Brendan Dowling, takes a simple approach to present his design portfolio. Brendan showcases a selection of his best projects directly in the vertical menu of his design portfolio website. This makes it easy for site visitors to access his work and highlights the range of clients and projects he has worked on.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </>
  )
}
export {Abouti}
