import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './Components/Home/Home';
import {Services} from './Components/Services/Services';
import {Portfolio} from './Components/Portfolio/Portfolio';
import {Aboutus} from './Components/Aboutus/Aboutus';
import {JoinUs} from './Components/JoinUs/JoinUs';
import {Footer} from './Components/Footer/Footer';
import {Contactus} from './Components/Contactus/Contactus';
import Navbar from './Components/Navbar/Navbar';

const App = ()=>   {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
