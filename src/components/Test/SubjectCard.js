import React, { useState, useEffect } from "react";

import firebase from "../firebase";
import FetchSubjectList from "./FetchSubjectList";
import UseActiveSub from "./UseActiveSub";
import {FaRegStar,FaStar} from 'react-icons/fa';

function SubjectCard(props) {
  const [c, setC] = useState(0);
  const [col, setColor] = useState([""]);
  const mobileCard = [];
  const pcCard = [];

  const subList = FetchSubjectList();
  const activeSub = UseActiveSub(firebase.getCurrentUserEmail());

  function undo() {
    for (let j in subList) {
      col[j] = "w3-white";
    }
  }
  const cardStyle = {
    minHeight: "140px",
  };

  async function MarkActive(sub) {
    if (
      activeSub[0].activeSubject &&
      activeSub[0].activeSubject.includes(sub)
    ) {
      const index = activeSub[0].activeSubject.indexOf(sub)
      activeSub[0].activeSubject.splice(index,1)
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
        style={cardStyle}
        onClick={() => {
          if(active){
          for(let j in subList){
            if(subList[j][2]==activeSub[0].activeSubject[i]){
             props.config({
               randLimit:subList[j][4]
             })
            }
          }}else{
            props.config({
              randLimit:subList[i][4]
            })
          }
          props.enableButton("");

          if (props.id === 1) {
            undo();
            col[i] = "w3-green";
            !active && (props.subject[0] = subList[i][2]);
            active && (props.subject[0] = activeSub[0].activeSubject[i]);
            setC(c + 1);
          }

          if (props.id === 2) {
            col[i] = col[i] == "w3-green" ? "" : "w3-green";
            if (
              (!active && !props.subject.includes(subList[i][2])) ||
              (active && !props.subject.includes(activeSub[0].activeSubject[i]))
            ) {
              !active && props.subject.push(subList[i][2]);
              active && props.subject.push(activeSub[0].activeSubject[i]);
            } else {
              const index = !active
                ? props.subject.indexOf(subList[i][2])
                : props.subject.indexOf(activeSub[0].activeSubject[i]);
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
        {!active&&activeSub[0]&&activeSub[0].activeSubject&&<span style = {{zIndex:3}} onClick = {()=> MarkActive(subList[i][2])} className='w3-display-topleft w3-tiny w3-button'>{!active&&(activeSub[0].activeSubject.includes(subList[i][2])?<FaStar color= {'red'} size ={18}/>:<FaRegStar  size ={18}/>)}</span>}
        {!activeSub[0].activeSubject&&<span style = {{zIndex:3}} onClick = {()=> MarkActive(subList[i][2])} className='w3-display-topleft w3-tiny w3-button'>{!active&&<FaRegStar  size ={18}/>}</span>}
        {!active && subList[i][3] && (
          <span className="w3-display-topright w3-padding-small w3-green w3-small">
            New!
          </span>
        )}
       
        <h1 style={{marginTop:20}}>
          {!active
            ? subList[i][2].toUpperCase()
            : activeSub[0].activeSubject[i].toUpperCase()}
        </h1>
        <p className="w3-tiny">{!active && subList[i][1].toUpperCase()}</p>
        {
          subList.map((sub)=>{
            if(activeSub[0].activeSubject&&sub[2]==activeSub[0].activeSubject[i]){
             return <p className="w3-tiny">{active && sub[1].toUpperCase()}</p>
            }
          })
        }
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
    if (activeSub[0]&&activeSub[0].activeSubject) {
      for (let i = 0; i < activeSub[0].activeSubject.length; i = i + 2) {
        mobileCard.push(
          <div className="w3-row">
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
    if (activeSub[0]&&activeSub[0].activeSubject) {
      for (let i = 0; i < subList.length; i = i + 4) {
        pcCard.push(
          <div className="w3-row">
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

  if (!subList) {
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
