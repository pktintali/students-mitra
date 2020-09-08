import React,{useState,useEffect} from 'react';
import '../App.css';

function TopBar(props) {
	
  return (
  <>
       <div className =  'w3-white w3-hide-large w3-hide-medium w3-top w3-container w3-hide-large w3-card'>
           {props.bool&&<button onClick ={props.click} className = 'mtop2 w3-round-xxlarge  w3-left w3-button w3-red'>{`<<`}Back</button>}
        <h3>{props.txt}</h3>
      </div>
    </>
  );
}

export default TopBar;
