import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import GetAvgMarks from "./GetAvgMarks";
import LoadingScreen from "../LoadingScreen";
import FeaturedLearning from "./FeaturedLearning";

const dataLine2 = {
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
  const [activeMarks, setActiveMarks] = useState();
  async function getMarks() {
    setActiveMarks(await GetAvgMarks());
  }

  useEffect(() => {
    getMarks();
  }, []);

  const dataBar = {
    labels: activeMarks ? activeMarks.activeSubjects : ["Loading...."],
    datasets: [
      {
        label: "% Average Marks",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: activeMarks ? activeMarks.avgActiveSubMarks : [0],
      },
    ],
  };

  const dataLine = (len, marks) => {
    return {
      labels: len ? len : [0],
      datasets: [
        {
          label: "% Marks",
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
          data: marks ? marks : [0],
        },
      ],
    };
  };

  return (
    <div className="mtop">
      {activeMarks ? (
        <div className="w3-row">
          <div className="w3-half">
            <h3 className="w3-text-grey">Active Subjects Analysis</h3>

            <div style={{padding:10}}>
              <Bar
                data={dataBar}
                width={100}
                height={60}
                options={{
                  maintainAspectRatio: true,
                }}
              />
            </div>
          </div>
          <div className="w3-half">
            <h3 className="w3-text-grey">Monthly Progress</h3>
            <div style={{padding:10}}>
              <Line
                data={dataLine2}
                width={100}
                height={60}
                options={{
                  maintainAspectRatio: true,
                }}
              />
            </div>
          </div>
          {activeMarks.individualData[0] && <h2>Individual Subjects Progress</h2>}
          {activeMarks &&
            activeMarks.individualData.map((sub) => {
              return (
                <div>
                  <div className="w3-half">
                    <div style={{padding:10}}>
                      <h3 className="w3-text-grey">{sub.sub} Progress</h3>
                      <Line
                        data={dataLine(sub.len, sub.marks)}
                        width={100}
                        height={60}
                        options={{
                          maintainAspectRatio: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {activeMarks.weakSubject!=''&&<FeaturedLearning sub = {activeMarks.weakSubject}/>}
        </div>
      ) : (
        <LoadingScreen/>
      )}
      <div className="c-box-min"></div>
    </div>
  );
}

export default Graph;
