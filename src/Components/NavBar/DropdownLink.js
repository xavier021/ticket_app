import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileAlt, faBook, faClipboard } from "@fortawesome/free-solid-svg-icons";



export default function DropLink(props){
    const icons = props.icon;
    if(icons === 'faFileAlt'){
        var icon = faFileAlt;
    }
    if(icons === 'faBook'){
        var icon = faBook;
    }
    if(icons === 'faClipboard'){
        var icon = faClipboard;
    }
    return(
        <Link to={props.link} onClick={props.onClick}> 
        <FontAwesomeIcon icon={icon}/> {props.text}</Link>
    )
}