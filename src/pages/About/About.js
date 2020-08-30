import React from 'react'
import ProfileImage from "../../assets/image0[189].png"
import "./about.css"

export default function About() {
    return (
        <div className="container">
            <div className="row about-img">
                <img src={ProfileImage} className="img-thumbnail align-self-start mr-3" alt="Bryce Pingul" />
            </div>
            <div className="row about-me">

                <h4 className="mt-0">About Me</h4>
                <p>I am a recent graduate from the University of Washington's Fullstack Coding Bootcamp through Trilogy educational services. My skills include proficiency in React, MySQL, MongoDB, Node.js, Javascript, HTML, CSS, and much more.</p>
                <p>A graduate from Seattle University with a B.S in Biology. Since graduating, I have been working as a Medical Scribe for ScribeAmerica, specializing in Orthopedic, Spine and Neurosurgical care.</p>
                <p>As a young adult, I have taken part as a session vocalist in many popular video game soundtracks (Overwatch, Heartstone, Destiny, and many others). My background comes as a classical vocalist with a passion and love for Motown.</p>
            </div>
        </div>


    )
}
