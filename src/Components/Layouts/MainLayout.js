import React from "react";
import Navbar from "../NavBar/Navbar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="body-content">{children}</div>
    </>
  );
};

export default MainLayout;
