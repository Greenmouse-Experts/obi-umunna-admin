import React from "react";
import "../stylesheet/layout.css";
import img1 from "../image/profit 5.png";
import img2 from "../image/profit 6.png";
import img3 from "../image/profit 7.png";
import useGetHook from "../hook/useGet";
import dayjs from "dayjs";
import { formatAsNgnMoney } from "../services/helpers";
import MembersJoined from "./charts/membersJoined";
import DuesPayment from "./charts/duesPayment";
import { IoIosArrowDown } from "react-icons/io";
import LoaderBig from "../components/LoaderBig";
// eslint-disable-next-line

const Admin = () => {
  const currentYear = new Date().getFullYear();
  const { data, isLoading: loading } = useGetHook(`admin/dashboard`);

  const list = [
    {
      head: "Total Applicants",
      num: data?.data?.totalApplicants,
      Image: img1,
    },
    {
      head: "Total Sponsors",
      num: data?.data?.totalSponsors,
      Image: img2,
    },
    {
      head: "Total Programs",
      num: data?.data?.totalPrograms,
      Image: img3,
    },
    {
      head: "Total amount ",
      num: formatAsNgnMoney(data?.data?.totalDuesPaid),
      Image:
        "https://img.freepik.com/premium-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg",
    },
  ];



  console.log(data?.data)

  const dummyData = [
    { program: "Program A", applicants: 50 },
    { program: "Program B", applicants: 75 },
    { program: "Program C", applicants: 30 },
    { program: "Program D", applicants: 90 },
    { program: "Program E", applicants: 45 },
  ];

  return (
    <div className="home">
      <div className="home_top">
        {" "}
        <div className="bg-white p-6 w-[99%] lg:w-[70%]">
          <div className="head_table">
            <p className="text-xl font-semibold">Recent Applicants</p>
            {/* <div className="searchh">
              <input type="text" placeholder="Search by name" />
              <span>
                <BiSearch />
              </span>
            </div> */}
          </div>
          <div className="w-full overflow-x-auto">
          {loading ? <LoaderBig/> :  <table className="overflow-x-auto">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">S/N</th>
                 
                  <th className="whitespace-nowrap">Applicant Name</th>
                  <th className="whitespace-nowrap">Email</th>
                  <th className="whitespace-nowrap">Phone Number</th>
                  <th className="whitespace-nowrap">Date Registered</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.latestFiveApplicants?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                     {item.phone}
                    </td>
                    <td>{dayjs(item.createdAt).format('DD-MM-YYYY')}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}
          </div>
        </div>
        <div className="top_right">
          {list.map((item) => (
            <div className="">
              <div className="_text">
                <p>{item.head}</p> <h3>{item.num}</h3>{" "}
              </div>{" "}
              <img src={item.Image} alt="" className="w-[60px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="home_bottom">
        <div className="l">
          <div className="line">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-xl">Applicants</h2>
              {/* <button className="flex items-center gap-x-2 bg-blue-900 text-white px-2 py-1 rounded-lg">
                Monthly (2023){" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </button> */}
            </div>
            <DuesPayment data={data?.data?.programsTotalApplicants} />
          </div>
        </div>
        {/* <div className="b">
          <div className="bar">
            <h2 className="font-semibold mb-2">Sponsors</h2>{" "}
            <MembersJoined
              className="v"
              data={user?.data?.monthly_members_joined}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
