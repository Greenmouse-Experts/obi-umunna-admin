import React from "react";
import "../stylesheet/layout.css";
import { BiSearch } from "react-icons/bi";
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
 

  const items = [
    {
      Id: 10001,
      Name: "John Doe",
      category: "Analiyst",
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
            <h3>Recent Members</h3>
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
                  <td> <b>{item.Id}</b> </td>
                  <td>{item.Name}</td>
                  <td>{item.category}</td>
                  <td>₦{item.cost.toLocaleString()}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="event">
          <h2>
            Upcoming Events
          </h2>          
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
            <h2>Announcement</h2>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
