import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import tImage1 from '../../../Images/12.jpg'
import tImage2 from '../../../Images/pd01.jpg'
import tImage3 from '../../../Images/pb03.jpg'
import tImage4 from '../../../Images/pb04.jpg'
import TestimonailItem from "./TestimonialItem";
import "./Testimonial.css";

const Testimonial = () => {
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
        { imageSrc: tImage2, tName: "Client 2", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { imageSrc: tImage3, tName: "Client 3", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { imageSrc: tImage4, tName: "Client 4", tDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
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