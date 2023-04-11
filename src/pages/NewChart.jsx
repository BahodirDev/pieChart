import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["red", "blue", "yellow"],
      borderColor: ["red", "blue", "yellow"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "50%",
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "My Pie Chart",
    },
  },
};
const MyPieChart = () => {
  return (
    <div style={{ position: "relative", width: "600px", height: "400px" }}>
      <h2 style={{ position: "absolute", top: "50%", left: "35%", transform: "translate(-50%, -50%)" }}>Center Text</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MyPieChart;
