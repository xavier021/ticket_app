import React from "react";

export default function ButtonUI(props){
    return(
        <button className={props.className} onClick={props.onClick}>{props.description}</button>
    )
}