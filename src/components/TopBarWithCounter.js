import React,{useState,useEffect} from 'react';
import '../App.css';

function TopBarWithCounter() {
	
var totalMin = 3
var totalSec = 9
 const [count,setCount] = useState(totalSec)
 const [minut,setMinut] = useState(totalMin)
 const[col,setCol] = useState('w3-green')
 
 useEffect(()=>{
 	if(minut<2){
        setCol('w3-orange')
     }
     if(minut<1){
        setCol('w3-red')
      }
    const interval = setInterval(tick,1000)
    return ()=>{
         clearInterval(interval)
    }
 },[count])
 
 
 useEffect(()=>{
    const intervalM = setInterval(tickM,10*1000)
    return ()=>{
         clearInterval(intervalM)
    }
 },[minut])
  
   const tick =()=>{
   	if(!count&&minut>=-1){
            setCount(9)
      }
   	if(count){
     setCount(count-1)
     }
   } 
   
   const tickM =()=>{
   	if(minut!=-1){
     setMinut(minut-1)
     }
   } 
	
	if(minut>=0){
  return (
  <>
       <div className =  {`${col} w3-hide-large w3-hide-medium w3-top my-container w3-hide-large w3-card`}>
        <h3>Time Remaining {minut}:{count}</h3>
      </div>
    </>
  );
  }else{
      return (
  <>
       <div className =  {`${col} w3-hide-large w3-hide-medium w3-top my-container w3-hide-large w3-card`}>
        <h3>Time Remaining 0:0</h3>
      </div>
    </>
  );
}
}

export default TopBarWithCounter;
