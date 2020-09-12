import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import QuestionMaker from './QuestionMaker';

function DataFetching(props){
	
const subject = props.sub
const [questions,setQuestions]=useState([])
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(()=>{
if(props.type==='select'){
for(let i in subject){
 axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject[i]}`)
     .then(res=>{
       if(i==subject.length-1){setIsLoaded(true);}
       questions.push(...res.data.slice(0,5))
     })
     .catch(error=>{
     setIsLoaded(true);
     setError(error)
      console.log(error)
      })
}}else{
axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject}`)
     .then(res=>{
       setIsLoaded(true);
       setQuestions(res.data.slice(0,10))
     })
     .catch(error=>{
     setIsLoaded(true);
     setError(error)
      console.log(error)
      })
 }
 
 },[])

  if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
         return <LoadingScreen />;
     } else {
     if(questions[0]!==undefined){ 
     return (<QuestionMaker data = {questions} type = {props.type}/>);
     }
   return <LoadingScreen />;
   }
 
}

export default DataFetching;