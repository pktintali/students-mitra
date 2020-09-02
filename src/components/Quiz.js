import React from 'react';
import '../App.css';
import MyComponent from './MyComponent.js';
function Quiz() {
  return (
    <>
    <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
         <h3>Test</h3>
      </div>
      
      
      <div className = 'mtop' ></div>
      <h2 className = 'w3-text-grey' > Select any  Option</h2>
      
    <div className = 'w3-row'>
      <div className = 'outer w3-third w3-padding'>
          <div className = 'button w3-hover-shadow w3-card c-box'>
             <h2 className = 'c-pad'>All Subjects</h2>
           </div>
     </div>
      
      <div className = 'outer w3-third w3-padding'>
           <div className = 'button w3-hover-shadow w3-card c-box'> 
              <h2 className = 'c-pad'>Select Subject</h2>
          </div>
     </div>
       
       <div className = 'outer w3-third w3-padding'>
           <div className = 'button w3-hover-shadow w3-card c-box'> 
              <h2 className = 'c-pad'>Single Subject</h2>
           </div>
      </div>
     </div>
     <div className = 'c-box-min'></div>
    </>
  );
}

export default Quiz;
