import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardPage.css";
import { GetStatusClose, GetStatusOpen } from "./GetStatuses";
import GetPriorities from "./GetPriorities";
import { faFileCircleCheck, faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { SimpleBarChart } from "./BarCharts";
import DashboardTopPanel from "./DashboardTopPanel";

export default function Dashboard() {
  const [tickets, getTickets] = useState([]);

  useEffect(() => {
    console.log("Dashboard");
    axios
      .get("http://localhost:5001/api/tickets/gettickets", {
        withCredentials: true,
      })
      .then((res) => {
        getTickets(res.data.tickets);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Create drop down with certain timeframes
  //Create one chart for status X
  //Create one chart for priority X

  const getStatusOpen = GetStatusOpen(tickets);
  const getPriorities = GetPriorities(tickets);
  const getStatusClosed = GetStatusClose(tickets);

  let statusClosed = 0;
  let statusOpened = 0;

  const closedTickets = getStatusClosed.map((tickets) => {
    return (statusClosed += tickets.Tickets);
  });

  const openedTickets = getStatusOpen.map((tickets) => {
    return (statusOpened += tickets.Tickets);
  });

  return (
    <div>
      <div className="dashboard-top-panel">
        <DashboardTopPanel label="Closed Tikckets" tickets={statusClosed} icon={faFileCircleCheck}/>
        <DashboardTopPanel label="Opened Tickets" tickets={statusOpened} icon={faFileCircleExclamation} />
      </div>
      <div className="dashboard">
        <div className="chart-status">
          <h3>Statuses - Opened Tickets</h3>
          <SimpleBarChart
            data={getStatusOpen}
            xAxisKey="name"
            dataKey="Tickets"
            color="#8884d8"
          />
        </div>

        <div className="chart-priorities">
          <h3>Priorities - Opened Tickets</h3>
          <SimpleBarChart
            data={getPriorities}
            xAxisKey="name"
            dataKey="Tickets"
            color="#82ca9d"
          />
        </div>
      </div>
    </div>
  );
}
