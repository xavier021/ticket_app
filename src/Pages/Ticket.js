import React from "react";
import TicketView from "../Components/TicketView/TicketView";
import MainLayout from "../Components/Layouts/MainLayout";
import IsAuth from "../Hooks/IsAuth";

export default function Ticket(){
     IsAuth();

  return (
    <MainLayout>
      <TicketView/>
    </MainLayout>
  );
}