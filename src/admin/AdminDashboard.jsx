import React, { useState } from "react";
import useGetHook from "../hook/useGet";
import Sidenav from "./Sidenav";
import { Topnav } from "./Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Admin from "./Admin";
import Notify from "../pages/admin/Notify";
import AdminAnnouncement from "../pages/admin/Announcement";
import AdminBanks from "../pages/admin/Dues/Banks";
import AdminDuesCategory from "../pages/admin/Dues/Category";
import AdminDues from "../pages/admin/Dues/Dues";
import DuesPayments from "../pages/admin/Payments/Dues";
import SubscriptionPayments from "../pages/admin/Payments/Subscription";
import SettingsPage from "../pages/admin/Settings";
import Programs from "../pages/admin/Programs";
import Applicants from "../pages/admin/Applicants";
import Sponsors from "../pages/admin/Sponsors";
import Category from "../pages/admin/Dues/Category";
import Testimonial from "../pages/admin/Dues/Testimonial";
import Blogs from "../pages/admin/Dues/Blogs";
import SubAdmin from "../pages/admin/SubAdmin";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const {data, isLoading } = useGetHook('admin/profile')

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
            <Route path="programs" element={<Programs />} />
            <Route path="categories" element={<Category />} />
            <Route path="testimonials" element={<Testimonial />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="sub-admin" element={<SubAdmin />} />
            <Route path="sponsors" element={<Sponsors/>} />
            <Route path="dues/list" element={<AdminDues/>} />
            <Route path="dues/bank" element={<AdminBanks/>} />
            <Route path="dues/category" element={<AdminDuesCategory/>} />
            <Route path="payments/subscrition" element={<SubscriptionPayments/>} />
            <Route path="payments/dues" element={<DuesPayments/>} />
            <Route path="settings" element={<SettingsPage/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
