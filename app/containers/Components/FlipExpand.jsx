import React, {useEffect, useState} from "react";
import ReactWOW from "react-wow";
import { Button, Col, Row } from "reactstrap";
import {CustomModal} from "./modal";

export const FlipExpand = (props) => {

    return (
        <>
        <ReactWOW animation='flipInY' duration={'3s'}>
            <div className="flip-card mt-3 mb-3 clickable" onClick={() => props.onClick()}>
                <div className="flip-card-inner">
                    <div className="flip-card-front shadow-lg pt-3">
                        <div className="sideAboutText p-5">
                            <i className={`${props.icon}`}></i>
                            {props.reactIcon && props.reactIcon}
                        </div>  
                        <h6 className="pt-3">{props.front}</h6>                                      
                    </div>
                    <div className="flip-card-expand-back p-4">
                        {props.back}
                    </div>
                </div>
            </div>
        </ReactWOW>
        </>
    );
}