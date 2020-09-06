import React, {useState,useEffect} from 'react';
import '../App.css';
import MyComponent from './MyComponent.js';
import Counter from './Counter';
import SubjectList from './SubjectList';

function Quiz() {
    
    const [id,setId] = useState(0)
    const[selector,setSelector] = useState(true)
    
    const goBack = ()=>{
      setId(0)
      setSelector(true)
   }
    const setSingleSubject = ()=>{ 
        setId(1)
        setSelector(false)
   }
   
   const setSelectSubject = ()=>{
        setId(2)
        setSelector(false)
   }
    
    const setAllSubject = ()=>{
        setId(3)
        setSelector(false)
   }
    
  if(selector){
  return (
    <>
    <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
         <h3>Test</h3>
      </div>
   <div className = 'mtop' ></div>
   <h2 className = 'w3-text-grey' > Select any  Option</h2>
    <div className = 'w3-row'>
      <div className = 'outer w3-third w3-padding'>
          <div onClick = {setAllSubject}  className = 'button w3-hover-shadow w3-card c-box'>
             <h2 className = 'c-pad'>All Subjects</h2>
           </div>
     </div>
      
      <div className = 'outer w3-third w3-padding'>
           <div onClick = {setSelectSubject} className = 'button w3-hover-shadow w3-card c-box'> 
              <h2 className = 'c-pad'>Select Subject</h2>
          </div>
     </div>
       
       <div className = 'outer w3-third w3-padding'>
           <div onClick = {setSingleSubject} className = 'button w3-hover-shadow w3-card c-box'> 
              <h2 className = 'c-pad'>Single Subject</h2>
           </div>
      </div>
     </div>
     <div className = 'c-box-min'></div>
</>
  ); }else{
   
    if(id==1){
   return (
    <>
    <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
           <button onClick = {goBack} className = 'mtop2 w3-left w3-button w3-red'>{`<<`}Back</button>
        <h3>Test</h3>
      </div>
   <div className = 'mtop' ></div>
   {/*<h2 className = 'w3-text-grey' > Select  Subject</h2>*/}
      <SubjectList />
     <div className = 'c-box-min'></div>
</>
  ); 
}
else if(id==2){
   return (
    <>
    <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
         <h3>Test</h3>
      </div>
   <div className = 'mtop' ></div>
    <button onClick = {goBack} className = 'w3-left w3-button w3-red'>{`<<`}Back</button>
   <h2 className = 'w3-text-grey' > Select  Subjects</h2>
   
     <div className = 'c-box-min'></div>
</>
  );
}else{
return (
    <>
    <div className = 'w3-hide-large w3-hide-medium w3-top w3-white w3-container w3-hide-large w3-card'>
         <h3>Test</h3>
      </div>
   <div className = 'mtop' ></div>
    <button onClick = {goBack} className = 'w3-left w3-button w3-red'>{`<<`}Back</button>
   <h2 className = 'w3-text-grey' > Select  Action</h2>
   
     <div className = 'c-box-min'></div>
</>
  );
}
 
}
  
}

export default Quiz;
