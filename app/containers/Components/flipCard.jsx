import React from "react";

export const FlipCard = (props) => {
    return (
        <div class="flip-card mt-3 mb-3" >
            <div class="flip-card-inner">
                <div class="flip-card-front shadow-lg pt-3">
                    <div className="sideAboutText p-5">
                        <i className={`${props.icon}`}></i>
                        {props.reactIcon && props.reactIcon}
                    </div>  
                    <h6 className="pt-3">{props.front}</h6>                                      
                </div>
                <div class="flip-card-back p-4">
                    {props.back}
                </div>
            </div>
        </div>
    );
}