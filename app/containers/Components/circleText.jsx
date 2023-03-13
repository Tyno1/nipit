import React from "react";


export const CircleText = (props) => {
    return (
        <div style={{textAlign: "center", fontSize: "1rem", textAlign: "start"}}>
            <i className={props.icon} style={{color: "white", fontSize: "2em"}}></i>
            <Circle r={50} fill={{color:'#58030e'}} />
        </div>
    );
}