import Hero from "./Hero";
import React from "react";
import Navbar from "./Navbar";
import hero1 from "../assets/12.jpg";
import Destination from "./Desination";
import Trip from "./Trip";
import Footer from "./Footer";

function Home(){
return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={hero1}
    title = "Your Journey Your Story"
    text = "Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url= "/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    
    </>
)
}
export default Home;