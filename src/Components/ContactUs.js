import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
        <section className="contact-section navlinks-section" id="cntctNav-main">
            <div className="contact-section-bg"></div>
            <Container className="container">
                <div className="pt-5 pb-5">
                    <div className="text-black mt-3">
                        <h2 className="d-flex justify-content-center">
                            <b>We’d love to hear from you</b>
                        </h2>
                        <h5>
                            <small className="d-flex justify-content-center text-center">
                                Have questions about features, trials, or pricing? Need a
                                demo?
                            </small>
                        </h5>
                        <h5>
                            <small className="d-flex justify-content-center pb-5">
                                Our teams will help you.
                            </small>
                        </h5>
                    </div>
                    <Row className="row">
                        <Col className="col-12 col-xl-4 col-md-4 mb-30 text-center">
                            <div className="single-cta">
                                <div className="cta-text p-0">
                                    <div className="footer-contact-heading">
                                        <h3>Find Us</h3>
                                    </div>
                                    <ul className="p-0 footer_section_a text-start">
                                        <li className="text-center">
                                            <a href="https://www.google.com/maps/place/4+Riverina+Blvd,+Brookfield+VIC+3338,+Australia/@-37.708397,144.545497,16z/data=!4m5!3m4!1s0x6ad693151396b1df:0xfaf6c1c475e03ae2!8m2!3d-37.7083967!4d144.545497?hl=en">
                                                <i className="fas fa-map-marker-alt me-2"></i>
                                                4 Riverina boulevard, Brookfield 3338, Melbourne, Australia.
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a href="https://www.google.com/maps/place/Southville+Solutions/@31.4579162,74.2738551,17z/data=!3m1!4b1!4m5!3m4!1s0x391901ed6dd6c28f:0x431c3944dd59341c!8m2!3d31.4625077!4d74.2765154">
                                                <i className="fas fa-map-marker-alt me-2"></i>
                                                85 Service Rd, Block R1, Phase 2, Johar <br/ >Town, Lahore, Punjab, Pakistan.
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-12 col-xl-4 col-md-4 mb-30 text-center">
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
                        <Col className="col-12 col-xl-4 col-md-4 mb-30 text-center">
                            <div className="single-cta">
                                <div className="cta-text p-0">
                                    <div className="footer-contact-heading">
                                        <h3>Mail Us</h3>
                                    </div>
                                    <ul className="p-0 footer_section_a">
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
                    </Row>
                </div>
            </Container>
        </section>
    </>
  );
}

export default ContactUs;
