import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
    scales: {
        x: {
            grid: {
              display: true,
              color: "rgba(0, 0, 0, 0.2)",
              lineWidth: 1,
              drawBorder: true,
              drawOnChartArea: false,
              tickMarkLength: 10,
            },
          },
    y: {
      grid: {
        display: false,
      },
      type: "linear",
      position: "left",
      id: "left-axis", // Define left axis
      text: "Emissions",
      min: 0,
      max: 9000,
    },
    y1: {
      type: "linear",
      position: "right",
      id: "right-axis",
      beginAtZero: true,
      grid: {
        display: true,
        lineWidth: 2,
      },
      min: 0,
      max: 180,
    },
    
  },
};

const BarChart = () => {
  const store = useSelector((store) => store);
  // const [data, setData] = useState();
  const data = {
    labels: store.labels,
    datasets: [
      {
        type: "bar",
        label: "Expense-2023",
        data: store.data23.map((ele) => ele.emissions),
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
        yAxisId: "left-axis",
      },
      {
        type: "bar",
        label: "Expense-2022",
        data: store.data22.map((ele) => ele.emissions),
        backgroundColor: "rgba(99, 255, 132)",
        borderColor: "rgba(99, 255, 132, 1)",
        borderWidth: 1,
        fill: true,
        yAxisId: "left-axis",
      },
      {
        type: "line",
        label: "R/E-2023",
        data: store.data23.map((ele) => ele.r_e),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
        yAxisId: "right-axis",
      },
      {
        type: "line",
        label: "R/E-2022",
        data: store.data22.map((ele) => ele.r_e),
        backgroundColor: "rgba(99, 255, 132, 0.2)",
        borderColor: "rgba(99, 255, 132, 1)",
        borderWidth: 1,
        fill: true,
        yAxisId: "right-axis",
      },
    ],
  };
  return (
    <>
      <Chart type="bar" data={data} options={options} />
    </>
  );
};

export default BarChart;

