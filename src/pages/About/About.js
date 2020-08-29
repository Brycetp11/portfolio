import React from 'react'
import ProfileImage from "../../assets/image0[189].png"
import "./about.css"

export default function About() {
    return (
        <div className="container about-body">  
            <div className="row justify-content-center">
                <div className="card col-12 col-md-6 text-light card-about">
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">About Me</h5>
                        <img src={ProfileImage} className="card-img-top img-fluid img-thumbnail" alt="Bryce Pingul"/>
                        <br/><br/>
                        <p className="card-text">I am a recent graduate from the University of Washington's Fullstack Coding Bootcamp through Trilogy educational services. My skills include proficiency in React, MySQL, MongoDB, Node.js, Javascript, HTML, CSS, and much more.</p>
                        <p className="card-text">A graduate from Seattle University with a B.S in Biology. Since graduating, I have been working as a Medical Scribe for ScribeAmerica, specializing in Orthopedic, Spine and Neurosurgical care.</p>
                        <p className="card-text">As a young adult, I have taken part as a session vocalist in many popular video game soundtracks (Overwatch, Heartstone, Destiny, and many others). My background comes as a classical vocalist with a passion and love for Motown.</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
