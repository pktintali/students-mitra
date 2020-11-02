import React, { useState } from "react";
import Questions1 from "./SingleSubject/Questions1";
import Questions2 from "./SelectSubject/Questions2";
import SubjectCard from "./SubjectCard";
import "./SingleSubject/style.css";
import AddRoom from "./SingleSubject/Game/AddRoom";

export const SubjectContext = React.createContext();

function SubjectList(props) {
  const [sub, setSub] = useState([]);
  const [sel, setSel] = useState(true);
  const [disabled, enable] = useState("w3-disabled");

  const back = () => {
    setSel(true);
  };
  const startQuiz = () => {
    if (!disabled) {
      setSel(false);
      props.hidebar();
    }
  };
  async function pushSub() {
    await AddRoom(props.gameid, sub[0], "addSub");
  }

  if (!sel && props.game && props.host) {
    pushSub();
  }

  if (sel) {
    if ((props.game && props.host) || !props.game) {
      return (
        <div className="w3-animate-left">
          <h2 className="w3-text-grey"> {props.text}</h2>
          {props.game && <h4>You Are in Game Mode</h4>}
          <button
            onClick={startQuiz}
            className={`w3-hide-large w3-hide-medium w3-large w3-round w3-red w3-margin w3-button ${disabled} `}
          >
            Start
          </button>
          <SubjectCard
            game={props.game}
            enableButton={enable}
            id={props.id}
            subject={sub}
          />
          <br />
          <br />
          <button
            onClick={startQuiz}
            className={` w3-large w3-round w3-red w3-margin w3-button ${disabled} `}
          >
            Start
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Questions1
            sub={props.s}
            host={props.host}
            game={props.game}
            click={props.click}
          />
        </>
      );
    }
  } else {
    return (
      <SubjectContext.Provider value={sub}>
        {props.id === 1 && (
          <Questions1 host={props.host} game={props.game} click={props.click} />
        )}
        {props.id === 2 && <Questions2 click={props.click} />}
        {/* {props.id ===3&&<Questions3 />}*/}
      </SubjectContext.Provider>
    );
  }
}

export default SubjectList;
