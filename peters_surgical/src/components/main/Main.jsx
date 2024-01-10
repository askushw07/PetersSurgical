import React from "react";
import Navbar from "./navbar/Navbar";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import style from "./main.module.css";
import Table from "../charts/Table";
const Main = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Navbar />
      <div></div>
      <div>
        <BarChart />
      </div>
      <div className={style.piecontainer}>
        <div className={style.piechart}>
          <PieChart />
        </div>
        <div style={{ display: "flex" }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Main;
