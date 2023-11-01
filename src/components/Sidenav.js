import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { MdOutlineManageAccounts, MdAccessTime } from "react-icons/md";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import "../stylesheet/component.css";
import { AiOutlineClose} from 'react-icons/ai'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {GoBell} from "react-icons/go"
import { Custom } from "../services/config";



const Sidebar = ({showSidebar, toggleSidebar}) => {
  const [showUsersMenu, setShowUsersMenu] = useState(false);
    // const [showInventoriesMenu, setShowInventoriesMenu] = useState(false);

 
  const toggleUsersMenu = () => {
    if (showSidebar) {
      setShowUsersMenu(!showUsersMenu);
    }
  };
  
  const Navigate = useNavigate()


  const handleLogOut = async () => {
    try {
     Custom.post('logout'); 
      localStorage.clear();
      toast.success("Logged Out Successfully");
      Navigate('/login');
    } catch (err) {
      toast.error('Log-out failed: ' + err);
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
  
  
  
  
  
  
  return (
    <div ref={sidebarRef} className={showSidebar ? "sidebar" : "sidebar closed"} >
      
      <div className={showSidebar ? "side_img" : "img-side"} >
        <img className="img-logo" src={logo} alt="Logo" /> <div className="men" onClick={toggleSidebar}>
        <AiOutlineClose/>
      </div>
      </div>
      <nav className={`side-nav ${showSidebar ? "active" : ""}` }>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/dashboard/" className="nav-link">
              <span className="nav-icon">
                <LuLayoutDashboard /> {showSidebar && "Dashboard"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={toggleUsersMenu}>
              <span className="nav-icon">
                <MdOutlineManageAccounts /> {showSidebar && "Subcriptions"}
              </span>
              {/* {showSidebar && (
                <div className="bb">
                  {showUsersMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              )} */}
            </span>
            {/* {showUsersMenu && (
              <ul className="submenu">
                <li className="submenu-item">
                  <NavLink to="/employees" className="nav-link">
                    {showSidebar && "Members"}
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/sub-admin" className="nav-link">
                    {showSidebar && "Sub-admin"}
                  </NavLink>
                </li>
              </ul>
            )} */}
          </li>
          <li className="nav-item">
            <NavLink to="/suppliers" className="nav-link">
              <span className="nav-icon">
                <FiUsers />
                {showSidebar && "Transaction"}
              </span>
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <span className="nav-link" onClick={toggleInventoriesMenu}>
              <span className="nav-icon">
                {" "}
                <FiShoppingBag /> {showSidebar && "Inventories"}{" "}
              </span>{" "}
              {showSidebar && (
                <div className="bb">
                  {showInventoriesMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              )}
            </span>
            {showInventoriesMenu && (
              <ul className="submenu">
                <li className="submenu-item">
                  <NavLink to="/assets" className="nav-link">
                    {showSidebar && "Assets"}
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/categories" className="nav-link">
                    {showSidebar && "Categories"}
                  </NavLink>
                </li>
              </ul>
            )}
          </li> */}
          <li className="nav-item">
            <NavLink to="/history" className="nav-link">
              <span className="nav-icon">
                <MdAccessTime />
                {showSidebar && "Announcement"}
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="notify" className="nav-link">
              <span className="nav-icon">
              <GoBell />
                {showSidebar && "Notification"}
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
          <li className="nav-item">
            <button onClick={handleLogOut} className="nav-link">
              <span className="nav-icon">
                {" "}
                <FiLogOut /> {showSidebar && "Logout"}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
