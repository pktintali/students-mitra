import React from "react";

function RoundButton(props) {
  return (
    <>
      <div className="pointer w3-hide-small w3-hide-medium w3-hover-red w3-hover-shadow w3-card w3-round">
        <div style={{paddingTop:40,paddingBottom:40}} onClick={props.click}>
          <h3>{props.txt}</h3>
          {props.tag&&<span class=" w3-tag w3-green">New!</span>}
        </div>
      </div>
      <div className="pointer w3-hide-large w3-hover-red w3-hover-shadow w3-card w3-round">
        <div onClick={props.click} className="w3-padding">
          <h4>{props.txt}</h4>
          {props.tag&&<span class="w3-tag w3-green">New!</span>}
        </div>
      </div>
    </>
  );
}

export default RoundButton;
