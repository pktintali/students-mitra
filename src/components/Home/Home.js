import React from "react";
import "../../App.css";
import Graph from "./Graph";
import TopBar from "../TopBar";
import firebase from "../firebase";

function Home(props) {

  if(!firebase.getCurrentUsername()) {
		props.history.replace('/login')
		return null
  }
  return (
    <>
    <TopBar txt={"Welcome"}/>
        <Graph/>    
    </>
  );
}

export default Home;
