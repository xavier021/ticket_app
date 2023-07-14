import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser,  } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5001/api/users/logout", { withCredentials: true })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          navigate("/login");
          console.log('logged out')
        }
      });
  };

  return (
    <div className="nav-right">
      <div className="dropdown">
        <button className="drop-btn user-btn">
          <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
        </button>
        <div className="dropdown-content logout">
          <a onClick={handleClick}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
        </div>
      </div>
    </div>
  );
}
