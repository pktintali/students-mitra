import React, { useContext } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import DataFetching from "../DataFetching";
import { SubjectContext } from "../SubjectList";
import { GameSubContext } from "./SingleSubject";

function Questions1(props) {
  const subjectByContext = useContext(SubjectContext);
  const gameSubjectByContext = useContext(GameSubContext);

  var subject = "";
  if (props.game && !props.host) {
    subject = gameSubjectByContext;
  } else {
    subject = subjectByContext[0];
  }
  if (subject != undefined && subject != "") {
    return (
      <>
        <TopBar bool={false} txt={subject.toUpperCase() + "  Test"} />
        <div className="mtop"></div>
        <DataFetching
          game={props.game}
          click={props.click}
          type="single"
          sub={subject}
          config={props.config}
          leval={props.leval}
        />
        <div className="mbot"></div>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default Questions1;
