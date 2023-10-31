import React, { useState, useEffect } from "react";
import "../../stylesheet/admin.css";
import { formatDistanceToNow } from "date-fns";
import { BsTrash3Fill } from "react-icons/bs";
import { Circles } from "react-loader-spinner";
import useGetHook from "../../hook/useGet";

const Notify = ({ datas }) => {
  const formatTimeAgo = (timestamp) => {
    const apiDate = new Date(timestamp);
    return formatDistanceToNow(apiDate);
  };

  const [activeButton, setActiveButton] = useState("all");
   const { data, isLoading } = useGetHook("admin/get/all/notifications");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setNotifications(data.data);
    }
  }, [data]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="notify">
      <div className="not">
        <div className="notify_head">
          <div className="notify_left">
            <button
              onClick={() => handleButtonClick("all")}
              className={activeButton === "all" ? "active" : ""}
            >
              All <span>{datas}</span>
            </button>
            <button
              onClick={() => handleButtonClick("unread")}
              className={activeButton === "unread" ? "active" : ""}
            >
              Unread
            </button>
          </div>
          <button>Mark all as read</button>
        </div>
        {isLoading ? (
          <div className="load">
            <Circles
              height="80"
              width="80"
              color="#291670"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="notify_body">
            {notifications.map((item, index) => (
               <div
              //  onClick={() => read(item.id)}
               key={item.id}
               className={`notification ${
                 (activeButton === "unread" && item.status === "Unread") ||
                 (activeButton === "all" && item.status === "Unread")
                   ? "unread-notification"
                   : "all-notification"
               }`}
             >
                <div>
                  <h3>
                    {item.body} <span>{item.title}</span>
                  </h3>
                  <p>{formatTimeAgo(item.created_at)} ago</p>
                </div>
                <span className="trash">
                  <BsTrash3Fill />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notify;
