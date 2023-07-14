import React, { useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import NavDrop from "./NavDrop";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <div>
          <Link to="/">
            <div className="logo">
              <div className="navbar-log">X</div>
              <div className="navbar-icon">
                <FontAwesomeIcon icon={faTicketAlt} />
              </div>
            </div>
          </Link>
        </div>
        <span className="vertical-divider"></span>
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <NavDrop
            name="Console"
            links={[
              {
                link: "/TicketConsole",
                text: "Ticket Console",
                icon: "faFileAlt",
              },
              { link: "#", text: "Knowledge Console", icon: "faBook" },
            ]}
          />
          <NavDrop
            name="Create New"
            links={[
              { link: "/CreateTicket", text: "Ticket", icon: "faFileAlt" },
              { link: "#", text: "Knowledge", icon: "faBook" },
              { link: "#", text: "Work Order", icon: "faClipboard" },
            ]}
          />
        </ul>
        <Logout />
      </nav>

      <hr className="nav-divider" />
    </div>
  );
}
