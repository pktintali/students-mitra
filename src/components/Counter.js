import React, {useState,useEffect} from 'react';
function Counter(){

   const [count,setCount] = useState(0)
 
 useEffect(()=>{
    const interval = setInterval(tick,1000)
    return ()=>{
         clearInterval(interval)
    }
 },[])
  
   const tick =()=>{
     setCount(prevCount=>prevCount+1)
   } 


return (
       <div>
             <h2>{count}</h2>  
       </div> 
);
}

export default Counter;