import React from "react";
import Hero from "./Hero";


import Navbar from "./Navbar";
import about1 from "../assets/night.jpg";
import Footer from "./Footer";
import Aboutdata from "./Aboutdata";


function About(){
    return(
        <>
        <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={about1}
    title = "About"
    url= "/"
    btnClass="hide"
    />
    
    <Aboutdata/>
    <Footer/>
        </>
    )
    }
    export default About;