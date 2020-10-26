import React, {useState,useEffect} from 'react';
import firebase from '../../../firebase';

function UseGame(id){
const [game,setGames] = useState([])
useEffect(()=>{
const unsubscribe = firebase
 .firestore()
 .collection('games')
 .where('roomid', '==', id)
 .onSnapshot((snapshot)=>{
   const newItems = snapshot.docs.map((doc)=>({
   id:doc.id,
   ...doc.data()
}))

setGames(newItems)
})

return () => unsubscribe()
},[])

return game
}

function LeaderBoard(props){

var user = window.sessionStorage.getItem("userName");
var id = window.sessionStorage.getItem("id");
var host = window.sessionStorage.getItem("host");

const [sub,setSub] = useState()
const games = UseGame(id)

async function deleteDoc(){
await firebase.firestore().collection('games').doc(id).delete();
}

if(games.length===0){
alert('Deleted')
}

const handleProps = ()=>{
host&&deleteDoc()
props.closeAns()
props.click()
}

return(
<>
      {games.map((game)=>
   <div>
   <table className = 'w3-table w3-striped'>
           <tr><th>LeaderBoard</th></tr>
           <tr><td className = {`${user==game.p1?'w3-text-red':''}`}>{game.p1} {game.p1m} {user==game.p1&&"(Your Marks)"}</td></tr>
           <tr><td className = {`${user==game.p2?'w3-text-red':''}`}>{game.p2} {game.p2m} {user==game.p2&&"(Your Marks)"}</td></tr>
           <tr><td className = {`${user==game.p3?'w3-text-red':''}`}>{game.p3} {game.p3m} {user==game.p3&&"(Your Marks)"}</td></tr>
           <tr><td className = {`${user==game.p4?'w3-text-red':''}`}>{game.p4} {game.p4m} {user==game.p4&&"(Your Marks)"}</td></tr>
      </table>
     <br></br><p></p>
      <button className = 'w3-button w3-red' onClick = {handleProps}>Close</button>
     </div>
    )}
</>

);

}

export default LeaderBoard;