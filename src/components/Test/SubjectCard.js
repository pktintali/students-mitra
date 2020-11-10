import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "../firebase";

function SubjectCard(props) {
  const [c, setC] = useState(0);
  const [k, setK] = useState(0);
  const [error, setError] = useState(null);
  const [col, setColor] = useState([""]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subList, setSubList] = useState([]);
  const [activeSub, setActiveSub] = useState();

  useEffect(() => {
    firebase.getField("activeSubject").then(setActiveSub);
    // alert('check')
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/1sQhy4Ex1XztFzMU3_nvpc-9par8AcIIwsksm9vhlM_E/values/subject?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
      )
      .then((res) => {
        setSubList(res.data.values);
        setIsLoaded(true);
        console.log(subList);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
  }, []);

  const mobileCard = [];
  const pcCard = [];

  const cardStyle = {
    minHeight: "140px",
  };

  async function MarkActive(sub) {
    await firebase.getField("activeSubject").then(setActiveSub);
    if (activeSub && activeSub.includes(sub)) {
      alert("Already Active");
    } else {
      if(activeSub==undefined){
        await firebase.updateActiveSubjects([sub]);
      }else{
      //if (activeSub) {
        activeSub.push(sub);
        await firebase.updateActiveSubjects(activeSub);
      }
        
     // }else{
      //  await firebase.updateActiveSubjects(activeSub);
    //  }
        alert("Added to Active Subject List");
    }
    await firebase.getField("activeSubject").then(setActiveSub);
  }

  const unitCard = (i, active) => {
    return (
      <div
        style={cardStyle}
        onClick={() => {
          props.enableButton("");

          if (props.id === 1) {
            undo();
            col[i] = "w3-green";
            !active && (props.subject[0] = subList[i][2]);
            active && (props.subject[0] = activeSub[i]);
            setC(c + 1);
          }

          if (props.id === 2) {
            col[i] = col[i] == "w3-green" ? "" : "w3-green";
            if (
              (!active && !props.subject.includes(subList[i][2])) ||
              (active && !props.subject.includes(activeSub[i]))
            ) {
              !active && props.subject.push(subList[i][2]);
              active && props.subject.push(activeSub[i]);
            } else {
              const index = !active
                ? props.subject.indexOf(subList[i][2])
                : props.subject.indexOf(activeSub[i]);
              props.subject.splice(index, 1);
              if (!props.subject.length > 0) {
                props.enableButton("w3-disabled");
              }
            }
            setC(c + 1);
          }
        }}
        onDoubleClick={() =>
          props.id == 1 && !props.active
            ? !active
              ? MarkActive(subList[i][2])
              : MarkActive(activeSub[i])
            : props.id == 1 &&
              alert("You Can Remove Active Subjects in Profile Section")
        }
        className={` ${col[i]} pointer cardButton w3-padding w3-card w3-margin w3-round-xlarge w3-card`}
      >
        {/* <button onClick = {MarkActive} className='w3-right w3-tiny w3-border w3-round-large w3-button'>❤</button> */}
      {!active&&subList[i][3]&&<span className ='w3-display-topright w3-padding-small w3-green w3-small'>New!</span>}
        <h1>{!active ? subList[i][2].toUpperCase() : activeSub[i].toUpperCase()}</h1>
        <p className="w3-tiny">{!active && subList[i][1].toUpperCase()}</p>
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
    if (activeSub) {
      for (let i = 0; i < activeSub.length; i = i + 2) {
        mobileCard.push(
          <div className="w3-row">
            {activeSub[i]&&<div className="w3-col s6">{unitCard(i, true)}</div>}
            {activeSub[i + 1] && (
              <div className="w3-col s6">{unitCard(i + 1, true)}</div>
            )}
          </div>
        );
      }
    }
    // for (let i = 1; i < subList.length; i = i + 2) {

    //   mobileCard.push(
    //     <div className="w3-row">
    //       {activeSub&&activeSub.includes(subList[i][2])&&<div className="w3-col s6">{unitCard(i)}</div>}
    //       {activeSub&&subList[i + 1] &&activeSub.includes(subList[i+1][2])&& <div className="w3-col s6">{unitCard(i + 1)}</div>}
    //     </div>
    //   );
    // }
    if (activeSub) {
      for (let i = 0; i < subList.length; i = i + 4) {
        pcCard.push(
          <div className="w3-row">
            {activeSub[i]&&<div className="w3-col s3">{unitCard(i, true)}</div>}
            {activeSub[i + 1] && (
              <div className="w3-col s3">{unitCard(i + 1, true)}</div>
            )}
            {activeSub[i + 2] && (
              <div className="w3-col s3">{unitCard(i + 2, true)}</div>
            )}
            {activeSub[i + 3] && (
              <div className="w3-col s3">{unitCard(i + 3, true)}</div>
            )}
          </div>
        );
      }
    }
  };

  function undo() {
    for (let j in subList) {
      col[j] = "w3-white";
    }
  }

  useEffect(() => {}, [c]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    if (props.active) {
      getActiveCard();
    } else {
      getCard();
    }
    return (
      <>
        <div className="w3-hide-large w3-hide-medium">{mobileCard}</div>
        <div className="w3-hide-small">{pcCard}</div>
      </>
    );
  }
}

export default SubjectCard;
