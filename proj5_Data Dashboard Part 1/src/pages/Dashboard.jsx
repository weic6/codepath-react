import React from "react";
import Card from "../components/Card";
import List from "../components/List";

const Dashboard = ({ data }) => {
  return (
    <div className="App-page">
      <div className="App-row">
        <Card number={"New York"} metric={"New York, USA"} />
        <Card number={"14:25:39"} metric="Moon Rise" />
        <Card number={"🌒"} metric="Moon Phase" />
      </div>
      <div className="App-row">
        <List data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
