import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const [data, setData] = useState([]);
    const data23 = useSelector(store=>store.data23)
  useEffect(() => {
    const processedData = [...data23].map(item => ({
      month: new Date(item.date).toLocaleString('en-US', { month: 'short' }),
      emissions: item.emissions,
      r_e: item.r_e,
      yy: <span style={{ color: item.yoy > 0 ? 'green' : 'red' }}>{item.yoy}</span>,
    }));
    setData(processedData);
  }, [data23]);

  return (
    <table style={{ overflowY: 'scroll', height: '30px', maxHeight:"350px"}}>
      <thead>
        <tr>
          <th>Month</th>
          <th>Emissions</th>
          <th>R_E</th>
          <th>YY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.month}</td>
            <td>{row.emissions}</td>
            <td>{row.r_e}</td>
            <td>{row.yy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
