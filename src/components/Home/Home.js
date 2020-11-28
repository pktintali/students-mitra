import React from "react";
import "../../App.css";
import Graph from "./Graph";
import TopBar from "../TopBar";
import firebase from "../firebase";
import { Helmet } from "react-helmet";

function Home(props) {
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
      <TopBar txt={"Welcome"} />
      <Graph />
      <div className="c-box-min"></div>
    </>
  );
}

export default Home;
