import React from 'react';
import '../App.css';
import { FaArrowLeft } from 'react-icons/fa';

function TopBar(props) {
	
  return (
  <>
       <div className =  'w3-red w3-hide-large w3-hide-medium w3-top w3-container w3-hide-large w3-card'>
           {props.bool&&<button onClick ={props.click} className = 'icon-bar  w3-left w3-button w3-red'><FaArrowLeft size='20'/></button>}
        <h3>{props.txt}</h3>
      </div>
    </>
  );
}

export default TopBar;
