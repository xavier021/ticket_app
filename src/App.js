import React from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

import Ticket from "./Pages/Ticket";
import ConsoleTickets from "./Pages/ConsoleTickets";
import CreateTicket from "./Pages/CreateTicket";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TicketConsole" element={<ConsoleTickets />} />
        <Route path ="/CreateTicket" element={<CreateTicket />} />
        <Route path="/ticket/:id" element={<Ticket/>} />
      </Routes>
  );
}

export default App;
