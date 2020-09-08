import React from 'react';
import './style.css';
import TopBar from '../TopBar';
import MultiFetch from './MultiFetch';

function Questions2() {
	
  return (
  <>
     <TopBar txt = 'Time Remaining 10:00'  bool = {false}/>
      <div className = 'mtop' ></div>
          <MultiFetch />
      <div className = 'w3-panel'>
          <button className = 'w3-button w3-red'>Submit</button>
      </div>
      <div className = 'mbot'></div>
    </>
  );
}

export default Questions2;