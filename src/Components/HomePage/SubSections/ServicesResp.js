import React from "react";
import { Card, Col } from "react-bootstrap";
import './ServicesResp.css'

const ServicesResp = (props) => {
    return (
        <>
            <Col sm={6} md={4} className = "d-flex justify-content-center">
                <Card className = "services-card" style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={props.imageSrc} />
                    <Card.Body className = "text-center d-flex flex-column justify-content-end">
                        <Card.Title className="fs-3 text-white fw-bold">{props.Title}</Card.Title>
                        <div className="d-flex justify-content-center">
                            <hr style={{border:"2px solid white", width:'60%', backgroundColor:"white"}}/>
                        </div>
                        <Card.Text className="text-white fw-lighter ">
                        {props.Desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default ServicesResp;