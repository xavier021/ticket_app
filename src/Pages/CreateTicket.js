import React from "react";
import CreateForm from "../Components/CreateTicket/CreateForm";
import MainLayout from "../Components/Layouts/MainLayout";
import IsAuth from "../Hooks/IsAuth";

export default function CreateTicket(){
     IsAuth();

  return (
    <MainLayout>
      <CreateForm/>
    </MainLayout>
  );
}