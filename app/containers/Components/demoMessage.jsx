import React from "react";
import { Container, Row, Col, Button, Card, CardTitle } from "reactstrap";
import { ConversationPill } from "./convoPill";
import Typewriter from 'typewriter-effect';
 
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

export const DemoMessage = () => {
    const conversations = [
            {
                name: "John Doe",
                message: "Hello NIPT Consults!"
            },
            {
                name: "NIPIT",
                message: "Hello John, Welcome to NIPIT consults. How may we help you today"
            },
            {
                name: "John Doe",
                message: "I am very well thank you. I have an Idea for a business. But just don't know where to start..."
            }
        ];
    

    return (
        <Card className="p-1" style={{height: "70vh", width: "100%", background: "#232323", borderRadius: "10px", marginTop: "-140px", boxShadow: "6px 3px 20px 0px #cccccc90"}}>
            <Card style={{padding: "20px", height:"100%", overflowX: "auto"}}>
                <div style={{textAlign: "start"}}>
                    NIPIT Consults
                </div>
                <div className="ml-auto">
                    <i className="fa fa-menu"></i>
                </div>
                <Row>
                    <Col md={12} style={{minHeight: "200px"}}>
                        {
                            conversations.map(conv => {
                                if(conv.name == "NIPIT"){
                                    return <Row>
                                        <Col className="mr-auto">
                                            <ConversationPill message={conv.message} who={conv.name}>
                                                Hello
                                            </ConversationPill>
                                        </Col>
                                    </Row>
                                }else{
                                    return <Row>
                                        <div className="ml-auto pr-3">
                                            <ConversationPill message={conv.message} who={conv.name} />
                                        </div>
                                    </Row>  
                                }
                            })
                        }
                    </Col>
                </Row>
            </Card>
        </Card>
    );
}