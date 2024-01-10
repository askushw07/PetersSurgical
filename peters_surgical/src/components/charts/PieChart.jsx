import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const relevantData = useSelector(state => ({
    data22: state.data22,
    data23: state.data23,
  }));

  const [myarray, setMyarray] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    // Aggregate emissions only when relevant data changes
    if (relevantData.data22 && relevantData.data23) {
      const aggregatedEmissions = [
        ...relevantData.data22,
        ...relevantData.data23,
      ].reduce((acc, item) => {
        acc[item.supplier] = (acc[item.supplier] || 0) + item.emissions;
        return acc;
      }, {});

      setMyarray(aggregatedEmissions); // State update
      setData({
        labels: Object.keys(aggregatedEmissions),
        datasets: [
          {
            label: '# of Emissions',
            data: Object.values(aggregatedEmissions),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }); // State update
    }
  }, []); // Correct dependency array

  return Object.keys(myarray).length > 0 ? <Pie data={data} /> : null;

}
