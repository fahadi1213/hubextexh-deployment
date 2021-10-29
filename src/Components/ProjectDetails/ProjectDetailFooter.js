import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../../Images/hubex2-white.png"
import "./ProjectDetailFooter.css";

function ProjectDetailFooter() {


    return (
        <footer className="justify-content-center footer-pdet-main">
            <Container>
                <Row className="justify-content-center py-5">
                    <Col>
                        <Row>
                            <Col className="col-12 title-footer">
                                <div className="footer-pdet-logo">
                                    <a href="https://www.hubextech.com/">
                                        <img src={footerLogo} className="img-fluid" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pdet-footer-p footer-pdet-links">
                            <Col className="col-xl-4 col-md-6 col-12 order-1 pt-5">
                                <div className="footer-contact-us-heading">
                                    <h3>Find Us</h3>
                                </div>
                                <p className="mb-1">
                                    <a href="https://www.google.com/maps/place/4+Riverina+Blvd,+Brookfield+VIC+3338,+Australia/@-37.708397,144.545497,16z/data=!4m5!3m4!1s0x6ad693151396b1df:0xfaf6c1c475e03ae2!8m2!3d-37.7083967!4d144.545497?hl=en">
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        4 Riverina boulevard, Brookfield 3338, <br />Melbourne, Australia.
                                    </a>
                                </p>
                                <p className="mb-1">
                                    <a href="https://www.google.com/maps/place/Southville+Solutions/@31.4579162,74.2738551,17z/data=!3m1!4b1!4m5!3m4!1s0x391901ed6dd6c28f:0x431c3944dd59341c!8m2!3d31.4625077!4d74.2765154">
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        85 Service Rd, Block R1, Phase 2, Johar <br />Town, Lahore, Punjab, Pakistan.
                                    </a>
                                </p>
                            </Col>
                            <Col className="col-xl-3 col-md-6 col-12 order-2 pt-5">
                                <div className="footer-contact-us-heading">
                                    <h3>Call Us</h3>
                                </div>
                                <p className="mb-1">
                                    <a href="tel:+61426508849">
                                        <i className="fas fa-mobile-alt"></i>&nbsp;
                                        + 61 426 508 849
                                    </a>
                                </p>
                                <p className="mb-1">
                                    <a href="tel:+923204027604">
                                        <i className="fas fa-mobile-alt"></i>&nbsp;
                                        +92 320 402 7604
                                    </a>
                                </p>
                            </Col>
                            <Col className="col-xl-3 col-md-6 col-12 order-3 pt-5">
                                <div className="footer-contact-us-heading">
                                    <h3>Mail Us</h3>
                                </div>
                                <a href="mailto:sales@hubextech.com">
                                    <i className="fas fa-envelope me-2"></i>
                                    sales@hubextech.com
                                </a>
                            </Col>
                            <Col className="col-xl-2 col-md-6 col-12 order-4 pt-5">
                                <div className="footer-contact-us-heading">
                                    <h3>Connect With Us</h3>
                                </div>
                                <div className="pdet-media-icons media-icons">
                                    <a href="https://twitter.com/HubexT">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/hubex-tech/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
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
    );
}

export default ProjectDetailFooter;