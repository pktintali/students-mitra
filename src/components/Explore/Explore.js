import React from 'react';
import '../../App.css';
import TopBar from '../TopBar';
import Schedule from './schedule';

function Explore() {

  return (
  <>
     <TopBar txt = 'Explore'  bool = {false}/>
      <div className = 'mtop' ></div>
       <Schedule />
     <div className = 'mbot' ></div>
    </>
  );
}

export default Explore;
