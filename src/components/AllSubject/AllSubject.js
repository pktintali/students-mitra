import React from 'react';
import './style.css';
import TopBar from '../TopBar';

function AllSubject(props) {
   
  return (
   <>
     <TopBar txt = 'Test' click = {props.click} bool = {true}/>
     <div className = 'mtop' ></div>
      <h3 className = 'mbot'>Questions will come from all of your favourite subjects</h3>
         <button className = 'w3-round w3-button w3-red'>Start</button>
     <div className = 'mbot'></div>
</>
  );
}

export default AllSubject;
