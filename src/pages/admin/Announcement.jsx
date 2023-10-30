import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiDeleteBin5Line } from 'react-icons/ri'

const AdminAnnouncement = () => {
  return (
    <>
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Bripan Announcements</p>
          <button className="flex items-center  gap-x-2 p-2 px-4 text-blue-900 font-semibold border border-blue-900 rounded">
            <MdAddCircleOutline />
            Add
          </button>
        </div>
        <div className="pt-10">
          <div className="shadow p-2 px-3 w-full flex items-center ">
            <div className="flex items-center gap-x-10">
            <TfiAnnouncement className="text-2xl"/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            </p>
            </div>
            <div>
                <RiDeleteBin5Line/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAnnouncement;
