import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import GetAvgMarks from "./GetAvgMarks";
import LoadingScreen from "../LoadingScreen";
import FeaturedLearning from "./FeaturedLearning";
import { Link } from "react-router-dom";
import firebase from "../firebase";

// const dataLine2 = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Average Marks",
//       fill: true,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,92,0.4)",
//       borderColor: "rgba(75,192,92,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,42,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,92,1)",
//       pointHoverBorderColor: "rgba(20,220,20,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [0, 0, 0, 0, 0, 0, 0],
//     },
//   ],
// };

function Graph() {
  const [activeMarks, setActiveMarks] = useState();
  const [colorArray, setTheColorArray] = useState([]);
  async function getMarks() {
    setActiveMarks(await GetAvgMarks());
  }

  function getRandomColor() {
    var letters = "23456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
  }

  const setColorArray = () => {
    for (let i = 0; i < 20; i++) {
      colorArray.push(getRandomColor());
    }
  };

  useEffect(() => {
    setColorArray();
    let isMounted = true;
    isMounted && getMarks();
    return () => {
      isMounted = false;
    };
  }, []);

  const dataBar = {
    labels: activeMarks ? activeMarks.activeSubjects : ["Loading...."],
    datasets: [
      {
        label: '% Average Marks',
        backgroundColor: colorArray,
        borderColor: colorArray,
        // backgroundColor: "rgba(255,99,132,0.2)",
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1.3,
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // hoverBorderColor: "rgba(255,99,132,1)",
        data: activeMarks ? activeMarks.avgActiveSubMarks : [0],
      },
    ],
  };

  const dataPi = {
    labels: activeMarks ? activeMarks.activeSubjects : ["Loading...."],
    datasets: [
      {
        label: "% Average Marks",
        data: activeMarks ? activeMarks.avgActiveSubMarks : [0],
        backgroundColor: colorArray,
        borderColor: colorArray,
        borderWidth: 1,
      },
    ],
  };
  const dataLine = (len, marks) => {
    return {
      labels: len ? len : [0],
      datasets: [
        {
          label: "% Marks",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,92,0.4)",
          borderColor: "rgba(75,192,92,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,42,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(20,220,20,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: marks ? marks : [0],
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: true,
    // title:{
    //   display:true,
    //   text:'% Marks'
    // },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10,
          },
        },
      ],
    },
  };

  return (
    <div className="mtop">
      {activeMarks ? (
        <div className="w3-row">
          <h3 className="w3-text-grey">Active Subjects Analysis</h3>
          <div className="w3-half">
            <div style={{ padding: 10 }}>
              <Bar data={dataBar} width={100} height={60} options={options} />
            </div>
          </div>
          <div className="w3-half">
            <div style={{ padding: 10 }}>
              <Pie data={dataPi} width={100} height={60} />
            </div>
          </div>
          {activeMarks.individualData[0] && (
            <h2>Individual Subjects Progress</h2>
          )}
          {activeMarks &&
            activeMarks.individualData.map((sub) => {
              return (
                <div>
                  <div className="w3-half">
                    <div style={{ padding: 10 }}>
                      <h3 className="w3-text-grey">{sub.sub} Progress</h3>
                      <Line
                        data={dataLine(sub.len, sub.marks)}
                        options={options}
                        width={100}
                        height={60}
                        // options={{
                        //   maintainAspectRatio: true,
                        // }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          {activeMarks.weakSubject != "" && (
            <FeaturedLearning sub={activeMarks.weakSubject} />
          )}
          {firebase.isUserVerified() && (
            <div
              style={{ marginBottom: 60 }}
              className="w3-padding-large w3-right"
            >
              <Link
                to="/feedback"
                className="w3-border-red w3-button w3-round-large w3-border"
              >
                Feedback/Report Bug
              </Link>
            </div>
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default Graph;
