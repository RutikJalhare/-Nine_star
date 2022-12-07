



import Home from './home';
import Contact from './Contact';
import About from './About';
import Team from './Team';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Service';
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <div className="App">
    <Home/>
    <About/>
<Service/>
<Team/>
<Contact/>
{/* <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Service/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/contact" element={<Contact/>}/>


  </Routes>
</BrowserRouter> */}

{/* <Navbar/>
<Home/>
<About/>
<Service/>
<Team/>
<Contact/> */}



</div>
    </>
  );
}

export default App;
