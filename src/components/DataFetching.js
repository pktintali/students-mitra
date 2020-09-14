import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import QuestionMaker from './QuestionMaker';

function DataFetching(props){
	
const subject = props.sub
const [questions,setQuestions]=useState([])
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

//Generating 10 Unique Random No
var arr = [];
while(arr.length < 10){
var r=Math.floor(Math.random()*31) ; 
if(arr.indexOf(r) === -1) 
arr.push(r);
} 
useEffect(()=>{
if(props.type==='select'){
for(let i in subject){
 axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject[i]}`)
     .then(res=>{  
       for(let i =0;i<5;i++){
       	   r=Math.floor(Math.random()*31); 
              questions.push(...res.data.slice(arr[i],arr[i]+1))
         }
          if(i==subject.length-1){setIsLoaded(true);}
     })
     .catch(error=>{
     setIsLoaded(true);
     setError(error)
      console.log(error)
      })
}}else{
axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject}`)
     .then(res=>{
       for(let i =0;i<10;i++){
          questions.push(...res.data.slice(arr[i],arr[i]+1))
       }
       setIsLoaded(true);
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