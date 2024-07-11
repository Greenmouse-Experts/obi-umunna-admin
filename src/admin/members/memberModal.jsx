import dayjs from "dayjs";
import React from "react";
import { FaTimes } from "react-icons/fa";

const MemberModal = ({ item, close }) => {
  // const { data, loading } = useGetHook(`admin/member/view?user_id=${item.id}`);

  console.log(item);

  return (
    <div
      className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-[#00000066]"
      onClick={close}
    >
      <div
        className="w-11/12 lg:w-7/12 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex justify-between border-b items-center mb-3">
            <p className="text-lg font-semibold ">{item.name}</p>
            <FaTimes onClick={close} className="" />
          </div>

          <div className="oveflow-y-auto px-3">
            <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3">
              <div>
                <p className="text-gray-500">Program Name:</p>
                <p className="font-semibold">{item.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Program Category:</p>
                <p className="font-semibold">{item.category.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Budget Amount:</p>
                <p className="font-semibold">{item.budgetAmount}</p>
              </div>
              <div>
                <p className="text-gray-500">Start Date</p>
                <p className="font-semibold">
                  {" "}
                  {dayjs(item.startDate).format("DD-MMM -YYYY")}
                </p>
              </div>
              <div>
                <p className="text-gray-500">End Date</p>
                <p className="font-semibold">
                  {dayjs(item.endDate).format("DD-MMM -YYYY")}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Requirement</p>
                <p className="font-semibold">{item.requirements}</p>
              </div>
              <div>
                <p className="text-gray-500">Description:</p>
                <p className="font-semibold">{item.description}</p>
              </div>
              <div>
                <p className="text-gray-500">Support Banner:</p>
                <img
                  src={item.supportBanner}
                  alt=""
                  className="h-44 object-cover"
                />
              </div>

              
            </div>
          </div>
          <div className="py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
