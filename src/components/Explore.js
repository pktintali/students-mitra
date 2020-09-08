import React from 'react';
import '../App.css';
import Jokes from './Jokes';
import TopBar from './TopBar';

function Explore() {
  return (
  <>
     <TopBar txt = 'Learn'  bool = {false}/>
      <div className = 'mtop' ></div>
    </>
  );
}

export default Explore;
