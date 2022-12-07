// import { Link, li } from "react-router-dom";
// // import {HashLink as li} from "react-router-hash-link";
import {Link} from "react-scroll"
function Navbar() {
      return (
            <>

         <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
     
                                                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <Link className="nav-item">
 <Link className="nav-link active" aria-current="page"  activeClass="active" to="home"      spy={true} smooth={true} offset={-100} duration={500}     >Home</Link>
 </Link>
                  <Link className="nav-item">
  <Link className="nav-link active" aria-current="page" activeClass="active" to="about"      spy={true} smooth={true} offset={-100} duration={500}     >About us</Link>
                    </Link>
                                                            <Link className="nav-item">
                                                                  <Link className="nav-link active" aria-current="page" activeClass="active" to="service"      spy={true} smooth={true} offset={-100} duration={500}      >Services</Link>
                                                                 </Link>
                                                            <Link className="nav-item">
                                                                  <Link className="nav-link active" aria-current="page"  activeClass="active" to="team"      spy={true} smooth={true} offset={-100} duration={500}     >Team</Link>
                                                                 </Link>
                                                            <Link className="nav-item">
                                                                  <Link className="nav-link active" aria-current="page"  activeClass="active" to="contact"      spy={true} smooth={true} offset={-100} duration={500}     >Contact</Link>
                                                                 </Link>
                                                            </ul>
    </div>
  </div>
</nav>
        


            </>
      );
}

export default Navbar;