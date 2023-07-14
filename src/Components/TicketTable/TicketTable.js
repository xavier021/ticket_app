import React, { useEffect, useState } from "react";
import "./TicketTable.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import TableRow from "../UI/TableRow";

export default function TicketTable() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
     axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5001/api/tickets/TicketConsole",
    })
      .then((res) => {
        if (res.status === 200) {
          setTickets(res.data.ticket);
          setLoading(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h3 className="section">Ticket Console</h3>
      <table>
        <tbody>
          <tr key={1}>
            <th className="ticketTbl" key={1}>Ticket Number</th>
            <th className="createdTbl" key={2}>Created By</th>
            <th className="assigneeTbl" key={3}>Assignee</th>
            <th className="summaryTbl" key={4}>Summary</th>
            <th className="statusTbl" key={5}>Status</th>
          </tr>
          { /*loading ?*/ (tickets.map((item, i) => (
              <TableRow 
                i={i}
                id= {item.id}
                admin={item.admin}
                user={item.users}
                subject={item.subject}
                name={item.name}
              />
            ))) /*: <Spinner animation="border" /> */
          }
        </tbody>
      </table>
    </div>
  );
}

