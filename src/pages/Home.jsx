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
  const data = {
    labels: ["Transportation", "Electronics", "Plumbing", "Mechanical"],
    datasets: [
      {
        label: "Number",
        data: [40, 88, 60, 50],
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
      head: "Total Suscriber",
      num: 690,
      Image: img2,
    },
    {
      head: "Total Membership Cost",
      num: "₦13,510,000",
      Image: img3,
    },
    {
      head: "Total Departments",
      num: 60,
      Image: img4,
    },
  ];
  const items = [
    {
      Id: "TRA-VEH-BS-001",
      Name: "Staff Bus",
      category: "Transportation",
      cost: 300000.0,
      date: "05-07-2023",
    },
    {
      Id: "ELE-VLV-TV-002",
      Name: "85 Inch TV",
      category: "Electronics",
      cost: 150000.0,
      date: "03-07-2023",
    },

    {
      Id: "PLU-PIP-ES-003",
      Name: "100 Ft Pipe",
      category: "Plumbing ",
      cost: 200000.0,
      date: "02-07-2023",
    },

    {
      Id: "TRA-VEH-BS-001",
      Name: "Staff Bus",
      category: "Transportation",
      cost: 300000.0,
      date: "05-07-2023",
    },
  ];

  return (
    <div className="home">
      <div className="home_top">
        {" "}
        <div className="table">
          <div className="head_table">
            <h3>Recent Inventories recorded</h3>
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
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Cost</th>
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
                  <td>₦{item.cost.toFixed(2).toLocaleString()}</td>
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
          <div className="bar">
            <h2>Department</h2>{" "}
            <Bar className="v" data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
