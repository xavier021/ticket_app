import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";


export default function CommentEntries(props){

    return(
        <div className="comment-entry">
            <p className="comment-entry-user"><FontAwesomeIcon icon={faUserAlt} color="gray" /> {props.user}</p>
            <p className="comment-entry-content">{props.content}</p>
            <p className="comment-entry-time">{props.time}</p>
            <br/>
        </div>
    )
}