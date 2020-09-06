import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {SubjectContext} from './SubjectList';
import LoadingScreen from './LoadingScreen';

function DataFetching(){

const subjectByContext = useContext(SubjectContext)

const [questions,setQuestions]=useState([])
const [subject,setSubject] = useState(subjectByContext)
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
    
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
    return (
             <div>
             <ul className = 'w3-ul'>
                  {
                      questions.map(question => 
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

export default DataFetching;