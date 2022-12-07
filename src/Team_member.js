import React from 'react'
import img1 from './images/team-1.jpg';
const Team_member = (props) => {
 
  return (
<>
<div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member">
            <img src={props.data} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{props.name}</h4>
                  <span>{props.profession}</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

</>
  )
}

export default Team_member;