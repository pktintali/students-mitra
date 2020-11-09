import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { RiSendPlaneFill } from "react-icons/ri";
import AddRoom from "./AddRoom";

function UseMsg(id) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("games")
      .doc(id)
      .collection("chats")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPlayers(newItems);
      });

    return () => unsubscribe();
  }, []);

  return players;
}

const ChatScreen = (props) => {
  const [msg, setMsg] = useState();
  const msges = UseMsg(props.id);

  async function sendMsg(e) {
    e.preventDefault();
    if(msg){
    await AddRoom(props.id, msg, "chat", firebase.getCurrentUsername());
    }else{
      alert("You Can't send Empty Messages")
    }
    setMsg("");
  }
  return (
    <div>
      <ul
        style={{height :'250px',maxHeight: 250, overflow: "auto" }}
        className="w3-ul w3-padding w3-border"
      >
        {msges.map((msg) => (
          <li style = {{revere:'true'}}>
            <p>
              <b>{msg.name} -</b>
              <span>{msg.msg}</span>
            </p>
          </li>
        ))}
      </ul>
      <form onSubmit={sendMsg}>
        <input
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
