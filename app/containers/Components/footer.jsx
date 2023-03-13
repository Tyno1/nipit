import React from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Logo = require("../../images/NCLogo_white.png");

export const Footer = () => {
    return (
        <>
        {/* <Particles height="250px" style={{marginTop: "280px", }}/> */}
        <div className="container-fluid footer primary">
            <Row className="p-5">
                <Col md={3}>
                    <div className="footerHead">
                        <img src={Logo} width="150" height="40" />                    
                    </div>
                    <div className="pt-3">
                        Whenever you are ready to talk business, we are always ready to listen. Let's build a future together
                    </div>
                </Col>
                <Col md={2} className="pl-5">
                    <div className="footerHead2">
                        Explore
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Home</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">About</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Contact</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Services</Link>
                    </div>
                </Col>
                <Col md={3} className="pl-5">
                    <div className="footerHead2">
                        Visit
                    </div>
                    <div className="pt-3">
                        NIPIT consults plaza, 123, road street, UK. 
                    </div>
                    <div className="pt-3">
                        NIPIT consults, Lekki phase 1, Anonymous street, Lagos, Nigeria.
                    </div>
                </Col>
                <Col md={2} className="pl-5">
                    <div className="footerHead2">
                        Follow
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Facebook</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Twitter</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">LinkedIn</Link>
                    </div>
                </Col>
                <Col md={2} className="pl-5">
                    <div className="footerHead2">
                        Legal
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Terms</Link>
                    </div>
                    <div className="pt-3">
                        <Link className="footerLinks">Conditions</Link>
                    </div>
                </Col>
            </Row>
            <hr style={{background: "white"}}/>
            <Row>
                <Col md={5} className="mx-auto footerIcons center-text">
                    <i className="fab fa-facebook-f footerIcons"></i>
                    <i className="fab fa-twitter footerIcons"></i>
                    <i className="fab fa-linkedin-in footerIcons"></i>                
                </Col>
            </Row>
        </div>
        </>
    );
}