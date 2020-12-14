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
        <title>StudentMitra Dashboard</title>
        <meta
          name="description"
          content="studentmitra dashboard progress report. Active subject marks and performance report. Recommended learning"
        />
      </Helmet>
      <div className="">
        <TopBar txt={"Welcome"} />
        <Graph virtual={false} />
      </div>
    </>
  );
}

export default Home;
