import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { RiSendPlaneFill } from "react-icons/ri";
import AddRoom from "./AddRoom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

toast.configure();
function UseMsg(id) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("games")
      .doc(id)
      .collection("chats")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlayers(newItems);
        // let chatBox = document.getElementById('chatList');
        // chatBox.scrollTo(10001,10000);
      });

    return () => unsubscribe();
  }, []);

  return players;
}

const ChatScreen = (props) => {
  const [msg, setMsg] = useState();
  const msges = UseMsg(props.id);

  useEffect(() => {
        let chatBox = document.getElementById('chatList');
        chatBox.scrollTo(10001,10001);
  }, [msges]);

  async function sendMsg(e) {
    e.preventDefault();
    if(msg){
    await AddRoom(props.id, msg, "chat", firebase.getCurrentUsername());
    }else{
      toast.info('Empty Message',{position:toast.POSITION.BOTTOM_RIGHT,autoClose:2000})
    }
    setMsg("");
  }
  return (
    <div>
      <Helmet>
        <title>{props.id+" Chats"}</title>
        <meta
          name="description"
          content="Game mode chat screen. joined players in the room can chat here."
        />
      </Helmet>
      <ul
        id = 'chatList'
        style={{listStyleType:'none', height :'250px',maxHeight: 250, overflow: "auto" }}
        className="w3-padding w3-border"
      >
        {msges.map((msg) => (
          <li style = {{marginRight:msg.senderId===firebase.getCurrentUserEmail()?0:200,marginLeft:msg.senderId==firebase.getCurrentUserEmail()?200:0,revere:'true'}}>
            <p className ={`w3-round w3-padding-small w3-card ${msg.senderId===firebase.getCurrentUserEmail()?'w3-pale-green':'w3-pale-yellow'}`}>
        <span className='w3-left w3-tiny'>{msg.senderId===firebase.getCurrentUserEmail()?'You':msg.name}</span>
        <span className='w3-right w3-tiny'>{msg.time}</span>
              <br></br>
              <span>{msg.msg}</span>
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={sendMsg}>
        <input
          style = {{width:250}}
          type="text"
          value={msg}
          autoFocus
          placeholder="type something..."
          onChange={(e) => setMsg(e.target.value)}
        />
        <div onClick={sendMsg} className="w3-tiny w3-button w3-text-green">
          <RiSendPlaneFill size={30} />
        </div>
      </form>
    </div>
  );
};

export default ChatScreen;
