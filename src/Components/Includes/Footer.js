import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../../Images/hubex2-white.png";
import "./Footer.css";

const Footer = () => {
    const scrollIntoViewHandler = (id) =>{
        const anchor = document.getElementById(id);
        const yOffset = -500;
        const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset; anchor.scrollIntoView({behavior:"smooth",top:y})
    }
    //Getting the value from get in touch input
    const [gitValue,setGitValue] = useState('')
    console.log(gitValue)
    const getInTouchHandler = (e) =>{
        const value = e.target.value;
        setGitValue(value);
    }
    const getInTouchFormHandler = (e) =>{
        e.preventDefault();
        alert('Email Sent')
    }
  return (
    <>
        <footer className="footer-section" id='footerNav'>
            <Container>
                <div className="footer-content pt-5 pb-5">
                    <Row>
                        <div className="footer-logo">
                            <a href="https://www.hubextech.com/">
                                <img src={logo} className="img-fluid" alt="logo" />
                            </a>
                        </div>
                        <Col className="col-12 col-xl-5 col-lg-5 mb-30">
                            <div className="footer-widget footer-margin">
                                <div className="footer-widget-heading">
                                    <h3>HubexTech</h3>
                                </div>
                                <ul className="p-0 footer-nav">
                                    <li>
                                        <Nav.Link onClick={() => scrollIntoViewHandler('homeNav')}>
                                            <i className="fas fa-home"></i>
                                            <span>&nbsp; Home </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link onClick={() => scrollIntoViewHandler('servicesNav-main')}>
                                            <i className="fab fa-servicestack"></i>
                                            <span>&nbsp; Services </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link onClick={() => scrollIntoViewHandler('costNav-main')}>
                                            <i className="fas fa-dollar-sign"></i>
                                            <span>&nbsp; Request </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link onClick={() => scrollIntoViewHandler('projNav-main')}>
                                            <i className="fas fa-tasks"></i>
                                            <span>&nbsp; Portfolio </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link onClick={() => scrollIntoViewHandler('cntctNav-main')}>
                                            <i className="fas fa-address-card"></i>
                                            <span>&nbsp; Contact </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link>
                                            <i className="fas fa-certificate"></i>
                                            <span>&nbsp; Careers </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link >
                                            <i className="fas fa-file-alt"></i>
                                            <span>&nbsp; Privacy Policy </span>
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link >
                                            <i className="fas fa-file-invoice"></i>
                                            <span>&nbsp; Terms &amp; Conditions </span>
                                        </Nav.Link> 
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="col-12 col-xl-4 col-lg-4 mb-30">
                            <div className="footer-widget footer-margin">
                                <div className="footer-widget-heading">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p className="footer-nav">
                                        Interested in any of our SERVICES? Talk to our experts.
                                    </p>
                                </div>
                                <div className="git-form">
                                    <form action="#" onSubmit = {getInTouchFormHandler}>
                                        <div className="form-group res-input">
                                            <input
                                                type="email"
                                                placeholder="Enter Email"
                                                className="form-control"
                                                name = "exampleEmail"
                                                required
                                                onChange = {getInTouchHandler}
                                                value = {gitValue}
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid email.
                                            </div>
                                        </div>
                                        <button>
                                            <i className="fab fa-telegram-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-12 col-xl-3 col-lg-3 mb-30">
                            <div className="footer-widget footer-margin">
                                <div className="footer-widget-heading">
                                    <h3>Connect With Us</h3>
                                </div>
                                <div className="media-icons">
                                    <a href="https://twitter.com/HubexT">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/hubex-tech/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="copyright-area">
                <Container>
                    <Row>
                        <Col className="col-xl-12 col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright &copy; 2021
                                    <a href="https://www.hubextech.com/" className="ms-2">
                                        HubexTech&nbsp;
                                    </a>
                                    - All Rights Reserved.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    </>
  );
};
export default Footer;
