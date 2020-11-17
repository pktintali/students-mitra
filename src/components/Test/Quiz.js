import React, { useState } from "react";
import "../../App.css";
import TopBar from "../TopBar";
import SingleSubject from "./SingleSubject/SingleSubject";
import SelectSubject from "./SelectSubject/SelectSubject";
import AllSubject from "./AllSubject/AllSubject";
import RoundButton from "./RoundButton";
import firebase from "../firebase";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Quiz(props) {

  const [id, setId] = useState(0);
  const [selector, setSelector] = useState(true);
  const [game,setGame] = useState(false)

  if (!firebase.getCurrentUsername()) {
    // not logged in
    toast.error('You need to be logged in',{position:toast.POSITION.BOTTOM_RIGHT});
    props.history.replace("/login");
    return null;
  }
  
  const goBack = () => {
    setId(0);
    setGame(false)
    setSelector(true);
  };
  const setSingleSubject = () => {
    window.scrollTo(0, 0);
    setId(1);
    setSelector(false);
  };

  const setSingleSubjectWithGame = () => {
    setGame(true)
    window.scrollTo(0, 0);
    setId(1);
    setSelector(false);
  };

  const setSelectSubject = () => {
    window.scrollTo(0, 0);
    setId(2);
    setSelector(false);
  };

  const setAllSubject = () => {
    window.scrollTo(0, 0);
    setId(3);
    setSelector(false);
  };

  if (selector) {
    return (
      <>
        <TopBar txt="Test" bool={false} />
        <div className="mtop"></div>

        <div className="w3-row-padding ">
          <div style={{ width: "33.3%" }} className="w3-col">
            <RoundButton click={setSingleSubject} txt="Single Subject" />
          </div>

          <div style={{ width: "33.3%" }} className="w3-col">
            <RoundButton click={setSelectSubject} txt="Select Subject" />
          </div>

          <div style={{ width: "33.3%" }} className="w3-col">
            <RoundButton click={setAllSubject} txt="Active Subjects" />
          </div>
        </div>
        <div style = {{height:'10px'}}></div>
        <div style={{marginLeft:'33%',marginRight:'33%'}} className="w3-padding">
            <RoundButton tag = {true} click={setSingleSubjectWithGame} txt="Play With Friends" />
    
        </div>
        <div className="c-box-min"></div>
      </>
    );
  } else {
    if (id === 1) {
      return <SingleSubject game = {game} click={goBack} id={1} />;
    } else if (id === 2) {
      return <SelectSubject click={goBack} id={2} />;
    } else {
      return <AllSubject click={goBack} id={3} />;
    }
  }
}

export default Quiz;
