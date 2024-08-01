import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import { FiSettings, FiLogOut } from "react-icons/fi";
import {
  MdOutlineManageAccounts,
  MdAnnouncement,
  MdOutlinePayment,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GrBlog, GrTransaction } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import "../stylesheet/component.css";
import { AiOutlineClose } from "react-icons/ai";
import useModal from "../hook/useModal";
import { LiaToolsSolid } from "react-icons/lia";
import { IoDuplicateOutline } from "react-icons/io5";
import { FaBlog, FaUserFriends } from "react-icons/fa";
import { getLocalToken } from "../services/helpers";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const [duesMenu, setDuesMenu] = useState(false);
  const [role, setRole] = useState(false);
  const navigate = useNavigate();
  const { Modal, setShowModal } = useModal();
  const toggleUsersMenu = () => {
    if (showSidebar) {
      setShowUsersMenu(!showUsersMenu);
    }
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSidebar && sidebarRef.current && window.innerWidth <= 550) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const isOutsideSidebar =
          event.clientX < sidebarRect.left - 550 ||
          event.clientX > sidebarRect.right + 550 ||
          event.clientY < sidebarRect.top - 550 ||
          event.clientY > sidebarRect.bottom + 550;

        if (isOutsideSidebar) {
          toggleSidebar(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar, toggleSidebar]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  useEffect(() => {
    setRole(getLocalToken("obi_role"));
  }, [role]);

  return (
    <div
      ref={sidebarRef}
      className={showSidebar ? "sidebar" : "sidebar closed"}
    >
      <div className={showSidebar ? "side_img" : "img-side"}>
        <NavLink
          href="https://obi-umunna.netlify.app/"
          
        >
          <img className="img-logo" src={logo} alt="Logo" />
        </NavLink>{" "}
        <div className="men" onClick={toggleSidebar}>
          <AiOutlineClose />
        </div>
      </div>
      <nav className={`side-nav ${showSidebar ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/admin/" className="nav-link">
              <span className="nav-icon">
                <LuLayoutDashboard /> {showSidebar && "Dashboard"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="categories" className="nav-link">
              <span className="nav-icon">
                <IoDuplicateOutline /> {showSidebar && "Categories"}
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="programs" className="nav-link">
              <span className="nav-icon">
                <LiaToolsSolid /> {showSidebar && "Programs"}
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="applicants" className="nav-link">
              <span className="nav-icon">
                <MdOutlineManageAccounts /> {showSidebar && "Applicants"}
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="sponsors" className="nav-link">
              <span className="nav-icon">
                <FaUserFriends />
                {showSidebar && "Sponsors"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="blog" className="nav-link">
              <span className="nav-icon">
                <GrBlog />
                {showSidebar && "Blogs"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="testimonials" className="nav-link">
              <span className="nav-icon">
                <FaUserFriends />
                {showSidebar && "Testimonials"}
              </span>
            </NavLink>
          </li>
          {role === "superadmin" && (
            <li className="nav-item">
              <NavLink to="sub-admin" className="nav-link">
                <span className="nav-icon">
                  <MdOutlineAdminPanelSettings />
                  {showSidebar && "SubAdmin"}
                </span>
              </NavLink>
            </li>
          )}
          {role === "sub-admin" && (
            <li className="nav-item">
              <NavLink to="settings" className="nav-link">
                <span className="nav-icon">
                  <FiSettings />
                  {showSidebar && "Settings"}
                </span>
              </NavLink>
            </li>
          )}
          <li className="nav-item" onClick={() => setShowModal(true)}>
            <div className="nav-link">
              <span className="nav-icon">
                {" "}
                <FiLogOut /> {showSidebar && "Logout"}
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <Modal title={""} noHead>
        <div className="p-5">
          <p className="text-center">Are you sure you want to logout?</p>
          <div className="mt-6 flex items-center justify-between">
            <button
              className="px-5 py-2 bg-red-500 rounded text-white"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 bg-blue-900 rounded text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
