import React, { useState } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";
import FetchRoom from "./Game/FetchRoom";
import checkFull from "./Game/CheckFull";
import AddRoom from "./Game/AddRoom";
import firebase from "../../firebase";

export const GameSubContext = React.createContext();

function SingleSubject(props) {
  //const [play, setPlay] = useState();
  const [topbar, setTopBar] = useState(true);
  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [id, setID] = useState("");
  const [sub, setSub] = useState("");
  const [host, setHost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(false);
  const [leval,setLeval] = useState()
  const hidebar = () => {
    setTopBar(false);
  };

  async function leave(){
    setGame(false);
    //setPlay(false);
    props.click();
    await AddRoom(
      id,
      firebase.getCurrentUserEmail(),
      "delete",
    );
    
  };
  
  const setCloudSub = (s) => {
    setSub(s);
  };

  const setTheLeval=(leval)=>{
    setLeval(leval);
  };

  const setMeHost = () => {
    setHost(true);
  };

  const startGame = () => {
    setGame(true);
    //setPlay(false);
  };

  const loader = (
    <div style={{ display: "block" }} className="w3-modal">
      <div
        style={{ maxWidth: "350px" }}
        className="w3-modal-content w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4"
      >
        <div style={{ height: "30px" }}></div>
        <h4>Checking Room Info....</h4>
        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );

  async function doEntry() {
    await AddRoom(
      id,
      firebase.getCurrentUserEmail(),
      "p",
      firebase.getCurrentUsername()
    );
  }

  async function checkRoom(creation) {
   // alert(await checkFull(id, "full"));
    if ((await checkFull(id, "invalid")) === 1 && !creation) {
      setLoading(false);
      alert("Invalid Room ID");
      return;
    } 
    else if ((await checkFull(id, "full")) > 3 && !creation) {
      setLoading(false);
      alert("Room is Full");
      return;
    } 
    else if ((await checkFull(id, "already")) === 1 && creation) {
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
        AddRoom(id, firebase.getCurrentUserEmail(), "create");
        setLoading(false);
        setCreate(true);
        // handleJoin();
      }
    }
  }

  const handleJoin = () => {
    if(id){
    setLoading(true);
    checkRoom(false);}else{
      alert('Invalid Id')
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function createRoom() {
    if(id){
    setLoading(true);
    await checkRoom(true);
    await sleep(2000);}else{
      alert('Invalid Id')
    }
    //checkRoom(false)
  }

  const back = () => {
    setJoin(false);
  };

  if (!props.game || game) {
    return (
      <>
        <div className="mtop"></div>
        <div>
          {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
          {topbar && <div className="mtop"></div>}
          <GameSubContext.Provider value={sub}>
            <SubjectList
              s={sub}
              gameid={id}
              host={host}
              game={game}
              click={props.click}
              hidebar={hidebar}
              id={props.id}
              text="Select any one"
              leval={leval}
            />
          </GameSubContext.Provider>
          <br></br>
          <p></p>
         
          <p></p>
          <br></br>
          <div className="mbot"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className = 'w3-animate-left'>
          {loading && loader}
          {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
          {topbar && <div className="mtop"></div>}
          {!join&&<h2>Play Mode</h2>}
          {!join && <p>Join/Create Room</p>}
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
              setLeval = {setTheLeval}
            />
          )}
          {create && (
            <div className="w3-panel w3-pale-green">
              <b>Room Created Successfully</b>
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
