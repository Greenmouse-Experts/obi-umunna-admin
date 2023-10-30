import React from "react";
import {} from "react-icons";
import { MdAddCircleOutline } from "react-icons/md";

const AdminAnnouncement = () => {
  return (
    <>
      <div className="p-4 bg-white">
        <div>
          <p className="text-2xl ">Bripan Announcements</p>
          <button className="flex gap-x-2 p-2">
            <MdAddCircleOutline />
            Add
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AdminAnnouncement;
