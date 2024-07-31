import dayjs from "dayjs";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { formatAsNgnMoney } from "../../services/helpers";

const SponsorModal = ({ item, close }) => {
  // const { data, loading } = useGetHook(`admin/member/view?user_id=${item.id}`);

  console.log(item);

  return (
    <div
      className="fixed flex justify-center items-center h-screen  w-full top-0 left-0 bg-[#00000066]"
      onClick={close}
    >
      <div
        className="w-11/12 lg:w-7/12 h-[95vh] bg-white overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex justify-between border-b items-center mb-3">
            <p className="text-lg font-semibold ">{item.name}</p>
            <FaTimes onClick={close} className="" />
          </div>

          <div className="oveflow-y-auto px-3">
            <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3 mt-4">
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Email:</p>
                <p className="text-gray-800">{item.email}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Amount</p>
                <p className="text-gray-800">{formatAsNgnMoney(item.amount)}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Program</p>
                <p className="text-gray-800">{item.program.name}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Recognition Preference</p>
                <p className="text-gray-800">{item.recognitionPreferences}</p>
              </div>
              {item.fullName && (
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Fullname:</p>
                  <p className="text-gray-800">{item.fullName}</p>
                </div>
              )}

              {item.homeAddress && (
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Home Address</p>
                  <p className="text-gray-800">{item.homeAddress}</p>
                </div>
              )}

              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Type of Sponsorship</p>
                <p className="text-gray-800">{item.typeOfSponsorship}</p>
              </div>
            </div>

          {item.typeOfSponsorship === "Corporate" &&  <div className="mt-10">
              <h5 className="font-semibold text-xl ">Company Details</h5>
              <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3">
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Company Name</p>
                  <p className="text-gray-800">{item.companyName}</p>
                </div>
                <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Company Address</p>
                <p className="text-gray-800">{item.companyAddress}</p>
              </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg ">Company Logo</p>
                  <img src={item.companyLogo} alt="" className="h-44" />
                </div>
              </div>
            
            </div>}

          
          </div>
          <div className="py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SponsorModal;
