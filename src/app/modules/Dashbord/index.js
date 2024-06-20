import React, { Component } from "react";
import Stats1 from "./Components/stats1";
import Stats2 from "./Components/stats2";
import Stats3 from "./Components/stats3";

const Dashboard = (props) => {
  return (
    <div>
      <Stats1 />
      <Stats2 />
      <Stats3 />
      {/* <Stats4 /> */}
    </div>
  );
};

export default Dashboard;
