import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import IsAuth from "../Hooks/IsAuth";
import DashboardPage from "../Components/Dashboard/DashboardPage.js"

function Dashboard() {
  IsAuth();

  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  );
}

export default Dashboard;
