import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "reactstrap";
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import { Values } from "../Components/values"; 
import Particles from "react-particles-js";
import { DemoMessage } from "../Components/demoMessage";

import { HiLightBulb } from 'react-icons/hi';




export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            conversation: [
                {
                    name: "John Doe",
                    message: "Hello NIPT Consults!"
                },
                {
                    name: "NIPT",
                    message: "Hello John, Welcome to NIPIT consults. How may we help you today"
                },
                {
                    name: "John Doe",
                    message: "I am very well thank you. I have an Idea for a business. But just don't know where to start..."
                }
            ]
        }
    }
    render(){
        return (
            <>
            <Container style={{height: "100vh"}}>
                <Row>
                    <Col md={6}>
                        <div className="heroBigText lead">
                            <Rectangle width="60%" height={500} fill={{color:'#38050b23'}} />
                            <div className="pl-5" style={{marginTop: "-70%",}}>
                                Information at your finger tips
                            </div> 
                        </div>
                        <Button className="primary normalText cleanButton mt-4 ml-5">
                            Read more
                        </Button>
                    </Col>
                    <Col md={6}>
                        <div className="sideHeroText lead">
                            <div className="bold">Who we are</div>
                            Nipit Consultancy is a UK registered company providing intermediary hire services of earth moving and marine equipment for national 
                            and international construction firms with speciality in  strategic marketing consultancy in the construction industry.
                            <div className="sideHeroFooter">
                                <Line x1={100} x2={200} y1={25} y2={25}  stroke={{color:'#9dc067'}} strokeWidth={3} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="container-fluid">
                <Row>
                    <Col md={8} className="secondDiv p-5"></Col>
                </Row>
                <Row style={{marginTop: "-350px"}}>
                    <Col md={7} className="p-5 ml-auto primary">
                        <Values 
                            body="It can be quite stressful as a construction company managing several projects in the private and government sector to organise the hire/lease of earth moving and marine equipment to carry out your project.
                                Allow us to Nip that stress in the bud on your behalf, we competent to act as intermediary between your company and the heavy equipment provider to give you the peace of mind to focus on your project.
                                "
                        />
                        <Button className="cleanButton bg-white primary-text mt-4">
                            More <i className="pl-3 fa fa-arrow-right" style={{width: "40px"}}></i>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="container-fluid">
                <Row style={{height: "100vh"}}>
                    <Col md={12} className="p-5 mx-auto my-auto">
                        <div style={{marginTop: "90px", textAlign: "center", fontSize: "2em"}}>
                            <HiLightBulb className="primary-text" style={{ fontSize: "2.5em"}}/>
                            <div className="thirdSectionText">
                                New Business Idea ?
                            </div>
                            <div>
                                Let us be the wand to make your dreams come true.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="secondary" style={{height: "50vh"}}>
                    <Col md={5} className="mr-auto my-auto" style={{textAlign: "center"}}>
                        {/* <DemoMessage /> */}
                    </Col>
                    <Col className="my-auto" md={7} style={{textAlign: "right"}}>
                        <div className="fourthSectionText">
                            We are always ready to listen. 
                        </div>
                        <div style={{fontSize: "2em"}}>
                            Your business is our prority
                        </div>
                    </Col>
                </Row>
            </div>
            {/* <div className="container-fluid primary secondary-text ">
                <Row style={{height: "40vh"}}>
                    <Col md={12}>
                        <Particles />
                    </Col>
                </Row>
                <Row style={{marginTop: "-40vh", height: "30vh", paddingTop: "12vh", textAlign: "center"}}>
                    <Col md={7} className="mx-auto p-4">
                        <Values 
                            body="“In the business world, everyone is paid in two coins: cash and experience. Take the experience first; the cash will come later.”"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="ml-auto pb-4">
                        – Harold Geneen
                    </Col>
                </Row>
            </div> */}
            </>
        );
    }
}