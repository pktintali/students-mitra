import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { BsChatDots, BsFillChatDotsFill } from "react-icons/bs";
import ChatScreen from "./ChatScreen";
import UsePlayers from "./UsePlayers";
import AddRoom from "./AddRoom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

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
  const dark = useSelector((state) => state.theme.dark);
  const [chat, setChat] = useState(false);
  const [defaultLeval, setDefaultLeval] = useState(null);
  const games = UseGame(props.id);
  const players = UsePlayers(props.id);
  // console.log(players);
  if (games[0] !== undefined && games[0].subject !== undefined) {
    props.userReady();
  }
  var user = firebase.getCurrentUserEmail();

  async function hostStart() {
    !defaultLeval && (await AddRoom(props.id, "Normal", "leval"));
    props.start();
  }

  async function setLeval(leval) {
    setDefaultLeval(leval);
    await AddRoom(props.id, leval, "leval");
    props.setLeval(leval);
  }

  const toogleChat = () => {
    chat ? setChat(false) : setChat(true);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Helmet>
        <title>{props.id}</title>
        <meta
          name="description"
          content="game room page. wait for other players to join. play with friends. learning with fun"
        />
      </Helmet>
      <div className="w3-third">
        <div className="w3-hide-small">
          {games[0] && games[0].host == user && (
            <form className="w3-container">
              <h2>Select Game Leval</h2>
              <p className="w3-padding">
                <input
                  className="w3-radio pointer"
                  type="radio"
                  name="leval"
                  value="Easy"
                  onChange={(e) => setLeval(e.target.value)}
                />
                <label> Easy</label>
              </p>
              <p className="w3-padding">
                <input
                  className="w3-radio pointer"
                  type="radio"
                  name="leval"
                  value="Normal"
                  onChange={(e) => setLeval(e.target.value)}
                />
                <label> Normal</label>
              </p>
              <p className="w3-padding">
                <input
                  className="w3-radio pointer"
                  type="radio"
                  name="leval"
                  value="Hard"
                  onChange={(e) => setLeval(e.target.value)}
                />
                <label> Hard</label>
              </p>
            </form>
          )}
          <p></p>
        </div>
      </div>
      <div className="w3-third">
        <h3>
          Room id = <i>{props.id}</i>
        </h3>
        <table className="w3-table w3-striped w3-border">
          <tr className={`${dark ? "w3-brown" : "w3-pale-yellow"}`}>
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
              className="w3-right w3-button w3-round w3-green  w3-card"
              onClick={hostStart}
            >
              Start
            </button>
          )}
          <div
            onClick={toogleChat}
            className=" w3-hide-large w3-button w3-round w3-circle w3-text-green"
          >
            {!chat && <BsChatDots size={30} />}
            {chat && <BsFillChatDotsFill size={30} />}
          </div>
          {sub != undefined && (
            <button
              className="w3-center w3-button w3-round w3-green"
              // onClick={autoStart()}
            >
              Ready
            </button>
          )}
          <button
            className="w3-left w3-button w3-round w3-red  w3-card"
            onClick={props.leaveGame}
          >
            Leave
          </button>
        </div>
      </div>

      <div className="w3-third">
        <div
          onClick={toogleChat}
          className="w3-hide-small w3-hide-medium w3-button w3-circle w3-text-green"
        >
          {!chat && <BsChatDots size={30} />}
          {chat && <BsFillChatDotsFill size={30} />}
        </div>
        {chat && <ChatScreen id={props.id} />}
        <div className="c-box-min"></div>
      </div>
      <div className="w3-hide-large w3-hide-medium">
        {games[0] && games[0].host == user && (
          <form className="w3-container">
            <h2>Select Game Leval</h2>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Easy"
                onChange={(e) => setLeval(e.target.value)}
              />
              <label> Easy</label>
            </p>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Normal"
                onChange={(e) => setLeval(e.target.value)}
              />
              <label> Normal</label>
            </p>
            <p>
              <input
                className="w3-radio"
                type="radio"
                name="leval"
                value="Hard"
                onChange={(e) => setLeval(e.target.value)}
              />
              <label> Hard</label>
            </p>
          </form>
        )}
        <p></p>
      </div>
    </>
  );
}

export default FirebaseSearch;
