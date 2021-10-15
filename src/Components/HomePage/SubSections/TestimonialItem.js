import React from "react";
import './PorjectItem.css';
const TestimonailItem = (props) => {
    return (
        <>
            <div className="carousel-item active">
                <div className="testimonial_slide">
                    <img
                    src={props.ProjImage}
                    className="img-circle img-responsive"
                    alt="img-1"
                    />
                    <br />
                    <br />
                    <h4>
                        <b>
                            {props.title}
                        </b>
                    </h4>
                    <p>
                        {props.ProjDesc}
                    </p>
                </div>
            </div>
        </>
    );
}

export default TestimonailItem;