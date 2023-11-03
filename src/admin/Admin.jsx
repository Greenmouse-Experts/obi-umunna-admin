import React from "react";
import "../stylesheet/layout.css";
import { BiSearch } from "react-icons/bi";
import img1 from "../image/profit 5.png";
import img2 from "../image/profit 6.png";
import img3 from "../image/profit 7.png";
import img4 from "../image/profit 8.png";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";
// eslint-disable-next-line
import { Chart as chartjs } from "chart.js/auto";

const Admin = () => {
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
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Number",
        data: [40, 88, 60, 50, 10, 15],
        backgroundColor: ["#0263FF", "#FF7723", "#8E30FF", "#4A84DF"],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const list = [
    {
      head: "Total Members",
      num: 116,
      Image: img1,
    },
    {
      head: "Total Subscribers",
      num: 690,
      Image: img2,
    },
    {
      head: "Total Dues Paid",
      num: "₦13,510,000",
      Image: img3,
    },
    {
      head: "Total Subscription Paid",
      num: "₦13,510,000",
      Image: img4,
    },
  ];
  const items = [
    {
      Id: 10001,
      Name: "John Doe",
      category: "Analyst",
      cost: 300000,
      date: "05-07-2023",
    },
    {
      Id: 10002,
      Name: "Victor Omar",
      category: "Business Man",
      cost: 150000,
      date: "03-07-2023",
    },

    {
      Id: 10003,
      Name: "Daniel Akpan",
      category: "Banker",
      cost: 200000,
      date: "02-07-2023",
    },

    {
      Id: 10004,
      Name: "Mubarak Adeyomi",
      category: "Teachern",
      cost: 300000,
      date: "05-07-2023",
    },
  ];

  return (
    <div className="home">
      <div className="home_top">
        {" "}
        <div className="table">
          <div className="head_table">
            <p className="text-xl font-semibold">Recent Members</p>
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
                <th>Member Id</th>
                <th>Member Name</th>
                <th>Profession</th>
                <th>Payment</th>
                <th>Date Recorded</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.category}</td>
                  <td>₦{item.cost.toLocaleString()}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="top_right">
          {list.map((item) => (
            <div className="">
              <div className="_text">
                <p>{item.head}</p> <h3>{item.num}</h3>{" "}
              </div>{" "}
              <img src={item.Image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="home_bottom">
        <div className="l">
          <div className="line">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-xl">Monthly Payment Dues</h2>
              <button className="flex items-center gap-x-2 bg-blue-900 text-white px-2 py-1 rounded-lg">
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
          <div className="bar">
            <h2 className="font-semibold mb-2">Monthly Members joined</h2>{" "}
            <Bar className="v" data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
