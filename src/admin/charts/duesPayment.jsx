import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const DuesPayment = ({ data }) => {
  const [months, setMonths] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    if (data) {
      const month = [];
      const vals = []
      data.forEach((item) => {
          month.push(item.month);
          vals.push(item.total_amount)
      });
      setMonths(month);
      setValues(vals)
    }
  }, [data]);
  const datas = {
    labels: months,
    datasets: [
      {
        label: "Total Cost",
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        lineTension: 0.4,
      },
    ],
  };

  const option = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <>
      <Line data={datas} options={option} />
    </>
  );
};

export default DuesPayment;
