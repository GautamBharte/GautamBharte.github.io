import "./HeroImgStyle.css";

import React from 'react'
import IntoImg from "../assets/images/backGround.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntoImg" />
        </div>
        <div className="content">
            <p>hi, there I'm Engineer</p>
            <h1>Data Science Enthusiast</h1>
            <div>
                <Link to="/project" className="btn">Resume</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
