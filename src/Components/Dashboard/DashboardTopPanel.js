import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardPage.css";


export default function DashboardTopPanel(props) {

  return (
    <div>
      <div className="closed-tickets">
        <p className="closed-icon">
          <FontAwesomeIcon icon={props.icon} />
        </p>
        <p className="closed-tickets-lbl">
          <span>{props.label}</span>
          <span className="closed-tickets-number"> {props.tickets}</span>
        </p>
      </div>
    </div>
  );
}
