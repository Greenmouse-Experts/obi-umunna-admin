import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import { Topnav } from "../components/Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Home from "./Home";
import Notify from "./Notify";
import useGetHook from "../hook/useGet";


const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const {data, isLoading } = useGetHook('member/count/unread/notifications')

  return (
    <div className="layout">
      <div className="cide">
        <Sidenav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className={showSidebar ? "component" : "close-side"}>
        <div>
          <Topnav data={data?.data}
            isLoading={isLoading} setShowSidebar={setShowSidebar} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="notify" element={<Notify datas={data?.data}/>}  />          
          </Routes>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
