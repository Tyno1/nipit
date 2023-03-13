import React from "react";


export const Values = (props) => {
    return (
        <div style={{textAlign: "center", fontSize: "1rem", textAlign: "start"}}>
            <i className={props.icon} style={{color: "white", fontSize: "2em"}}></i>
            <div className="valuesTitle">
                {props.title}
            </div>
            <div className="valuesBody">
                {props.body}
            </div>
        </div>
    );
}