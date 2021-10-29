import React from 'react'
import "./Preloader.css";
import Logo from '../../Images/logo.png'

const Preloader = () =>{
    return(
        <>
            <section className="preLoader-section">
                <div className="loader-main d-flex align-items-center justify-content-center">
                <div className="border-end border-5 border-dark pe-3 me-3"><img src={Logo} alt="loader-logo"/></div>
                <div className="loader ">
                    <span>Dream</span>
                    <span>Estimate</span>
                    <span>Design</span>
                    <span>Develop</span>
                    <span>Marketing</span>
                </div>
                </div>
            </section>
        </>

    );
}
export default Preloader