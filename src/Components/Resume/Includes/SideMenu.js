import React from "react";
import { Nav } from "react-bootstrap";
import "./SideMenu.css";
import profile from "../../../Images/hamza.jpg";
import ResumeFooter from "./ResumeFooter";

function SideMenu() {
  return (
    <>
        <section>
            <i className="fas fa-bars mobile-nav-toggle d-xl-none"></i>
            <header className="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={profile} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light">Hamza Hamid</h1>
                    </div>
                    <nav id="side-navbar" className="nav-menu navbar sideNavbar">
                        <ul>
                            <li>
                                <Nav.Link onClick={() =>{ const anchor = document.getElementById('resume-home'); const yOffset = -500; const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})}}>
                                    <i className="fas fa-home"></i>
                                    <span className="sp">&nbsp; HOME </span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link onClick={() =>{ const anchor = document.getElementById('resume-about'); const yOffset = -500; const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})}}>
                                    <i className="fas fa-user"></i>
                                    <span>&nbsp; ABOUT </span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link onClick={() =>{ const anchor = document.getElementById('resume-nav'); const yOffset = -500; const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})}}>
                                    <i className="fas fa-file"></i>
                                    <span>&nbsp; RESUME </span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link onClick={() =>{ const anchor = document.getElementById('resume-contact'); const yOffset = -500; const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})}}>
                                    <i className="fas fa-envelope"></i>
                                    <span>&nbsp; CONTACT </span>
                                </Nav.Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
        <ResumeFooter />
    </>
);
}

export default SideMenu;
