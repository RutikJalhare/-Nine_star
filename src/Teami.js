import React from 'react'
import Team_member from './Team_member'
import img1 from './images/team-1.jpg';
import img2 from './images/team-2.jpg';
import img3 from './images/team-3.jpg';
import img4 from './images/team-4.jpg';

function Teami() {

  const allimages = [img1,img2,img3,img4];
  return (
<>

{console.log(allimages)}
    <section id="team" class="team">
      <div class="container">

        <div class="section-title text-center" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>

        <div class="row">

       <Team_member data={img1}
        name="Walter White"
        profession="Chief Executive Officer"
       />
      

      <Team_member data={img2}
        name="Sarah Jhonson"
        profession="Product Manager"
       />
      
      <Team_member data={img3}
        name="William Anderson"
        profession="CTO"
       />
      
      <Team_member data={img4}
        name="Amanda Jepson"
        profession="Accountant"
       />
      



        </div>

      </div>
    </section>


</>
  )
}

export default Teami