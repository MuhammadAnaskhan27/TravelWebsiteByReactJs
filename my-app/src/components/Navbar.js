import "./Navbar.css";
import {MenuTtems} from "./menuitems";
import {Component} from 'react';
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
  state = {clicked:false};
  handleClick= ()=>{
    this.setState({clicked : !this.state.clicked})
  }
  render(){
    return ( 
      <nav className='NavbarItems'>
          <h1 className="Navbar-logo">Adventour</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuTtems.map((item,index)=>{
              return (
                <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                {item.title}</Link>
              </li>
              )
            }
            )
            } 
            <button>Sign Up</button>
          </ul>            
      </nav>
    )
          }   
}
export default Navbar;
