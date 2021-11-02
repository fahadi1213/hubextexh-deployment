import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import TestimonailItem from "./TestimonialItem";
import tImage1 from '../../../Assets/Images/placeholder.jpg'
import "./Testimonial.css";

const Testimonial = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const testimonialsData = [
        { imageSrc: tImage1, tName: "Client 1", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { imageSrc: tImage1, tName: "Client 2", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { imageSrc: tImage1, tName: "Client 3", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { imageSrc: tImage1, tName: "Client 4", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    ]

    return (
            <section className="testimonial text-center navlinks-section" id='test-offset'>
                <Container>

                    <div className="heading white-heading">Testimonial</div>
                    <div className="carousel-inner">
                        <Slider {...settings}>
                            {
                                testimonialsData.map((curr, index) => {
                                    return <TestimonailItem title={curr.tName} ProjDesc={curr.tDesc} ProjImage={curr.imageSrc} key={index} />
                                })
                            }
                        </Slider>
                    </div>
                </Container>
            </section>
    );
}

export default Testimonial;