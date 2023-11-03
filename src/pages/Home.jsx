import React from "react";
import "../stylesheet/layout.css";
import { BiSearch } from "react-icons/bi";
import { Line } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";
// eslint-disable-next-line
import { Chart as chartjs } from "chart.js/auto";
import { formatString } from "../services/helpers";

const home = () => {
  const datas = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
    datasets: [
      {
        label: "Total Cost",
        data: [60, 70, 75, 90, 60, 20, 40, 55],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        lineTension: 0.4,
      },
      {
        label: "Number of Members",
        data: [80, 85, 55, 75, 50, 67, 73, 40],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        lineTension: 0.4,
      },
    ],
  };

  const option = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const items = [
    {
      Id: 10001,
      Name: "Minimal Due",
      category: "Alumini",
      cost: 30000,
      due: "05-07-2023",
    },
    {
      Id: 10001,
      Name: "Minimal Due",
      category: "Alumini",
      cost: 4000,
      due: "05-07-2023",
    },

    {
      Id: 10441,
      Name: "Dier Due",
      category: "Lawyers",
      cost: 3100,
      due: "05-07-2023",
    },

    {
      Id: 13201,
      Name: "Basic Due",
      category: "Alumini",
      cost: 6500,
      due: "05-07-2023",
    },
  ];
  const announce = [
    {
      name: "November Hangout",
      desc: "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Lawyers Submit",
      desc: "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Doctor's Wrap",
      desc: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "October Hangout",
      desc: "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  return (
    <div className="">
      <div className="home_top">
        {" "}
        <div className="table">
          <div className="head_table">
            <h3 className="text-xl font-semibold">Recent Members</h3>
            <div className="searchh">
              <input type="text" placeholder="Search by name" />
              <span>
                <BiSearch />
              </span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Dues Id</th>
                <th>Member Name</th>
                <th>Profession</th>
                <th>Due Amount</th>
                <th>Date Recorded</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {" "}
                    <b>{item.Id}</b>{" "}
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.category}</td>
                  <td>₦{item.cost.toLocaleString()}</td>
                  <td>{item.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="event  overflow-y-auto">
          <div className="flex py-4 px-2 justify-between items-center">
            <h2 className="text-xl font-semibold">Announcements</h2>
            <p className="text-[14px] font-medium text-blue-900">View All</p>
          </div>
          <div className="grid gap-5 pr-3">
            {announce.map((item, i) => (
              <div className="shadow-lg rounded-lg p-2" key={i}>
                <p className="font-[15px] font-semibold">{item.name}</p>
                <p className="text-[13px]">{formatString(item.desc, 60)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home_bottom">
        <div className="l">
          <div className="line">
            <div className="line_head">
              <h2>Monthly Members</h2>
              <button>
                Monthly (2023){" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </button>
            </div>
            <Line data={datas} options={option} />
          </div>
        </div>
        <div className="b">
          <div className="">
            <h2 className="font-semibold text-lg">Payments Alert</h2>{" "}
          </div>
          <div>
            <p className="py-24 font-semibold text-center">No Payments Yet</p>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default home;
