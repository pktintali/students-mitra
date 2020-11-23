import React from "react";
import "../../App.css";
import Graph from "./Graph";
import TopBar from "../TopBar";
import firebase from "../firebase";
import { Link } from "react-router-dom";
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
      <div style={{ marginBottom: 60 }} className="w3-padding-large w3-right">
        <Link
          to="/feedback"
          className="w3-border-red w3-button w3-round-large w3-border"
        >
          Feedback/Report Bug
        </Link>
      </div>
      <div className="c-box-min"></div>
    </>
  );
}

export default Home;
