import React from 'react';
import '../App.css';
import Jokes from './Jokes';

function Explore() {
  return (
    <div className='bm w3-panel w3-card w3-pale-yellow'>
    <h3 >Explore Page</h3>
     <Jokes />
    </div>
  );
}

export default Explore;
