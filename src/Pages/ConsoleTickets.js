import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import TicketTable from "../Components/TicketTable/TicketTable";
import IsAuth from "../Hooks/IsAuth";

 function ConsoleTickets() {
   IsAuth();
  //   console.log(isAuth);
  


  return (
    <MainLayout>
      <TicketTable />
    </MainLayout>
  );
}

export default ConsoleTickets;
