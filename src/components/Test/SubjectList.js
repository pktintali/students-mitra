import React, { useState } from "react";
import Questions1 from "./SingleSubject/Questions1";
import Questions2 from "./SelectSubject/Questions2";
import SubjectCard from "./SubjectCard";
import "./SingleSubject/style.css";
import AddRoom from "./SingleSubject/Game/AddRoom";
import firebase from "../firebase";
import UseActiveSub from "./UseActiveSub";
import Questions3 from "./AllSubject/Questions3";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

export const SubjectContext = React.createContext();

function SubjectList(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [sub, setSub] = useState([]);
  const [sel, setSel] = useState(true);
  const [disabled, enable] = useState("w3-disabled");
  const [typeConfig, setTypeConfig] = useState();
  const [rQSub,setRQSub] = useState();
  const [requestSend, setResetSend] = useState(false);
  const [rest,setRest] = useState(false);

  const resetPopUP = () => {
    setRest(false);
    setResetSend(false);
  };

  async function sendRequest() {
    try {
      await firebase.addRequestedSub(
        {
          user:firebase.getCurrentUserEmail(),
          reqSubject:rQSub,
        }
      )
      setResetSend(true);
    } catch (e) {
      setRQSub("");
      alert(e.message);
    }
  }

  const resetModal = (
    <div style={{ display: "block" ,zIndex:99999999999}} className="w3-modal">
      <div
        style={{ maxWidth: "350px",zIndex:99999999999}}
        className={`w3-modal-content ${
          dark ? "w3-dark-gray" : ""
        } w3-padding w3-border ${
          dark ? "w3-border-brown" : "w3-border-red"
        } w3-animate-zoom w3-padding w3-card-4"`}
      >
        <h4>Request a Subject</h4>
        {!requestSend && (
          <p>
            <label className="w3-left">
              <b>Enter Subject</b>
            </label>
            <input
              style={{
                backgroundColor: dark ? "#313131" : "",
                color: dark ? "#f2f2f2" : "black",
              }}
              className="w3-border w3-input"
              type="email"
              placeholder="Subject Name Separated with ( , )"
              value={rQSub}
              onChange={(e) => setRQSub(e.target.value)}
            ></input>
          </p>
        )}
        {requestSend && (
          <p>
            Request Submitted for <b>{rQSub}</b>
          </p>
        )}
        {!requestSend && (
          <button onClick={sendRequest} className="w3-block w3-button w3-red">
            Submit
          </button>
        )}
        <br></br>
        <button onClick={resetPopUP} className="w3-block w3-button w3-red">
          Close
        </button>
      </div>
    </div>
  );

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
          {rest&&resetModal}
          <button
            onClick={props.click}
            className="w3-hide-small w3-hide-medium icon-bar  w3-left w3-button"
          >
            <FaArrowLeft size="20" />
          </button>
          {props.id === 3 && (
            <h3>Contains questions from all your active subjects</h3>
          )}
          {props.text && (
            <h2 className={`${dark ? "" : "w3-text-grey"}`}> {props.text}</h2>
          )}

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
          {props.id != 3 && (
            <p>
              Couldn't find your subject Don't worry new subjects is going to be
              added very soon<br></br>
              <i>
                Tell us which subject you want -{" "}
                <button onClick ={()=>setRest(true)} className="w3-button w3-border w3-small w3-round">Request a Subject</button>
              </i>
            </p>
          )}
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
