import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {SubjectContext} from './SubjectList';
import LoadingScreen from './LoadingScreen';
import '../App.css';

function DataFetching(props){

const [q,setQ] =useState(0)
const [questions,setQuestions]=useState([])
const [subject,setSubject] = useState(props.sub)
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
 const[end,setEnd] = useState(false)
   var questionList = [];
   var qView = [];
 
   const skipQ = ()=>{
    	 if(q==qView.length-1){
           setEnd(true)
      }
        if(q<qView.length){
            setQ(q+1)
        }
    }
    
    const saveAns=()=>{
    	if(q==qView.length-1){
         setEnd(true)
    }
      if(q<qView.length){
            setQ(q+1)
        }
    }
    
    const submit = ()=>{
        alert('Your ans Submitted')
    }
    
    
useEffect(()=>{
 axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject}`)
     .then(res=>{
       setIsLoaded(true);
       setQuestions(res.data)
     })
     .catch(error=>{
     setIsLoaded(true);
     setError(error)
      console.log(error)
      })
 },[])

if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingScreen />;
  } else {
  	if(props.type=='single'){
  
  
  for (var i in questions) {
    questionList.push( 
    <>
          <div id = 'top' className = 'centeredW w3-card w3-container w3-pale-green'>
              
               <div className = 'w3-center w3-container'>
                 <h4>{questions[i].question}</h4>
               </div>
               
               <div className = 'c-box-xmin'></div>
            
                   <div onClick = {saveAns} className = 'opt  w3-border w3-border-red w3-padding-large'>{questions[i].opt0}</div>
                   <div onClick = {saveAns}  className = 'opt w3-border w3-border-red w3-panel w3-padding-large'>{questions[i].opt1}</div>
                   
                   <div onClick = {saveAns}  className = 'op w3-border w3-border-red w3-padding-large'>{questions[i].opt2}</div>
                   <div onClick = {saveAns}  className = 'opt w3-border w3-border-red w3-panel w3-padding-large'>{questions[i].opt3}</div>
          
             <div className = 'c-box-xmin'></div>
           </div>
         
    </>
);

qView.push(i);
}
    return (
<>
  {questionList[q]}
  <div className = 'c-box-xmin'></div>
      {end&&<button onClick = {submit} className ='w3-border w3-button'>Submit</button>}
       {!end&&<button onClick = {skipQ} className ='w3-border w3-button'>Skip</button>}
</>
);
    }else{
      return (
             <div>
             <ul className = 'w3-ul'>
                  {
                      questions.slice(0,5).map(question => 
                    <div>
                    <div className = 'w3-margin w3-card'>
                       <h3 key = {question.id}>{question.question}</h3>
                       <a style={{ textDecoration:'none' }} className = 'w3-large w3-text-blue' href = {question.references} target = '_blank'>Reference</a>
                     </div>
                   </div>
              )             
                  }
              </ul>
       </div> 
    );
}
 }
}

export default DataFetching;