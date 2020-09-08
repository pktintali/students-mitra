import React, {useState,useEffect} from 'react';
function Counter(){

   const [count,setCount] = useState(10)
 
 useEffect(()=>{
    const interval = setInterval(tick,1000)
    return ()=>{
         clearInterval(interval)
    }
 },[count])
  
   const tick =()=>{
   	if(count>0){
     setCount(count-1)
     }
   } 

return  count;
}

export default Counter;