import React from "react";
import { Container } from "react-bootstrap";
import "./ResumeFooter.css"

function ResumeFooter() {
    return (
        <footer className="footer">
            <Container>
                <div className="copyright">
                    <p className="p_style_res">
                        Copyright &copy; 2021
                        <a href="https://www.hubextech.com/" className="ms-2">
                            HubexTech&nbsp;
                        </a>
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default ResumeFooter;
