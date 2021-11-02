import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./StatCounter.css";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const StatCounter = () => {
    const [ active, setActive ] = useState(true);
    return (
        <>
            <VisibilitySensor partialVisibility active = {active}>
                {({ isVisible }) => (
                    <section className="section_counter_body" id='secton-view'>
                        <div className="section_counter h-100">
                            <Container className="h-100">
                                <Row className="h-100 d-flex align-items-center">
                                    <Col className="col-12 col-md-3 text-center">
                                        {isVisible ?
                                            <CountUp start={0} end={90000} delay={0} duration={4}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className="counter_numbers" ref={countUpRef}></span><span className="counter_numbers ms-1">+</span>
                                                    </div>
                                                )}
                                            </CountUp> : <span className="counter_numbers">0</span>
                                        }

                                        <p className="text">Lines of Code</p>
                                    </Col>
                                    <Col className="col-12 col-md-3">
                                        {isVisible ?
                                            <CountUp start={0} end={1045} delay={0} duration={4}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className="counter_numbers" ref={countUpRef}></span><span className="counter_numbers ms-1">+</span>
                                                    </div>
                                                )}
                                            </CountUp> : <span className="counter_numbers">0</span>
                                        }
                                        <p className="text">Happy Clients</p>
                                    </Col>
                                    <Col className="col-12 col-md-3">
                                        {isVisible ?
                                            <CountUp start={0} end={3998} delay={0} duration={4}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className="counter_numbers" ref={countUpRef}></span><span className="counter_numbers ms-1">+</span>
                                                    </div>
                                                )}
                                            </CountUp> : <span className="counter_numbers">0</span>
                                        }
                                        <p className="text">Cups of Coffee</p>
                                    </Col>
                                    <Col className="col-12 col-md-3 last-number-col">
                                        {isVisible ?
                                            <CountUp start={0} end={23} delay={0} duration={4} onEnd = {() => setActive(false)}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className="counter_numbers" ref={countUpRef}></span><span className="counter_numbers ms-1">+</span>
                                                    </div>
                                                )}
                                            </CountUp> : <span className="counter_numbers">0</span>
                                        }
                                        <p className="text">Daily Supports</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                )}

            </VisibilitySensor>
        </>
    );
}

export default StatCounter;
