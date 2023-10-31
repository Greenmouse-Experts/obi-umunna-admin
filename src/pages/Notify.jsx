import React,{useState, useEffect} from 'react'
import { Custom } from '../services/config';
import "../stylesheet/admin.css"
import { formatDistanceToNow } from 'date-fns';
import { BsTrash3Fill  } from "react-icons/bs";


const Notify = ({datas}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ all: [], unread: [] });
    const [activeButton, setActiveButton] = useState("all"); 


    

    const fetchNotify = async (apiLink, key)=> {
    setIsLoading(true);
    await Custom.get(apiLink)
        .then((res)=>{
            if(res) {
                setData(prevData => ({ ...prevData, [key]: res.data.data }))
             
            }
            
        }).catch()
        .finally(()=>
        {
            setIsLoading(false)
        })

    }

    useEffect(() => {
        const allApiLink = "admin/get/all/notifications";
        const unreadApiLink = "admin/get/all/unread/notifications";
    
        if (activeButton === "all") {
          fetchNotify(allApiLink, "all");
        } else if (activeButton === "unread") {
          fetchNotify(unreadApiLink, "unread");
        }
      }, [activeButton]);

    const formatTimeAgo = (timestamp) => {
        const apiDate = new Date(timestamp);
        return formatDistanceToNow(apiDate);
      };

      const handleButtonClick = (buttonType) => {
        // Set the active button
        setActiveButton(buttonType);
      };
    

  return (
    <div className="notify">
        <div className="not">
             <div className="notify_head">
             <div className="notify_left">
            <button onClick={() => handleButtonClick("all")} className={activeButton === "all" ? "active" : ""}>
              All <span>{datas}</span>
            </button>
            <button onClick={() => handleButtonClick("unread")} className={activeButton === "unread" ? "active" : ""}>
              Unread
            </button>
          </div>
            <button>Mark all as read</button>
        </div>
        <div className="notify_body">
        {data[activeButton].map((item,index) => (
                <div className="notification">
                    <div>
                       <h3>{item.body} <span>{item.title}</span></h3>
                        <p>{formatTimeAgo(item.created_at)} ago</p> 
                    </div>
                    <span className="trash">
                  <BsTrash3Fill/>
                  </span>
                    

                </div>
            ))}
        </div>
        </div>
       
    </div>
  )
}

export default Notify