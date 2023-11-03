import React from "react";
import "../stylesheet/layout.css";
import { BiSearch } from "react-icons/bi";
import img1 from "../image/profit 5.png";
import img2 from "../image/profit 6.png";
import img3 from "../image/profit 7.png";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";
import useGetHook from "../hook/useGet";
import dayjs from "dayjs";
// eslint-disable-next-line

const Admin = () => {
  const { data: user, refetch } = useGetHook("admin/profile");
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
      Image:
        "https://img.freepik.com/premium-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg",
    },
  ];
  const items = [
    {
      Id: 10001,
      Name: "John Doe",
      category: "Associate",
      cost: 300000,
      date: "05-07-2023",
    },
    {
      Id: 10002,
      Name: "Victor Omar",
      category: "Fellow",
      cost: 150000,
      date: "03-07-2023",
    },

    {
      Id: 10003,
      Name: "Daniel Akpan",
      category: "Fellow",
      cost: 200000,
      date: "02-07-2023",
    },

    {
      Id: 10004,
      Name: "Mubarak Adeyomi",
      category: "Associate",
      cost: 300000,
      date: "05-07-2023",
    },
  ];

  return (
    <div className="home">
      <div className="home_top">
        {" "}
        <div className="bg-white p-6 w-[70%]">
          <div className="head_table">
            <p className="text-xl font-semibold">Recent Members</p>
            <div className="searchh">
              <input type="text" placeholder="Search by name" />
              <span>
                <BiSearch />
              </span>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
          <table className="overflow-x-auto">
            <thead>
              <tr>
                <th className="whitespace-nowrap">S/N</th>
                <th className="whitespace-nowrap">Member Id</th>
                <th className="whitespace-nowrap">Member Name</th>
                <th className="whitespace-nowrap">Profession</th>
                <th className="whitespace-nowrap">Subscription</th>
                <th className="whitespace-nowrap">Date Registered</th>
              </tr>
            </thead>
            <tbody>
              {user &&
                user?.data?.latestSixMember.slice(0,5).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.membership_id}</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.account_type}</td>
                    <td>
                      {item?.isSubscribed === "0" ? (
                        <span className="px-2 py-1 text-sm bg-orange-100 font-medium rounded-lg">
                          Unsubscribed
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-sm bg-green-100 font-medium rounded-lg">
                          Subscribed
                        </span>
                      )}
                    </td>
                    <td>{dayjs(item.created_at).format('DD-MM-YYYY')}</td>
                  </tr>
                ))}
            </tbody>
          </table>
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
