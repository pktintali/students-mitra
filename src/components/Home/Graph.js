import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import GetAvgMarks from "./GetAvgMarks";
import LoadingScreen from "../LoadingScreen";
import FeaturedLearning from "./FeaturedLearning";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import getDevice from "../utils/getDevice";
import { useSelector } from "react-redux";
import NoActiveSubUI from "./NoActiveSubUI";

function Graph(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [activeMarks, setActiveMarks] = useState();
  const [colorArray, setTheColorArray] = useState([]);
  async function getMarks() {
    setActiveMarks(await GetAvgMarks(props));
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
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
        label: "% Average Marks",
        backgroundColor: colorArray,
        borderColor: colorArray,
        borderWidth: 1.3,
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
    <div>
      {activeMarks ? (
        <div className="w3-row">
          <h3 className={`${dark ? "" : "w3-text-grey"}`}>
            Active Subjects Analysis
          </h3>
          {activeMarks.activeSubjects &&
          activeMarks.activeSubjects.length > 0 ? (
            <div>
              <div className="w3-half">
                <div style={{ padding: 10 }}>
                  {getDevice() === "Mobile" ? (
                    <Pie data={dataPi} width={100} height={60} />
                  ) : (
                    <Bar
                      data={dataBar}
                      width={100}
                      height={60}
                      options={options}
                    />
                  )}
                </div>
              </div>
              <div className="w3-half">
                <div style={{ padding: 10 }}>
                  {getDevice() === "Mobile" ? (
                    <Bar
                      data={dataBar}
                      width={100}
                      height={60}
                      options={options}
                    />
                  ) : (
                    <Pie data={dataPi} width={100} height={60} />
                  )}
                </div>
              </div>
              {activeMarks.individualData[0] && (
                <h2>Individual Subjects Progress</h2>
              )}

              {activeMarks &&
                activeMarks.individualData.map((sub) => {
                  return (
                    <div key={sub.sub}>
                      <div className="w3-half">
                        <div style={{ padding: 10 }}>
                          <h3 className={`${dark ? "" : "w3-text-grey"}`}>
                            {sub.sub} Progress
                          </h3>
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
            </div>
          ) : (
            <NoActiveSubUI />
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
