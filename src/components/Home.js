import React,{useEffect} from 'react';
import '../App.css';
import Graph from './Graph';
import Test from './Test';
import TopBar from './TopBar';

function Home() {
	
	useEffect(()=>{
          alert('Only Optmized for Mobile Devices')
          alert('There are many things to change')
    },[])

  return (
    <> 
      <TopBar txt = 'Dashboard'  bool = {false}/>
     <Graph />
    </>
  );
}

export default Home;
