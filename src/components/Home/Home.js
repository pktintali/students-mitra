import React, { useEffect, useState } from "react";
import "../../App.css";
import Graph from "./Graph";
import TopBar from "../TopBar";
import firebase from "../firebase";
import { Helmet } from "react-helmet";
import getDevice from "../getDevice";
import {useSelector } from "react-redux";
function Home(props) {
  const dark = useSelector((state) => state.theme.dark);
  const setDarkTheme = () => {
    document.body.classList.add("dark");
  };

  useEffect(() => {
    if (dark) {
      setDarkTheme();
    }
  }, []);

  if (!firebase.getCurrentUsername()) {
    props.history.replace("/login");
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Students-mitra Dashboard</title>
        <meta
          name="description"
          content="students-mitra dashboard progress report. Active subject marks and performance report. Recommended learning"
        />
      </Helmet>
      <div className="">
        <TopBar txt={"Welcome"} />
        <Graph />
        {getDevice() === "Mobile" && <div className="c-box-min"></div>}
      </div>
    </>
  );
}

export default Home;
