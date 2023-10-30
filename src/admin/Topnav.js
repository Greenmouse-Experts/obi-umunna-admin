import React from 'react'
import { LuMenu} from 'react-icons/lu'
import "../stylesheet/component.css";
import {BiSearch} from "react-icons/bi"
import {GoBell} from "react-icons/go"
import user from "../image/Ellipse 922.png"
import { Link } from 'react-router-dom';

export const Topnav = ({toggleSidebar, data}) => {
 
  // const name = localStorage.getItem('fName')
  const currentDate = new Date();


const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// const dayNames = [
//   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];


const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year}`;


  return (
    <div className="top_nav">
      <div className="icon_menu">
        <div className="menu-icon" onClick={toggleSidebar}>
        <LuMenu/>
      </div>
      <div className="icon_text">
        <h3>Hello Super Admin</h3>
        <p>{formattedDate}</p>
      </div>
      </div>
      <div className="icon_menu">
        <div className="search">
          <BiSearch/>
          <input type="text" placeholder="Search"/>
        </div>
        <Link to="notify" className="bell">
          <GoBell/>
          <span>{data}</span>
        </Link>
        <img src={user} alt="" />

      </div>
      
    </div>
  )
}
