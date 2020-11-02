import React, { useState } from "react";
import "../../App.css";
import TopBar from "../TopBar";
import SingleSubject from "./SingleSubject/SingleSubject";
import SelectSubject from "./SelectSubject/SelectSubject";
import AllSubject from "./AllSubject/AllSubject";
import RoundButton from "./RoundButton";

function Quiz() {
  const [id, setId] = useState(0);
  const [selector, setSelector] = useState(true);

  const goBack = () => {
    setId(0);
    setSelector(true);
  };
  const setSingleSubject = () => {
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
            <RoundButton click={setAllSubject} txt="My All Subjects" />
          </div>
        </div>

        <div className="c-box-min"></div>
      </>
    );
  } else {
    if (id === 1) {
      return <SingleSubject click={goBack} id={1} />;
    } else if (id === 2) {
      return <SelectSubject click={goBack} id={2} />;
    } else {
      return <AllSubject click={goBack} id={3} />;
    }
  }
}

export default Quiz;
