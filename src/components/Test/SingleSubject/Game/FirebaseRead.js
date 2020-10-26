import React, {useState,useEffect} from 'react';
import firebase from '../../../firebase';

function UseGame(){
const [game,setGames] = useState([])

useEffect(()=>{
const unsubscribe = firebase
 .firestore()
 .collection('games')
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

function FirebaseRead(props){

const games = UseGame()
var user = window.sessionStorage.getItem("userName");

return(
<>
  <h2>Room Lists</h2>
      {games.map((game)=>
   <div> 
   <table className = 'w3-table w3-striped'>
           <tr><th>Joined Players</th></tr>
           <tr><td>{game.p1} {game.host==game.p1&&"(Host)"}</td></tr>
           <tr><td>{game.p2} {game.host==game.p2&&"(Host)"}</td></tr>
           <tr><td>{game.p3} {game.host==game.p3&&"(Host)"}</td></tr>
           <tr><td>{game.p4} {game.host==game.p4&&"(Host)"}</td></tr>
      </table>
     <br></br><p></p>
      <div className = 'w3-panel w3-padding'>
      {game.host==user&&<button className = 'w3-right w3-button w3-green' onClick = {props.start}>Start</button>}
      <button className = 'w3-left w3-button w3-red' onClick = {props.leaveGame}>Leave</button>
     </div>
     </div>
    )}
</>

);

}

export default FirebaseRead;