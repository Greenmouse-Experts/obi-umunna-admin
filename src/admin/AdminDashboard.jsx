import React, { useState } from "react";
import useGetHook from "../hook/useGet";
import Sidenav from "./Sidenav";
import { Topnav } from "./Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Admin from "./Admin";
import Fellow from "../pages/admin/Fellow";
import Associate from "../pages/admin/Associate";
import Notify from "../pages/admin/Notify";
import AdminAnnouncement from "../pages/admin/Announcement";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const {data, isLoading } = useGetHook('admin/count/unread/notifications')
  
  console.log(data);



  return (
    <div className="layout">
      <div className="cide">
        <Sidenav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className={showSidebar ? "components" : "close-side"}>
        <div className="top_admin_nav">
          <Topnav
            data={data?.data}
            isLoading={isLoading}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="fellow" element={<Fellow />} />
            <Route path="associate" element={<Associate />} />
            <Route path="announcements" element={<AdminAnnouncement />} />
            <Route path="notify" element={<Notify datas={data?.data} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
