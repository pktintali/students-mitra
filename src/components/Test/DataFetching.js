import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen';
import QuestionMaker from './QuestionMaker';

function DataFetching(props){
	
const subject = props.sub
const [questions,setQuestions]=useState([])
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

//Generating 10 Unique Random No
var arr = [];
const get10 =()=>{
while(arr.length < 10){
var r=Math.floor(Math.random()*10) ; 
if(arr.indexOf(r) === -1) 
arr.push(r);
} 
}

useEffect(()=>{
get10();
const r=Math.floor(Math.random()*40) ; 
if(props.type==='select'){
for(let i in subject){
 axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject[i]}?limit=10&offset=${r}`)
     .then(res=>{  
       for(let i =0;i<5;i++){
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
//Here we are getting 10 random from 10 but we have to get 10 random from 20
axios.get(`https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/${subject}?limit=10&offset=${r}`)
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