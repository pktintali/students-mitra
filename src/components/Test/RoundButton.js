import React from 'react';

function RoundButton(props) {
  return (
  <>
      <div className = 'pointer w3-hover-red w3-hover-shadow w3-card w3-round'>
           <div onClick = {props.click} className = 'w3-padding'> 
              <h4>{props.txt}</h4>
          </div>
     </div>
    </>
  );
}

export default RoundButton;
