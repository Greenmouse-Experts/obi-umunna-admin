import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const MembersJoined = ({ data }) => {
  const [months, setMonths] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    if (data) {
      setMonths([...Object.keys(data)]);
      setValues([...Object.values(data)]);
    }
  }, [data]);
  const datas = {
    labels: months,
    datasets: [
      {
        label: "Number",
        data: values,
        backgroundColor: ["#0263FF", "#FF7723", "#8E30FF", "#4A84DF"],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return <>{data && <Bar options={options} data={datas} />}</>;
};

export default MembersJoined;
