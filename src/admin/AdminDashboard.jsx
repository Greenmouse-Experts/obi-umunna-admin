import React,{useState, useEffect} from 'react'
import { Custom } from '../services/config';
import Sidenav from "./Sidenav";
import { Topnav } from "./Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Admin from "./Admin";
import Fellow from "../pages/Fellow"
import Associate from "../pages/Associate";
import Notify from "../pages/Notify";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [data, setData] = useState([])


  const fetchNotify = async ()=> {
  await Custom.get(`admin/count/unread/notifications`)
      .then((res)=>{
          if(res) {
              setData(res.data.data)
          }
      }).catch()
   

  }

  useEffect(()=>{
      fetchNotify();
  }, [])


  return (
    <div className="layout">
      <div className="cide">
        <Sidenav showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className={showSidebar ? "components" : "close-side"}>
        <div className="top_admin_nav">
          <Topnav data={data} setShowSidebar={setShowSidebar} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Admin/>} />
            <Route path="fellow" element={<Fellow/>}/>
            <Route path="associate" element={<Associate/>}/>
            <Route path="notify" element={<Notify datas={data}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
