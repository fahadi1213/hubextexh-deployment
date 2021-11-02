import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./ContactResume.css";

function ContactResume() {
    return (
        <section id="resume-contact" className="section-bg side-nav-links-section res-section contact-resp-main">
            <div className="contact-resume-res contact-section-res">
            <Container>
                <div className=" section-title">
                    <h2>Contact</h2>
                </div>
                <Row className="contact_style">
                    <div className="contact-main-heading d-flex justify-content-start">
                        <h4>Don't hesitate to contact us.</h4>
                    </div>
                    <Col className="col-12 col-xl-6 col-md-6 text-center">
                        <div className="single-cta">
                            <div className="cta-text p-0">
                                <div className="footer-contact-heading">
                                    <h3>Find Us</h3>
                                </div>
                                <ul className="p-0 res-contact-address footer_section_a text-start">
                                    <li className="text-center">
                                        <a href="https://www.google.com/maps/place/4+Riverina+Blvd,+Brookfield+VIC+3338,+Australia/@-37.708397,144.545497,16z/data=!4m5!3m4!1s0x6ad693151396b1df:0xfaf6c1c475e03ae2!8m2!3d-37.7083967!4d144.545497?hl=en">
                                            <i className="fas fa-map-marker-alt me-2"></i>
                                            4 Riverina boulevard, Brookfield 3338, Melbourne, Australia.
                                        </a>
                                    </li>
                                    <li className="text-center">
                                        <a href="https://www.google.com/maps/place/Southville+Solutions/@31.4579162,74.2738551,17z/data=!3m1!4b1!4m5!3m4!1s0x391901ed6dd6c28f:0x431c3944dd59341c!8m2!3d31.4625077!4d74.2765154">
                                            <i className="fas fa-map-marker-alt me-2"></i>
                                            85 Service Rd, Block R1, Phase 2, Johar Town, Lahore, Pakistan.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-xl-6 col-md-6 text-center">
                        <div className="single-cta">
                            <div className="cta-text p-0">
                                <div className="footer-contact-heading">
                                    <h3>Call Us</h3>
                                </div>
                                <ul className="footer_section_a text-start p-0">
                                    <li>
                                        <a href="tel:+61426508849">
                                            <i className="fas fa-mobile-alt me-2"></i> 
                                            + 61 426 508 849
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+923204027604">
                                            <i className="fas fa-mobile-alt me-2"></i> 
                                            +92 320 402 7604
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-xl-6 col-md-6 text-center">
                        <div className="single-cta">
                            <div className="cta-text p-0">
                                <div className="footer-contact-heading">
                                    <h3>Mail Us</h3>
                                </div>
                                <ul className="footer_section_a text-start p-0">
                                    <li>
                                        <a href="mailto:sales@hubextech.com">
                                            <i className="fas fa-envelope me-2"></i>
                                            sales@hubextech.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-xl-6 col-md-6 text-center">
                        <div className="single-cta">
                            <div className="cta-text p-0">
                                <div className="footer-contact-heading">
                                    <h3>Connect with Us</h3>
                                </div>
                                <div className="icons-media">
                                    <a href="https://twitter.com/HubexT">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/hubex-tech/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default ContactResume
