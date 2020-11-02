import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";

function UseGame(id) {
  const [game, setGames] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
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
  const games = UseGame(props.id);
  if (games[0] != undefined && games[0].subject != undefined) {
    props.userReady();
  }
  var user = window.sessionStorage.getItem("userName");

  function autoStart() {
    //props.userReady();
  }

  return (
    <>
      {games.map((game) => (
        <div>
          <table className="w3-table w3-striped">
            <tr>
              <th>Joined Players</th>
            </tr>
            <tr>
              <td className={`${user == game.p1 ? "w3-text-red" : ""}`}>
                {game.p1} {game.host == game.p1 && "(Host)"}
              </td>
            </tr>
            <tr>
              <td className={`${user == game.p2 ? "w3-text-red" : ""}`}>
                {game.p2} {game.host == game.p2 && "(Host)"}
              </td>
            </tr>
            <tr>
              <td className={`${user == game.p3 ? "w3-text-red" : ""}`}>
                {game.p3} {game.host == game.p3 && "(Host)"}
              </td>
            </tr>
            <tr>
              <td className={`${user == game.p4 ? "w3-text-red" : ""}`}>
                {game.p4} {game.host == game.p4 && "(Host)"}
              </td>
            </tr>
            <tr>
              <td>{game.subject}</td>
            </tr>
          </table>
          <br></br>
          <p></p>
          <div className="w3-panel w3-padding">
            {game.host == user && (
              <button
                className="w3-right w3-button w3-green"
                onClick={props.start}
              >
                Start
              </button>
            )}
            {sub != undefined && (
              <button
                className="w3-center w3-button w3-green"
                onClick={autoStart()}
              >
                Ready
              </button>
            )}
            <button
              className="w3-left w3-button w3-red"
              onClick={props.leaveGame}
            >
              Leave
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default FirebaseSearch;
