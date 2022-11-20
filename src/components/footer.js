import "./footerStyle.css";

import React from 'react'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <h1>Gautam's Portfolio</h1>
                <p>Thank you for visiting my personal portfolio website. <br></br>Connect with me over <a href="https://www.linkedin.com/in/gautam-bharte/">LinkedIn</a>.</p>
                <p>Exploring More!</p>
            </div>
            <div className="right">
                <p>Designed by ✌️ Gautam Bharte</p>
            </div>
        </div>
    </div>
  )
}

export default footer