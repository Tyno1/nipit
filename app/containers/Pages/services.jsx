import React, { Component } from "react";
import Particles from "react-particles-js";
import ReactWOW from "react-wow";
import { Col, Row } from "reactstrap";
import { buninessName } from "../../constants/constants";
import { FlipExpand } from "../Components/FlipExpand";
import CustomModal from "../Components/modal";
import {GrBusinessService} from "react-icons/gr";
import {FaUsersCog, FaBalanceScaleRight, FaAccessibleIcon, FaBiohazard, FaServicestack} from "react-icons/fa";
import {FcDataConfiguration, FcTreeStructure} from "react-icons/fc";
import {RiCustomerService2Fill} from "react-icons/ri";
import {IoBusinessSharp} from "react-icons/io";
import { ImMoveDown } from "react-icons/im";
import {AiOutlineTrademarkCircle} from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { BiLineChart } from "react-icons/bi"

export default class Services extends Component{
    state = {
        modalContent: {},
        display: false,
        cardTexts: [
            {
                title: "Business consultancy and planning",
                body: "We deliver business consultancy",
                icon: <GrBusinessService />
            },
            {
                title:"Feasibility study",
                body:"We deliver feasibility study",
                icon: <BiLineChart />
            },
            {
                title: "Human Resources management",
                body:"We deliver human Resources management",
                icon: <FaUsersCog/>
            },
            {
                title:"System design",
                body:"We deliver system design",
                icon: <FcTreeStructure />
            },
            {
                title:"Business valuation",
                body:"We deliver business valuation",
                icon: <FaBalanceScaleRight />
            },
            {
                title:"IT consultancy service and support",
                body:"IT consultancy service and support",
                icon: <RiCustomerService2Fill />
            },
            {
                title:"Corporate restructuring",
                body:"Corporate restructuring",
                // icon: <IoBusinessSharp />
                icon: <HiOfficeBuilding />
            },
            {
                title: "Immigration and relocation services",
                body:"Immigration and relocation services",
                icon: <ImMoveDown />
            },
            {
                title: "Trademark representative",
                body: "Trademark representative",
                icon: <AiOutlineTrademarkCircle />
            },
            {
                title: "Risk management",
                body: "Risk management",
                icon: <FaBiohazard />
            },
            {
                title: "Trust and estate planning",
                body: "Trust and estate planning",
                icon: <FaServicestack />
            } 
        ]
    }

    componentDidMount() {
        this.setState({
            modalContent: {
                title: "Business",
                description: "Business",
                more_info: "More"
            }
        })
    }

    showModal = (cardText) => {
        this.setState({
            modalContent: {
                title: cardText.title,
                description: cardText.body,
                more_info: "More"
            },
            display : true
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <Row style={{padding: "0 !important"}}>
                    <Col md={12} style={{padding: "0"}}>
                        <div className="secondary" style={{height: "200px"}}>
                            <div className="fourthSectionText text-white center-text" style={{paddingTop: "100px"}}>
                                Our Services
                            </div>
                        </div>
                        <Particles height="300px" style={{marginTop: "-250px"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} className="mx-auto">
                        <p className="lead inheritFont">
                            At {buninessName}, we are fully aware of the stress involved in starting a business
                            or even keeping it running. Hence our focus is to take all these stress and absorb them 
                            into our totally receptive schema. We let you interface only with the refined business
                            output. Thus, giving you the best outcome with less stress and more support. 
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5 pb-5">
                    <Col md={10} className="mx-auto">
                        <Row>
                            <Col md={12}>
                                <h1 style={{textAlign: "center"}}>
                                    What we offer?
                                </h1>
                            </Col>
                            <Col md={12} className="mt-4">
                                <div className="p-5">
                                    <Row className="mx-auto">
                                        {
                                            this.state.cardTexts.map((cardText, index) => {
                                                return <Col md={4} key={index}>
                                                            <FlipExpand
                                                                front={cardText.title}
                                                                back={cardText.body}
                                                                onClick={() => this.showModal(cardText)}
                                                                reactIcon={cardText.icon}
                                                            />
                                                        </Col>
                                            })
                                        }
                                        {
                                            this.state.display &&
                                            <CustomModal
                                                service={this.state.modalContent}
                                                dismiss={() => this.setState({display: !this.state.display})}
                                            />
                                        }                                        
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}