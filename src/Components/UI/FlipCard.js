import React from "react";
import './FlipCard.css'
import { Col, Card } from 'react-bootstrap';

const FlipCard = (props) => {
    return (
        <>
            <Col xs md={6} lg={4}>
                <div className="cards-wrapper">
                    <div className="card-container">
                        <Card className="flip-card bg-transparent">
                            <div className="card-contents card-front">
                                <div className="card-depth">
                                    <Card.Img variant="top" src={props.imageSrc} className="border-0 w-75 mb-5" />
                                    <h5 className="text-white px-3">{props.title}</h5>
                                </div>
                            </div>
                            <div className="card-contents card-back">
                                <div className="card-depth px-4">
                                    <h2 className="fw-bold text-white mb-5">{props.title}</h2>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default FlipCard;