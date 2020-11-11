import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { BsChatDots, BsFillChatDotsFill } from "react-icons/bs";
import ChatScreen from "./ChatScreen";
import UsePlayers from "./UsePlayers";

function UseGame(id) {
  const [game, setGames] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("games")
      .where("roomid", "==", id)
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGames(newItems);
      });

    return () => unsubscribe();
  }, []);

  return game;
}

function FirebaseSearch(props) {
  const [sub, setSub] = useState();
  const [chat, setChat] = useState(false);
  const games = UseGame(props.id);
  const players = UsePlayers(props.id);
  console.log(players);
  if (games[0] != undefined && games[0].subject != undefined) {
    props.userReady();
  }
  var user = firebase.getCurrentUserEmail();
  function autoStart() {
    //props.userReady();
  }

  const setLeval =(leval)=>{
    props.setLeval(leval)
  }

  const toogleChat = () => {
    chat ? setChat(false) : setChat(true);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <div className="w3-third">
        <div className="w3-hide-small">
          <form className="w3-container">
            <h2>Select Game Leval</h2>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Easy"
                onChange= {(e)=>setLeval(e.target.value)}
              />
              <label>Easy</label>
            </p>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Normal"
                
                onChange= {(e)=>setLeval(e.target.value)}
              />
              <label>Normal</label>
            </p>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Hard"
                onChange= {(e)=>setLeval(e.target.value)}
              />
              <label>Hard</label>
            </p>
          </form>
        </div>
      </div>
      <div className="w3-third">
        <table className="w3-table w3-striped w3-border">
          <tr className="w3-pale-green">
            <th>
              <h2>
                <center>Joined Players</center>
              </h2>
            </th>
          </tr>

          {players.map((p) => (
            <tr>
              {games[0] && (
                <td
                  className={`${games[0].host === p.id ? "w3-text-red" : ""}`}
                >
                  <h4>
                    {p.name}
                    {user === p.id && " (You)"}{" "}
                    {games[0].host === p.id && "[Host]"}
                  </h4>
                </td>
              )}
            </tr>
          ))}

          <tr>{games[0] && <td>{games[0].subject}</td>}</tr>
        </table>
        <br></br>
        <p></p>
        <div className="w3-panel w3-padding">
          {games[0] && games[0].host == user && (
            <button
              className="w3-right w3-button w3-green  w3-card"
              onClick={props.start}
            >
              Start
            </button>
          )}
          <div
            onClick={toogleChat}
            className=" w3-hide-large w3-button w3-circle w3-text-green"
          >
            {!chat && <BsChatDots size={30} />}
            {chat && <BsFillChatDotsFill size={30} />}
          </div>
          {sub != undefined && (
            <button
              className="w3-center w3-button w3-green"
              onClick={autoStart()}
            >
              Ready
            </button>
          )}
          <button
            className="w3-left w3-button w3-red  w3-card"
            onClick={props.leaveGame}
          >
            Leave
          </button>
        </div>
      </div>

      <div className="w3-third">
        <div
          onClick={toogleChat}
          className="w3-hide-small w3-button w3-circle w3-text-green"
        >
          {!chat && <BsChatDots size={30} />}
          {chat && <BsFillChatDotsFill size={30} />}
        </div>
        {chat && <ChatScreen id={props.id} />}
        <div className="c-box-min"></div>
      </div>
      <div className="c-box-min"></div>
    </>
  );
}

export default FirebaseSearch;
