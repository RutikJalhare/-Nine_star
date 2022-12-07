import Navbar from "./Navbar";
import {Services} from "./Servicesi";
function Service () {
      return (
        <div id="services" className="Service ">
        {/* <Navbar/> */}
        <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title text-center">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>

        <div className="row">
     
        <Services/>
        <Services/>
        <Services/>
        <Services/>


    
        </div>
      </div>
    </section>
 

        </div>
      );
    }
    
    export default Service ;