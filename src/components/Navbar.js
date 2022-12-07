import "./NavbarStyle.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Gautam Bharte</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/"><h3>Home</h3></Link>
            </li>
            <li>
                <Link to="/project"><h3>Project</h3></Link>
            </li>
            <li>
                <Link to="/about"><h3>About</h3></Link>
            </li>
            <li>
                <Link to="/contact"><h3>Contact</h3></Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
        </div>
    </div>
  )
}

export default Navbar