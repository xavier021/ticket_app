import React from "react";

export default function InputUI(props){
    return(
        <input
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            className={props.className}
            onChange={(e)=>{
                props.handleChange(e);
            }}
        />
    )
}