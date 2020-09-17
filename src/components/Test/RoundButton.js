import React from 'react';

function RoundButton(props) {
  return (
  <>
      <div className = 'outer w3-third w3-padding'>
           <div onClick = {props.click} className = 'button w3-hover-shadow w3-card c-box'> 
              <h2 className = 'c-pad'>{props.txt}</h2>
          </div>
     </div>
    </>
  );
}

export default RoundButton;
