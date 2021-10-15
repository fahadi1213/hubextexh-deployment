import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import aboutprofile from "../../../Images/hamza.jpg";

function About() {
    return (
        <section id="resume-about" className="about res-section">
            <Container>
                <div className="section-title mb-4">
                    <h2>About</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                        fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <Row>
                    <Col className="col-12 col-lg-4 h-100 d-flex justify-content-center mb-4">
                        {/* <img src={aboutprofile} className="img-fluid" alt="" /> */}
                    </Col>
                    <Col className="col-12 col-lg-7 pt-4 pt-lg-0 content">
                        <h3 className="mb-4">Full Stack Developer</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Row className="icons">
                            <Col className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="far fa-angle-right"></i>
                                        <strong>Birthday:</strong>
                                        <span>1 May 1996</span>
                                    </li>
                                    <li>
                                        <i className="fad fa-chevron-right"></i>
                                        <strong>Website:</strong>
                                        <span>hamza@github.com</span>
                                    </li>
                                    <li>
                                        <i className="fad fa-chevron-right"></i>
                                        <strong>Phone:</strong>
                                        <span>+92 303 456 7890</span>
                                    </li>
                                    <li>
                                        <i className="fad fa-chevron-right"></i>
                                        <strong>City:</strong>
                                        <span>Lahore, Pakistan</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="fad fa-chevron-right"></i>
                                        <strong>Age:</strong>
                                        <span>25</span>
                                        </li>
                                    <li>
                                        <i className="far fa-chevron-right"></i>
                                        <strong>Degree:</strong>
                                        <span>Graduated</span>
                                        </li>
                                    <li>
                                        <i className="far fa-chevron-right"></i>
                                        <strong>Email:</strong>
                                        <span>hamza@gmail.com</span>
                                        </li>
                                    <li>
                                        <i className="far fa-chevron-right"></i>
                                        <strong>Freelance:</strong>
                                        <span>Available</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio
                        vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
                        incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque. Aliquid amet quidem ut quaerat
                        cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
                        dolores.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;