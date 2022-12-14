import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      

      
      
    </div>
    
    
  );
}

export default App;
