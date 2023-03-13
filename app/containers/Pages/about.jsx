import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import { FlipCard } from "../Components/flipCard";
import { FaList, FaBalanceScaleRight } from "react-icons/fa";
import {HiOutlineOfficeBuilding} from "react-icons/hi"
import { ImCogs } from "react-icons/im";
import AboutBack from "../../images/aboutBack.png";
import { buninessName } from "../../constants/constants";


export default class About extends Component{
    render() {
        return <>
            <div  className="container-fluid"
            style={{background: `url(${AboutBack})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={7} className="pt-5">
                                    <h4 className="aboutBigText mt-5 mb-0">
                                        About us
                                    </h4>
                                    <Line x1={0} x2={100} y1={5} y2={5}  stroke={{color:'#38050b'}} strokeWidth={3} />
                                </Col>
                                <Col md={5}>
                                    {/* <Polyline points='500, 15, 350,250, 20,0' fill={{color:'#38050b'}} />
                                    <Polyline points='-500, 15, 350,250, -20, 0' fill={{color:'#38050b23'}} /> */}
                                </Col>
                            </Row>
                            <Row style={{paddingTop: "50px", marginTop: "50px"}}>
                                <Col md={10} className="mx-auto">
                                    <div className="sideAboutText">
                                        A Quick dive into NIPIT Consults
                                    </div>
                                    <p className="lead inheritFont">
                                        At {buninessName} we have confidence in changing your thoughts into new items and administrations through driving edge innovation ability 
                                        and business area information. {buninessName} was made by the most splendid in the field of IT counseling, staffing and selecting 
                                        and Human Resources counseling to give best of breed administrations to its customers. We engage in all forms of consultancy except Accounting Consultancy.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col md={4}>
                                    <FlipCard 
                                        front="Who we are?"
                                        back="NIPIT consults in simple terms is a company geared towards listening to
                                        your business plans and help nuture them to maturity. "
                                        reactIcon={<HiOutlineOfficeBuilding />}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FlipCard 
                                        front="What matters to us?"
                                        back="At NIPIT consults "
                                        reactIcon={<FaBalanceScaleRight />}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FlipCard 
                                        front="What we do?"
                                        back="At NIPIT consults"
                                        reactIcon={<FaList />}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FlipCard 
                                        front="How we do it?"
                                        back="At NIPIT consults "
                                        reactIcon={<ImCogs />}
                                    />
                                </Col> 
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    }
}