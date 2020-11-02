import React, { useContext } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import DataFetching from "../DataFetching";
import { SubjectContext } from "../SubjectList";

function Questions2(props) {
  const subjectByContext = useContext(SubjectContext);

  return (
    <>
      <TopBar bool={false} txt="Custom Test" />
      <div className="mtop"></div>
      <DataFetching click={props.click} type="select" sub={subjectByContext} />
      <div className="mbot"></div>
    </>
  );
}

export default Questions2;
