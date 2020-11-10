import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import GetAvgMarks from "./GetAvgMarks";

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
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

function Graph() {

  const [marks,setMarks] = useState();

  async function getAvgMarks(){
    await setMarks(await GetAvgMarks());
  }
  
  useEffect(() => {
    getAvgMarks()
  }, []);

  const dataBar = {
    labels: [" COI", " ML", " DA", " DAA", " CD", " DBMS"],
    datasets: [
      {
        label: "Average Marks in %",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          marks?marks[0]:0,
          marks?marks[1]:0,
          marks?marks[2]:0,
          marks?marks[3]:0,
          marks?marks[4]:0,
          marks?marks[5]:0,
          marks?marks[6]:0,
          0,
          100,
        ],
      },
    ],
  };

  return (
    <div className="mtop">
      <div className="w3-row">
        <div className="w3-half">
          <h3 className="w3-text-grey">Active Subjects Analysis</h3>

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

export default Graph;
