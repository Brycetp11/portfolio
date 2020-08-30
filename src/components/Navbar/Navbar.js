import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                <div className="d-flex flex-grow-1">
                    <div className="p-3 text-light font-weight-bolder text-uppercase">
                        <h3>Bryce Pingul</h3>
                    </div>
                </div>
                <div className="navbar-collapse flex-grow-1" id="myNavbar">
                    <ul className="navbar-nav ml-auto flex-nowrap">

                        <li className="nav-item">
                            <Link to="/" className="nav-link m-2 menu-item">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link m-2 menu-item">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link m-2 menu-item">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/bryce-pingul/" className="nav-link m-2 menu-item"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/Brycetp11" className="nav-link m-2 menu-item"><i className="fa fa-github-square"></i></a>
                        </li>

                    </ul>
                </div>
            </nav>
    )
}
