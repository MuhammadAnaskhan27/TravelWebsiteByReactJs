import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import about1 from "../assets/night.jpg";
import Footer from "./Footer";
import Trip from "./Trip";


function Services(){
    return(
        <>
        <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={about1}
    title = "Services"
    url= "/"
    btnClass="hide"
    />
    <Trip/>
    <Footer/>
        </>
    )
    }
    export default Services;