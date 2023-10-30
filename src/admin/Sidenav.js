import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdOutlineManageAccounts, MdAnnouncement } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import "../stylesheet/component.css";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const navigate = useNavigate()

  const toggleUsersMenu = () => {
    if (showSidebar) {
      setShowUsersMenu(!showUsersMenu);
    }
  };

  // const toggleInventoriesMenu = () => {
  //   if (showSidebar) {
  //     setShowInventoriesMenu(!showInventoriesMenu);
  //   }
  // };

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
    navigate('/admin/login')
  };

  return (
    <div
      ref={sidebarRef}
      className={showSidebar ? "sidebar" : "sidebar closed"}
    >
      <div className={showSidebar ? "side_img" : "img-side"}>
        <img className="img-logo" src={logo} alt="Logo" />{" "}
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
            <span className="nav-link" onClick={toggleUsersMenu}>
              <span className="nav-icon">
                <MdOutlineManageAccounts /> {showSidebar && "Members"}
              </span>
              {showSidebar && (
                <div className="bb">
                  {showUsersMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              )}
            </span>
            {showUsersMenu && (
              <ul className="submenu">
                <li className="submenu-item">
                  <NavLink to="fellow" className="nav-link">
                    {showSidebar && "Fellow"}
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="associate" className="nav-link">
                    {showSidebar && "Associate"}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink to="/suppliers" className="nav-link">
              <span className="nav-icon">
                <GrTransaction />
                {showSidebar && "Transactions"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/announcements" className="nav-link">
              <span className="nav-icon">
                <MdAnnouncement />
                {showSidebar && "Announcement"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link">
              <span className="nav-icon">
                <FiSettings />
                {showSidebar && "Settings"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item" onClick={handleLogout}>
            <div  className="nav-link">
              <span className="nav-icon">
                {" "}
                <FiLogOut /> {showSidebar && "Logout"}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
