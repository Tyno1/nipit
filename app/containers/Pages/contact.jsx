import React, { Component } from "react";
import {Card, Col, Row} from "reactstrap";
import ContactForm from "../Components/contactForm";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default class Contact extends Component{
    render() {
        return <>
           <div className="container-fluid" style={{minHeight: "100%"}}>
               <Row>
                    <Col md={12} style={{marginTop: "100px"}}>
                        <h1 className="primary-text center-text">Contact us</h1>
                    </Col>
               </Row>
                <Row>
                   <Col md={12}>
                        <div className="shadow-lg mx-auto mt-4 mb-4" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0534258559396!2d-0.09573408450511603!3d51.530579916829474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5f583930e5%3A0x5a7e590f7325e26f!2s20-22%20Wenlock%20Rd%2C%20Hoxton%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sus!4v1606433989881!5m2!1sen!2sus" width="100%" height="200" frameborder="0" style={{border: "0"}} allowfullscreen="" ariaHidden="false" tabindex="0"></iframe>
                        </div>
                   </Col>
               </Row>
               <Row className="">
                    <Col md={7}>
                        <div className="p-3 center-text" style={{minHeight: "70vh", marginTop: "120px"}}>
                            <h1>Reach us at</h1>
                            <div className="mt-5">
                                <p className="lead">20-22 Wenlock Road London</p>
                                <p className="lead">N1 7GU</p>
                                <p className="lead">Phone: +44 7404209007</p>
                                <p className="lead">E-mail: info.nipit@consultant.com</p>
                            </div>
                            <Row className="row mt-5 mx-auto" style={{ display: "flex", justifyContent: "center"}}>
                                <Col md={4} >
                                    <div className="mx-auto contactFooter p-3">
                                         <FaFacebookF />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mx-auto contactFooter p-3">
                                        <FaTwitter />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="mx-auto contactFooter p-3">
                                        <FaLinkedinIn />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={5} className=" mb-5" >
                        <div className="p-3" style={{minHeight: "70vh", marginTop: "100px"}}>
                            <ContactForm />
                        </div>
                    </Col>
               </Row>
           </div>
        </>
    }
}