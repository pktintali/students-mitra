import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const dataLine = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Average Marks",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 38, 35, 40, 42, 62, 70],
    },
  ],
};

const dataBar = {
  labels: [" DAA", " CD", " DBMS", " ML", " DA", " COI"],
  datasets: [
    {
      label: "My Average Marks",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [55, 60, 70, 80, 70, 55, 40],
    },
  ],
};

class Graph extends React.Component {
  render() {
    return (
      <div className="mtop">
        <div className="w3-row">
          <div className="w3-half">
            <h3 className="w3-text-grey">Subjects Analysis</h3>
            <Bar
              data={dataBar}
              width={100}
              height={60}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </div>
          <div className="w3-half">
            <h3 className="w3-text-grey">Monthly Progress</h3>
            <Line
              data={dataLine}
              width={100}
              height={60}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </div>
        </div>
        <div className="c-box-min"></div>
      </div>
    );
  }
}

export default Graph;
