import React, { useState } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";

function SelectSubject(props) {
  const [topbar, setTopBar] = useState(true);
  const [width, setWidth] = useState(true);

  const hidebar = () => {
    setTopBar(false);
  };

  return (
    <>
      <div className="mtop"></div>
      <div>
        {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
        {topbar && <div className="mtop"></div>}
        <SubjectList
          click={props.click}
          hidebar={hidebar}
          id={props.id}
          text="Select Subjects"
        />
      </div>
      <div className="mbot"></div>
    </>
  );
}

export default SelectSubject;
