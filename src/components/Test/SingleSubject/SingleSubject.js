import React, { useState } from "react";
import "./style.css";
import TopBar from "../../TopBar";
import SubjectList from "../SubjectList";
import FetchRoom from "./Game/FetchRoom";
import checkFull from "./Game/CheckFull";
import AddRoom from "./Game/AddRoom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

toast.configure();
export const GameSubContext = React.createContext();

function SingleSubject(props) {
  //const [play, setPlay] = useState();
  const dark = useSelector((state) => state.theme.dark);
  const [topbar, setTopBar] = useState(true);
  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [id, setID] = useState("");
  const [sub, setSub] = useState("");
  const [host, setHost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(false);
  const [leval, setLeval] = useState();
  const [bg, setBg] = useState(true);
  const hidebar = () => {
    setTopBar(false);
  };

  async function leave() {
    setGame(false);
    //setPlay(false);
    props.click();
    await AddRoom(id, firebase.getCurrentUserEmail(), "delete");
  }

  const setCloudSub = (s) => {
    setSub(s);
  };

  const setTheLeval = (leval) => {
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
        style={{ maxWidth: "350px", zIndex: 999999 }}
        className={` ${
          dark ? "w3-black" : "w3-white"
        } w3-modal-content w3-padding w3-border ${
          dark ? "w3-border-brown" : "w3-border-red"
        } w3-animate-zoom w3-padding w3-card-4`}
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
      // alert("Invalid Room ID");
      toast.error("Invalid Room ID", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      return;
    } else if ((await checkFull(id, "full")) > 3 && !creation) {
      setLoading(false);
      toast.error("Room is Full", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3500,
      });
      // alert("Room is Full");
      return;
    } else if ((await checkFull(id, "already")) === 1 && creation) {
      setLoading(false);
      // alert("Already Exist");
      toast.error("Already Exist", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      return;
    } else {
      if (!creation) {
        await doEntry();
        window.sessionStorage.setItem("id", id);
        setLoading(false);
        setCreate(false);
        setJoin(true);
        setBg(false);
      } else {
        AddRoom(id, firebase.getCurrentUserEmail(), "create");
        setLoading(false);
        setCreate(true);
        // handleJoin();
      }
    }
  }

  const handleJoin = () => {
    if (id) {
      setLoading(true);
      checkRoom(false);
    } else {
      // alert('Invalid Id')
      toast.error("Invalid Id", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500,
      });
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function createRoom() {
    if (id) {
      setLoading(true);
      await checkRoom(true);
      await sleep(2000);
    } else {
      // alert('Invalid Id')
      toast.error("Invalid Id", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500,
      });
    }
    //checkRoom(false)
  }

  const back = () => {
    setJoin(false);
  };

  if (!props.game || game) {
    return (
      <>
        <Helmet>
          <title>Single Subject Test</title>
          <meta
            name="description"
            content="studentmitra single subject testpage. Test for single subject. here you can select any one subject"
          />
        </Helmet>
        <div>
          {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <title>Game Mode On Learning through fun</title>
          <meta
            name="description"
            content="welcom to game mode. #LearningthroughFun learning with fun play quizzes with your friends and host rooms. create and join room. challenge Your friend"
          />
        </Helmet>
        <div
          style={
            bg
              ? {
                  marginTop: "-10px",
                  marginBottom: "-70px",
                  color: "white",
                  width: "100%",
                  height: window.innerHeight,
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/57/ae/93/57ae93462971760386cadfe7195efef6.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  backgroundSize: "100% 100%",
                }
              : {}
          }
          className="w3-animate-zoom"
        >
          {!join && (
            <button
              onClick={props.click}
              className="w3-hide-small w3-hide-medium icon-bar  w3-left w3-button"
            >
              <FaArrowLeft size="20" />
            </button>
          )}
          <div
            style={{
              marginTop: !join ? "20px" : "",
              marginLeft: !join ? "33%" : "",
              marginRight: !join ? "33%" : "",
            }}
            className={`${
              bg ? "w3-left w3-border" : ""
            } w3-hide-small w3-hide-medium w3-padding-large`}
          >
            {loading && loader}
            {topbar && <TopBar txt="Test" click={props.click} bool={true} />}

            {!join && <h2>Welcome to Game Mode</h2>}

            {!join && <p className="w3-text-sand">Join/Create Room</p>}
            {!join && (
              <input
                className="w3-input"
                type="text"
                placeholder="Room ID"
                value={id}
                onChange={(e) => setID(e.target.value)}
              ></input>
            )}
            {!join && <br></br>}
            {!join && (
              <button className="w3-button w3-border" onClick={handleJoin}>
                Join
              </button>
            )}
            {!join && <br></br>}
            {!join && <p></p>}
            {!join && (
              <button className="w3-button w3-border" onClick={createRoom}>
                Create Room
              </button>
            )}
            {join && (
              <FetchRoom
                setSub={setCloudSub}
                setHost={setMeHost}
                leave={leave}
                start={startGame}
                id={id}
                back={back}
                setLeval={setTheLeval}
              />
            )}
            {create && (
              <div className="w3-panel w3-pale-green">
                <b>Room Created Successfully</b>
              </div>
            )}
            {create && <h3>Room ID = {id}</h3>}
            {create && <p>Share id with your friends</p>}
            {create && <p>Enter ID and Join</p>}
          </div>
          <div className={`${bg ? "" : ""} w3-hide-large`}>
            {loading && loader}
            {topbar && <TopBar txt="Test" click={props.click} bool={true} />}
            {!join && <h2>Welcome to Game Mode</h2>}

            {!join && <p className="w3-text-sand">Join/Create Room</p>}
            {!join && (
              <input
                className="w3-input"
                type="text"
                placeholder="Room ID"
                value={id}
                onChange={(e) => setID(e.target.value)}
              ></input>
            )}
            {!join && <br></br>}
            {!join && (
              <button className="w3-button w3-border" onClick={handleJoin}>
                Join
              </button>
            )}
            {!join && <br></br>}
            {!join && <p></p>}
            {!join && (
              <button className="w3-button w3-border" onClick={createRoom}>
                Create Room
              </button>
            )}
            {join && (
              <FetchRoom
                setSub={setCloudSub}
                setHost={setMeHost}
                leave={leave}
                start={startGame}
                id={id}
                back={back}
                setLeval={setTheLeval}
              />
            )}
            {create && (
              <div className="w3-panel w3-pale-green">
                <b>Room Created Successfully</b>
              </div>
            )}
            {create && <h3>Room ID = {id}</h3>}
            {create && <p>Share id with your friends</p>}
            {create && <p>Enter ID and Join</p>}
          </div>
        </div>
      </>
    );
  }
}

export default SingleSubject;
