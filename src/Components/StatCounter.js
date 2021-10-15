import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./StatCounter.css";

const StatCounter = () => {

    let counterData = {
        c: 90000,
        c2: 1000,
        c3: 9000,
        c4: 23
    }
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    let [counter3, setCounter3] = useState(0);
    let [counter4, setCounter4] = useState(0);
    let [checkView,setCheckView] = useState(false)


    let averageCounter = Math.round((counterData.c/ counterData.c4));
    let averageCounter2 = Math.round((counterData.c2/ counterData.c4));
    let averageCounter3 = Math.round((counterData.c3/ counterData.c4));
    let averageCounter4 = Math.round((counterData.c4/ counterData.c4));
    const counterAnimation = () =>{
        let myInterval = setTimeout(() => {
            if (counter < counterData.c) {
                setCounter(counter = counter + averageCounter)
            }
            if (counter2 < counterData.c2) {
                setCounter2(counter2 = counter2 + averageCounter2)
            }
            if (counter3 < counterData.c3) {
                setCounter3(counter3 = counter3 + averageCounter3)
            }
            if (counter4 < counterData.c4) {
                setCounter4(counter4 = counter4 + averageCounter4)
            }
            if (counter === counterData.c) {
                clearInterval(myInterval)
            }
        }, 120);
    }
    function isElementOutViewport(){
        const secttion  = document.getElementById('secton-view')
        var rect = secttion.getBoundingClientRect();
        return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
    }
    const onScrollAnimateCounter = () =>{
        let check = isElementOutViewport();
        if(!check){
            setCheckView(true)
        }
    }
    if(checkView){
        counterAnimation();
    }
    window.addEventListener('scroll',onScrollAnimateCounter)
    return (
        <>
            <section className="section_counter_body" id='secton-view'>
                <div className="section_counter h-100">
                    <Container className="h-100">
                        <Row className="h-100 d-flex align-items-center">
                            <Col className="col-12 col-md-3 text-center">
                                <h1 className="counter_numbers">{`${counter}`}+</h1>
                                <p className="text">Lines of Code</p>
                            </Col>
                            <Col className="col-12 col-md-3">
                                <h1 className="counter_numbers">{`${counter2}`}+</h1>
                                <p className="text">Happy Clients</p>
                            </Col>
                            <Col className="col-12 col-md-3">
                                <h1 className="counter_numbers">{`${counter3}`}+</h1>
                                <p className="text">Cups of Coffee</p>
                            </Col>
                            <Col className="col-12 col-md-3 last-number-col">
                                <h1 className="counter_numbers">{`${counter4}`}+</h1>
                                <p className="text">Daily Supports</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default StatCounter;
