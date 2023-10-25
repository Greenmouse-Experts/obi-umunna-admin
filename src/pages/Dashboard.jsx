import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import { Topnav } from "../components/Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Home from "./Home";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="layout">
      <div>
        <Sidenav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className={showSidebar ? "component" : "close-side"}>
        <div>
          <Topnav setShowSidebar={setShowSidebar} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
