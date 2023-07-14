import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateForm.css";
import InputUI from "../UI/Input";
import TextAreaUI from "../UI/TextArea";
import DropdownBtn from "../UI/DropdownBtn";
import axios from "axios";
import Select from "react-select";
import ButtonUI from "../UI/Button";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [urgency, setUrgency] = useState("1");
  const [impact, setImpact] = useState("1");
  const [status, setStatus] = useState("1");

  const [tech, setTech] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5001/api/users/getadmin",
    })
      .then((res) => {
        if (res.status === 200) {
          const getTech = res.data.admin;
          setTech(getTech);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5001/api/users/getusers",
    })
      .then((res) => {
        if (res.status === 200) {
          const getUsers = res.data.user;
          setUsers(getUsers);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5001/api/tickets/createticket",
        {
          user_id: name,
          subject: summary,
          content: description,
          status_id: status,
          priority_id: urgency,
          agent_id: assignee,
          category_id: impact,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/TicketConsole");
        }
      });
    console.log("request");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/TicketConsole");
  };

  const options = [
    { value: 1, label: "test" },
    { value: 2, label: "test2" },
  ];
  console.log(tech);

  return (
    <div>
      <div className="create-content">
        <div className="createHeader">
          <h3>Create Ticket</h3>
          <span className="createFields">
            Complete the required field and Save to create ticket.
          </span>
        </div>
        <div className="createNameInput">
          <label>Name</label>
          <Select
            options={users}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            placeholder="Enter Name"
            className="create-select"
            openMenuOnClick={false}
            openMenuOnFocus={false}
            onChange={(option) => setName(option.value)}
          />
        </div>
        <div className="createColumn">
          <div className="column createBody createDetails">
            <div className="createInfo">
              <label>Summary</label>
              <InputUI
                type="text"
                value={summary}
                handleChange={(e) => {
                  setSummary(e.target.value);
                }}
              />
            </div>
            <div className="column createDesc">
              <label>Description</label>
              <TextAreaUI
                name="description"
                // placeholder=""
                value={description}
                handleChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="column column2 createBody">
            <label>Impact</label>
            <DropdownBtn
              name="impact"
              option={[
                { value: 1, text: "Minor" },
                { value: 2, text: "Moderate" },
                { value: 3, text: "Significant" },
                { value: 4, text: "Extensive" },
              ]}
              handleChange={(e) => {
                setImpact(e.target.value);
              }}
            />
            <label>Urgency</label>
            <DropdownBtn
              name="urgency"
              option={[
                { value: 1, text: "Low" },
                { value: 2, text: "Medium" },
                { value: 3, text: "High" },
                { value: 4, text: "Critical" },
              ]}
              handleChange={(e) => {
                setUrgency(e.target.value);
              }}
            />
          </div>

          <div className="column column2 createBody">
            <label>Status</label>
            <DropdownBtn
              name="ticketStatus"
              option={[
                { value: 1, text: "New" },
                { value: 2, text: "Assigned" },
                { value: 3, text: "In Progress" },
                { value: 4, text: "Pending" },
                { value: 5, text: "Resolved" },
                { value: 6, text: "Closed" },
                { value: 7, text: "Cancelled" },
              ]}
              handleChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="createNameInput assignee">
          <label>Assignee</label>
          <Select
            options={tech}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            placeholder="Enter Name"
            className="create-select"
            openMenuOnClick={false}
            openMenuOnFocus={false}
            onChange={(option) => setAssignee(option.value)}
          />
        </div>
      </div>
      <div className="ticketFooter">
        <div id="footer" className="moveRight">
          <ButtonUI
            className="createSubmit"
            onClick={handleSubmit}
            description="Save Ticket"
          />
          <ButtonUI 
            className="createCancel"
            onClick={handleCancel}
            description="cancel"
          />
        </div>
      </div>
    </div>
  );
}
