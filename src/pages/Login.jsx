import React from "react";
import logo from "../image/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import '../stylesheet/login.css'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="main_login">
      <form action="submit" className="login">
        <img src={logo} alt="Egbin" />
        <div className="log_head">
          <h3>User Login</h3>
          <p>Fill in your credentials to login to your dashboard</p>
        </div>
        <div className="input_log">
          <label htmlFor="email">Email</label>
          <div>
            {" "}
            <HiOutlineMail />{" "}
            <input type="email" name="email" placeholder="Email" />
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="password">Password</label>
          <div>
            {" "}
            <GoLock />{" "}
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <Link to="/dashboard/">
        <button className="login_btn">Login</button>
        </Link>
        
      </form>
    </div>
  );
};

export default login;
