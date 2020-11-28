import React, { useState} from "react";
import Questions1 from "./SingleSubject/Questions1";
import Questions2 from "./SelectSubject/Questions2";
import SubjectCard from "./SubjectCard";
import "./SingleSubject/style.css";
import AddRoom from "./SingleSubject/Game/AddRoom";
import firebase from "../firebase";
import UseActiveSub from "./UseActiveSub";
import Questions3 from "./AllSubject/Questions3";
import { FaArrowLeft } from "react-icons/fa";

export const SubjectContext = React.createContext();

function SubjectList(props) {
  const [sub, setSub] = useState([]);
  const [sel, setSel] = useState(true);
  const [disabled, enable] = useState("w3-disabled");
  const [typeConfig, setTypeConfig] = useState();

  const activeSub =
    props.id === 3 ? UseActiveSub(firebase.getCurrentUserEmail()) : null;

  const back = () => {
    setSel(true);
  };

  const startQuiz = () => {
    if (!disabled) {
      setSel(false);
      props.hidebar();
    }
  };

  const directStartQuiz = () => {
    setSel(false);
    props.hidebar();
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
          
          <button
            onClick={props.click}
            className="w3-hide-small w3-hide-medium icon-bar  w3-left w3-button"
          >
            <FaArrowLeft size="20" />
          </button>
          {props.id === 3 && (
            <h3>Contains questions from all your active subjects</h3>
          )}
          {props.text && <h2 className="w3-text-grey"> {props.text}</h2>}

          <br></br>
          {props.game && <h4>You Are in Game Mode</h4>}
          {props.id === 3 &&
            activeSub &&
            activeSub[0] &&
            activeSub[0].activeSubject &&
            activeSub[0].activeSubject.length > 0 && (
              <button
                onClick={directStartQuiz}
                className={`w3-large w3-round w3-red w3-margin w3-button`}
              >
                Start
              </button>
            )}
          {props.id !== 3 && (
            <button
              onClick={startQuiz}
              className={`w3-large w3-round w3-red w3-margin w3-button ${disabled} `}
            >
              Start
            </button>
          )}
          <h1>Your Active Subjects</h1>
          {(props.id === 2 || props.id === 3) && (
            <p>
              ⚠️
              <i className="w3-text-red">
                Marks obtained in this segment will not reflect in your progress
              </i>
            </p>
          )}
          {/* {props.id==1&&<i className='w3-text-red'>You Can Edit Your Active Subjects in Your Profile</i>} */}
          <SubjectCard
            game={props.game}
            enableButton={enable}
            id={props.id}
            subject={sub}
            active={true}
            config={setTypeConfig}
          />
          <button
            onClick={startQuiz}
            className={`w3-large w3-round w3-red w3-margin w3-button ${disabled} `}
          >
            Start
          </button>
          {props.id !== 3 && <div className="c-box-min"></div>}
          {props.id !== 3 && <h1>All Subjects</h1>}
          {/* {props.id==1&&<i className='w3-text-red'>Double Click To Mark a Subject Active</i>} */}
          {props.id !== 3 && (
            <SubjectCard
              game={props.game}
              enableButton={enable}
              id={props.id}
              subject={sub}
              active={false}
              config={setTypeConfig}
            />
          )}
          <br />
          <br />
          {props.id !== 3 && (
            <button
              onClick={startQuiz}
              className={` w3-large w3-round w3-red w3-margin w3-button ${disabled} `}
            >
              Start
            </button>
          )}
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
            leval={props.leval}
          />
        </>
      );
    }
  } else {
    return (
      <SubjectContext.Provider
        value={props.id === 3 ? activeSub[0].activeSubject : sub}
      >
        {props.id === 1 && (
          <Questions1
            leval={props.leval}
            config={typeConfig}
            host={props.host}
            game={props.game}
            click={props.click}
          />
        )}
        {props.id === 2 && (
          <Questions2 config={typeConfig} click={props.click} />
        )}
        {props.id === 3 && <Questions3 click={props.click} />}
      </SubjectContext.Provider>
    );
  }
}

export default SubjectList;
