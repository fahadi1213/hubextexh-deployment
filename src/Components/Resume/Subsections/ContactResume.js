import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import EButton from "../../UI/Button"
import "./ContactResume.css"

function ContactResume() {
    return (
        <section id="resume-contact" className="section-bg">
            <div className="contact contact-section-res">
            <Container>
                <div className=" section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Row className="contact_style">
                    <Col className="col-12 col-xl-7 mt-5 mt-lg-0 d-flex align-items-center">
                        <div className="info">
                            <div className="address text-center mb-3">
                                <h4>Contact Us</h4>
                                <p className="p-0">Don't hesitate to send us a contact message.</p>
                            </div>
                            <div>
                                <input className="form-control cntct-input my-2" type="text" placeholder="Enter your name" aria-label="default input example" />
                                <input className="form-control cntct-input my-2" type="text" placeholder="Enter your email" aria-label="default input example" />
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <EButton width="10rem" primary bgColor="#01B9DA" color="white" className="dp-btn btn-submit-cntct  my-5">Send Message</EButton>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-xl-5 d-flex">
                        <div className="info">
                            <div className="address res-div-style text-center mb-3">
                                <h4>Find Us</h4>
                                <ul className="p-0">
                                    <li>
                                        <a href="https://www.google.com/maps/place/4+Riverina+Blvd,+Brookfield+VIC+3338,+Australia/@-37.708397,144.545497,16z/data=!4m5!3m4!1s0x6ad693151396b1df:0xfaf6c1c475e03ae2!8m2!3d-37.7083967!4d144.545497?hl=en">
                                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                                            4 Riverina boulevard, Brookfield 3338, Melbourne, Australia.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/maps/place/Southville+Solutions/@31.4579162,74.2738551,17z/data=!3m1!4b1!4m5!3m4!1s0x391901ed6dd6c28f:0x431c3944dd59341c!8m2!3d31.4625077!4d74.2765154">
                                            <i className="fas fa-map-marker-alt me-2"></i>
                                            85 Service Rd, Block R1 Phase 2 Johar Town, Lahore, Punjab, Pakistan.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="email text-center mb-3">
                                <h4>Mail Us</h4>
                                <a href="mailto:sales@hubextech.com">
                                    <i className="fas fa-envelope"></i>&nbsp;
                                    sales@hubextech.com
                                </a>
                            </div>
                            <div className="phone res-div-style text-center mb-3">
                                <h4>Call Us</h4>
                                <ul className="p-0">
                                    <li>
                                        <a href="tel:+61426508849">
                                            <i className="fas fa-mobile-alt me-2"></i> 
                                            + 61 426 508 849
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+923204027604" className="px-2">
                                            <i className="fas fa-mobile-alt me-2"></i> 
                                            +92 320 402 7604
                                        </a>
                                    </li>
                                </ul>
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
