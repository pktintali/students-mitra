import React from 'react';
import './style.css';
import TopBar from '../TopBar';

function AllSubject(props) {
   
  return (
   <>
     <TopBar txt = 'Test' click = {props.click} bool = {true}/>
     <div className = 'mtop' ></div>
      <h2 className = 'mbot'>You have selected all subjects</h2>
         <button className = 'w3-round w3-button w3-red'>Start</button>
     <div className = 'mbot'></div>
</>
  );
}

export default AllSubject;
