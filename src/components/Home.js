import React from 'react';
import '../App.css';
import Graph from './Graph';
import TopBar from './TopBar';

function Home() {

  return (
    <> 
      <TopBar txt = 'Dashboard'  bool = {false}/>
     <Graph />
    </>
  );
}

export default Home;
