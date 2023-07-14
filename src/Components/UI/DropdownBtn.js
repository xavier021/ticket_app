import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";

export default function DropdownBtn(props) {

  return (
    <div>
      <select className="dropdown-select" onChange={(e) =>props.handleChange(e)}>
        {props.option.map((option, i) => {
          return <option key={i} name={option.name} value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
}
