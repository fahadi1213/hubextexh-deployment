import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css';



const ErrorPage = () => {
    return (
        <>
            <div className="box">
                <div className="box__ghost">
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>

                    <div className="box__ghost-container">
                        <div className="box__ghost-eyes">
                            <div className="box__eye-left"></div>
                            <div className="box__eye-right"></div>
                        </div>
                        <div className="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="box__ghost-shadow"></div>
                </div>

                <div className="box__description">
                    <div className="box__description-container">
                        <div className="box__description-title"><h1 className="display-3 fw-bold">404</h1><p>Page not found!</p></div>
                        <div className="box__description-text text-dark">It seems like we couldn't find the page you were looking for</div>
                    </div>

                    <Link to="/"  className="box__button">Go back</Link>

                </div>

            </div>
        </>
    );
}

export default ErrorPage