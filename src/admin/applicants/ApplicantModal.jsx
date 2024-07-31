import dayjs from "dayjs";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ApplicantModal = ({ item, close }) => {
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
            <img src={item.photo} alt="applicant photo" className="w-40 h-40 rounded-full mx-auto "  />
            <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3 mt-4">
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Fullname:</p>
                <p className="text-gray-800">{item.name}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Email:</p>
                <p className="text-gray-800">{item.email}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Phone Number</p>
                <p className="text-gray-800">{item.phone}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Gender</p>
                <p className="text-gray-800">{item.gender}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Country</p>
                <p className="text-gray-800">{item.country}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">state</p>
                <p className="text-gray-800">{item.state}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">LGA</p>
                <p className="text-gray-800">{item.lga}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Residential Address</p>
                <p className="text-gray-800">{item.residentialAddress}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Level of Education</p>
                <p className="text-gray-800">{item.levelOfEducation}</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-xl">Documents</h5>
              <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3">
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Education Certificate</p>
                  <img
                    src={item.educationCertificate}
                    alt=""
                    className="h-44"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg ">
                    {item.meansOfIdentification}
                  </p>
                  <img
                    src={item.uploadIdentification}
                    alt=""
                    className="h-44"
                  />
                </div>
              </div>
            </div>

            <div>
            <h5 className="font-semibold text-xl">Next of Kin details</h5>
            <div className="grid lg:grid-cols-2 gap-y-4 py-3 overflow-y-auto pr-3">
             
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Name</p>
                <p className="text-gray-800">{item.nextOfKin}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Phone Number</p>
                <p className="text-gray-800">{item.nextOfKinPhone}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Email</p>
                <p className="text-gray-800">{item.nextOfKinEmail}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-lg">Address:</p>
                <p className="text-gray-800">{item.nextOfKinAddress}</p>
              </div>
            </div>
            </div>
          </div>
          <div className="py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantModal;
