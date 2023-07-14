import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownLink from "./DropdownLink";

export default function NavDrop(props) {
  // console.log(props.icon)
  return (
    <div className="dropdown">
      <button className="drop-btn">
        {props.name} <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <div className="dropdown-content">
        {props.links.map((links, i) => {
          return <DropdownLink key={i} link={links.link} text={links.text} icon={links.icon}/>;
        })}
      </div>
    </div>
  );
}
