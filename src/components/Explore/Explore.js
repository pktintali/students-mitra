import React from 'react';
import '../../App.css';
import TopBar from '../TopBar';

function Explore() {
  return (
  <>
     <TopBar txt = 'Explore'  bool = {false}/>
      <div className = 'mtop' ></div>
    </>
  );
}

export default Explore;
