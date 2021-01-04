import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import firebase from "../firebase";
import FetchSubjectList from "./FetchSubjectList";
import UseActiveSub from "./UseActiveSub";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

toast.configure();
function SubjectCard(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [c, setC] = useState(0);
  const [col, setColor] = useState([""]);
  const mobileCard = [];
  const pcCard = [];

  const emptyUIList = [
    <div>
      <h3>Your Active Subjects List is Empty.</h3>
      <p>
        <i>Click on Star to Mark a subject active</i>
      </p>
    </div>,
  ];

  const subList = FetchSubjectList();
  const activeSub = UseActiveSub(firebase.getCurrentUserEmail());

  function undo() {
    for (let j in subList) {
      col[j] = dark ? "" : "w3-white";
    }
  }

  async function MarkActive(sub) {
    if (
      activeSub[0].activeSubject &&
      activeSub[0].activeSubject.includes(sub)
    ) {
      const index = activeSub[0].activeSubject.indexOf(sub);
      activeSub[0].activeSubject.splice(index, 1);
      await firebase.updateActiveSubjects(activeSub[0].activeSubject);
      //alert("Already Active");
      return;
    } else {
      if (activeSub[0].activeSubject == undefined) {
        await firebase.updateActiveSubjects([sub]); // activeSub[0].activeSubject&&await firebase.updateActiveSubjects([sub]);
      } else {
        activeSub[0].activeSubject.push(sub);
      }

      activeSub[0].activeSubject &&
        (await firebase.updateActiveSubjects(activeSub[0].activeSubject));
      // alert("Added to Active Subject List");
    }
  }

  const unitCard = (i, active) => {
    return (
      <div
        style={{
          minHeight: "140px",
          backgroundColor: dark ? "#1F1F1F" : "",
          boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
        }}
        onClick={() => {
          if (props.id === 3) {
            toast.info(
              "You Don't Need To Select any Subject. You Can Directly Start",
              { position: toast.POSITION.BOTTOM_RIGHT }
            );
          }
          if (props.id === 1) {
            if (active) {
              for (let j in subList) {
                if (
                  activeSub[0] &&
                  subList[j][2] == activeSub[0].activeSubject[i]
                ) {
                  props.config({
                    testType: subList[j][3],
                    randLimit: subList[j][4],
                    speed: subList[j][5],
                    noOfQue: subList[j][6],
                  });
                }
              }
            } else {
              props.config({
                testType: subList[i][3],
                randLimit: subList[i][4],
                speed: subList[i][5],
                noOfQue: subList[i][6],
              });
            }
          }
          props.enableButton("");

          if (props.id === 1) {
            undo();
            col[i] = "w3-green";
            !active && (props.subject[0] = subList[i][2]);
            active &&
              activeSub[0] &&
              (props.subject[0] = activeSub[0].activeSubject[i]);
            setC(c + 1);
          }

          if (props.id === 2) {
            col[i] = col[i] == "w3-green" ? "" : "w3-green";
            if (
              (!active && !props.subject.includes(subList[i][2])) ||
              (active &&
                activeSub[0] &&
                !props.subject.includes(activeSub[0].activeSubject[i]))
            ) {
              !active && props.subject.push(subList[i][2]);
              active &&
                activeSub[0] &&
                props.subject.push(activeSub[0].activeSubject[i]);
            } else {
              const index = !active
                ? props.subject.indexOf(subList[i][2])
                : activeSub[0] &&
                  props.subject.indexOf(activeSub[0].activeSubject[i]);
              props.subject.splice(index, 1);
              if (!props.subject.length > 0) {
                props.enableButton("w3-disabled");
              }
            }
            setC(c + 1);
          }
        }}
        className={` ${col[i]} pointer cardButton w3-padding w3-card w3-margin w3-round-xlarge w3-card`}
      >
        {!active && activeSub[0] && activeSub[0].activeSubject && (
          <span
            style={{ zIndex: 3 }}
            onClick={() => MarkActive(subList[i][2])}
            className="w3-display-topleft w3-tiny w3-button"
          >
            {activeSub[0].activeSubject.includes(subList[i][2]) ? (
              <FaStar color={"red"} size={18} />
            ) : (
              <FaRegStar size={18} />
            )}
          </span>
        )}
        {!active && activeSub && activeSub[0].activeSubject === undefined && (
          <span
            style={{ zIndex: 3 }}
            onClick={() => MarkActive(subList[i][2])}
            className="w3-display-topleft w3-tiny w3-button"
          >
            {!active && <FaRegStar size={18} />}
          </span>
        )}
        {!active && subList[i][3] && (
          <span
            className={`w3-display-topright w3-padding-small ${
              subList[i][3] === "Hosted" ? "w3-red" : "w3-green"
            } w3-small`}
            s
          >
            {/* //New */}
            {subList[i][3]}
          </span>
        )}

        <h1 style={{ marginTop: 20 }}>
          {!active
            ? subList[i][2].toUpperCase()
            : activeSub[0] && activeSub[0].activeSubject[i].toUpperCase()}
        </h1>
        <p className="w3-tiny">{!active && subList[i][1].toUpperCase()}</p>

        {subList &&
          subList.map((sub) => {
            if (
              activeSub[0] &&
              activeSub[0].activeSubject &&
              sub[2] == activeSub[0].activeSubject[i]
            ) {
              return (
                <p key={sub[1]} className="w3-tiny">
                  {active && sub[1].toUpperCase()}
                </p>
              );
            }
          })}
      </div>
    );
  };

  const getCard = () => {
    for (let i = 1; i < subList.length; i = i + 2) {
      mobileCard.push(
        <div className="w3-row">
          <div className="w3-col s6">{unitCard(i)}</div>
          {subList[i + 1] && <div className="w3-col s6">{unitCard(i + 1)}</div>}
        </div>
      );
    }

    for (let i = 1; i < subList.length; i = i + 4) {
      pcCard.push(
        <div className="w3-row">
          <div className="w3-col s3">{unitCard(i)}</div>
          {subList[i + 1] && <div className="w3-col s3">{unitCard(i + 1)}</div>}
          {subList[i + 2] && <div className="w3-col s3">{unitCard(i + 2)}</div>}
          {subList[i + 3] && <div className="w3-col s3">{unitCard(i + 3)}</div>}
        </div>
      );
    }
  };

  const getActiveCard = () => {
    if (activeSub[0] && activeSub[0].activeSubject) {
      for (let i = 0; i < activeSub[0].activeSubject.length; i = i + 2) {
        mobileCard.push(
          <div key={activeSub[0].activeSubject[i]} className="w3-row">
            {activeSub[0].activeSubject[i] && (
              <div className="w3-col s6">{unitCard(i, true)}</div>
            )}
            {activeSub[0].activeSubject[i + 1] && (
              <div className="w3-col s6">{unitCard(i + 1, true)}</div>
            )}
          </div>
        );
      }
    }
    if (activeSub[0] && activeSub[0].activeSubject) {
      for (let i = 0; i < subList.length; i = i + 4) {
        pcCard.push(
          <div key={activeSub[0].activeSubject[i]} className="w3-row">
            {activeSub[0].activeSubject[i] && (
              <div className="w3-col s3">{unitCard(i, true)}</div>
            )}
            {activeSub[0].activeSubject[i + 1] && (
              <div className="w3-col s3">{unitCard(i + 1, true)}</div>
            )}
            {activeSub[0].activeSubject[i + 2] && (
              <div className="w3-col s3">{unitCard(i + 2, true)}</div>
            )}
            {activeSub[0].activeSubject[i + 3] && (
              <div className="w3-col s3">{unitCard(i + 3, true)}</div>
            )}
          </div>
        );
      }
    }
  };

  if (!subList || !activeSub[0]) {
    return props.active ? (
      <div>
        <div
          style={{
            marginTop: 50,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <HashLoader size={150} color={"#0CBB06"} loading={true} />
        </div>
        <div style={{ height: 400 }}></div>
      </div>
    ) : (
      <p></p>
    );
  } else {
    if (props.active) {
      getActiveCard();
    } else {
      getCard();
    }
    return (
      <>
        <div className="w3-hide-large w3-hide-medium">
          {mobileCard.length > 0 ? mobileCard : emptyUIList}
        </div>
        <div className="w3-hide-small">
          {mobileCard.length > 0 ? pcCard : emptyUIList}
        </div>
      </>
    );
  }
}

export default SubjectCard;
