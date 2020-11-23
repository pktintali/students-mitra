import React, { useState } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";
import { Helmet } from "react-helmet";

function SelectSubject(props) {
  const [topbar, setTopBar] = useState(true);

  const hidebar = () => {
    setTopBar(false);
  };

  return (
    <>
    <Helmet>
        <title>Select Subject Test</title>
        <meta
          name="description"
          content="students-mitra select subject testpage where you can selecet subjects for tests. here you can select multiple subjects"
        />
      </Helmet>
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
