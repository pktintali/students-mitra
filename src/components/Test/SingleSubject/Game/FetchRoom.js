import React, {useState,useEffect} from 'react';
import checkFull from './CheckFull';
import AddRoom from './AddRoom';
import FirebaseSearch from './FirebaseSearch';

function FetchRoom(props){
window.sessionStorage.setItem("id", props.id);
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [result,setResult] = useState()
const [flag,setFlag] = useState(0)
const [slot,setSlot] = useState(0)
const [c,setC] = useState(0)
const [host,setHost] = useState('')
const [sub,setSub] = useState()
const [loading,setLoading] = useState(true)
var i = 0,k=0,v=0;
var user = window.sessionStorage.getItem("userName");
 
async function getData(){

 setHost(await checkFull(props.id,'getHost'))
 //setSub(rows[i].sub)
 setSub(await checkFull(props.id,'getSub'))
 //alert(await checkFull(props.id,'getSub'))
 props.setSub(await checkFull(props.id,'getSub'))
 //alert('Fetching sub')
setLoading(false)
}

if(sub!=undefined){
//alert('starting')
props.start()
}

const userReady=()=>{
	getData();
}


const leaveGame =()=>{
props.leave()
}

const getStatus =()=>{
getData();
if(loading){return<h4>Loading.....</h4>;}

else{
if(host==user){
props.setHost()
}

return (
<>
      <FirebaseSearch userReady = {userReady} id = {props.id} start = {props.start} leaveGame = {leaveGame} />
</>
);
}


  }
        return getStatus();
}


export default FetchRoom;