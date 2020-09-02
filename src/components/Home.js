import React from 'react';
import '../App.css';
import Graph from './Graph';

function Home() {
  return (
    <> 
     <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
         <h3>Dashboard</h3>
      </div>
      <Graph />
    </>
  );
}

export default Home;
