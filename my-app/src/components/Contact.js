import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import about1 from "../assets/2.jpg";
import Footer from "./Footer";
import Contactform from "./Contactform"



function Contact(){
    return(
        <>
        <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={about1}
    title = "Contact"
    url= "/"
    btnClass="hide"
    />
    <Contactform/>
    <Footer/>
      

        </>
    )
    }
    export default Contact;