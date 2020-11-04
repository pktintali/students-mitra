import React, { useState, useEffect } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";
import FetchRoom from "./Game/FetchRoom";
import checkFull from "./Game/CheckFull";
import AddRoom from "./Game/AddRoom";
import firebase from "../../firebase";

export const GameSubContext = React.createContext();

function SingleSubject(props) {
  const [play, setPlay] = useState(false);
  const [topbar, setTopBar] = useState(true);
  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [id, setID] = useState("");
  const [k, setK] = useState(0);
  const [sub, setSub] = useState("");
  const [host, setHost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(false);

  const hidebar = () => {
    setTopBar(false);
  };

  const leave = () => {
    setGame(false);
    setPlay(false);
    props.click();
  };

  const setCloudSub = (s) => {
    setSub(s);
  };

  const setMeHost = () => {
    setHost(true);
    window.sessionStorage.setItem("host", host);
  };

  const startGame = () => {
    setGame(true);
    setPlay(false);
  };

  const playMode = () => {
    setPlay(true);
  };

  const loader = (
    <div style={{ display: "block" }} className="w3-modal">
      <div className="w3-modal-content w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4">
        <div style={{ height: "30px" }}></div>
        <h4>Checking Room Info....</h4>
        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );

  async function doEntry() {
    await AddRoom(id, firebase.getCurrentUsername(), "p");
  }

  async function checkRoom(creation) {
    //alert(await CheckFull(id,'already'))
    if ((await checkFull(id, "invalid")) === 1 && !creation) {
      setLoading(false);
      alert("Invalid Room ID");
      return;
    } else if ((await checkFull(id, "full")) === 0 && !creation) {
      setLoading(false);
      alert("Room is Full");
      return;
    } else if ((await checkFull(id, "already")) === 1 && creation) {
      setLoading(false);
      alert("Already Exist");
      return;
    } else {
      if (!creation) {
        await doEntry();
        window.sessionStorage.setItem("id", id);
        setLoading(false);
        setCreate(false);
        setJoin(true);
      } else {
        AddRoom(id, firebase.getCurrentUsername(), "create");
        setLoading(false);
        setCreate(true);
      }
    }
  }

  const handleJoin = () => {
    setLoading(true);
    checkRoom(false);
  };

  const createRoom = () => {
    setLoading(true);
    checkRoom(true);
  };

  const back = () => {
    setJoin(false);
  };

  if (!play) {
    return (
      <>
        <div className="mtop"></div>
        <div>
          {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
          {topbar && <div className="mtop"></div>}
          <GameSubContext.Provider value={sub}>
            <SubjectList
              s={sub}
              i={k}
              gameid={id}
              host={host}
              game={game}
              click={props.click}
              hidebar={hidebar}
              id={props.id}
              text="Select any one"
            />
          </GameSubContext.Provider>
          <br></br>
          <p></p>
          {firebase.getCurrentUsername() && topbar && !game && (
            <button
              className="w3-button w3-green w3-tiny w3-round"
              onClick={playMode}
            >
              Play with Friends
            </button>
          )}
          <p></p>
          <br></br>
          <div className="mbot"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mtop"></div>
        <div>
          {loading && loader}
          {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
          {topbar && <div className="mtop"></div>}
          <h2>Play Mode</h2>
          {!join && <p>Enter Room ID</p>}
          {!join && (
            <input
              type="text"
              placeholder="Room ID"
              value={id}
              onChange={(e) => setID(e.target.value)}
            ></input>
          )}
          {!join && <button onClick={handleJoin}>Join</button>}
          <br></br>
          <p></p>
          {!join && <button onClick={createRoom}>Create Room</button>}
          {join && (
            <FetchRoom
              setSub={setCloudSub}
              setHost={setMeHost}
              leave={leave}
              start={startGame}
              id={id}
              back={back}
            />
          )}
          {create && (
            <div className="w3-panel w3-pale-green">
              <b>Room Creted Successfully</b>
            </div>
          )}
          {create && <h3>Room ID = {id}</h3>}
          {create && <p>Enter ID and Join</p>}
          <div className="mbot"></div>
        </div>
      </>
    );
  }
}

export default SingleSubject;
