import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import ReactWOW from 'react-wow';
import { Button, Col, Row } from 'reactstrap';
const CustomModal = (props) => {
    const { service } = props;
    return (
        <ReactWOW animation='zoomIn' duration={'1s'}>
            <div className="service-item-modal bg-white">
                <Row className="overflow-auto">
                    <Col md={6} className="p-0">
                        <div className="primary px-2" style={{ minHeight: '100vh'  }}>
                            <div className="aligner">
                                <div className="left">
                                    <div onClick={() => props.dismiss()} className="transparent ml-auto clickable p-2 ml-5"><RiCloseLine className="midnight-text fa-3x" /></div>
                                </div>
                            </div>
                            <div className="px-md-5 px-2 left">
                                <h1 className="midnight-text fa-3x font-weight-bold">{service.title}</h1>
                                <h3 className="midnight-text fa-2x">{service.description}</h3>
                                <h3 className="midnight-text font-weight-light mt-5">{service.more_info}</h3>
                                <h5 className="midnight-text font-weight-light mt-5 mb-2">For more information, do not hesitate to contact us via any of our communication channels</h5>
                                <Button onClick={() => window.location = '/contact'} className="learn-more-btn">Contact Us</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="has-bg grayscale darker hidden-xs" style={{ height: '100vh', backgroundImage: `url(${(service.image)})` }} />
                </Row>
            </div>
        </ReactWOW>
    )
}
export default CustomModal;