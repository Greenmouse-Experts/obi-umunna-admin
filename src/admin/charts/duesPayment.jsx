import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { Chart as ReactChartJs } from 'react-chartjs-2';

const DuesPayment = ({ data }) => {
  Chart.register(...registerables);
  const [programs, setPrograms] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    if (data) {
      const prog = [];
      const apps = [];
      data.forEach((item) => {
        prog.push(item.name);
        apps.push(item.totalApplicants);
      });
      setPrograms(prog);
      setApplicants(apps);
    }
  }, [data]);

  const datas = {
    labels: programs,
    datasets: [
      {
        label: "Number of Applicants",
        data: applicants,
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
       {data && <ReactChartJs type="line" data={datas} options={option} />}
    </>
  );
};

export default DuesPayment;
