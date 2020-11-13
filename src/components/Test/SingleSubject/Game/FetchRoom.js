import React, { useState, useEffect } from "react";
import checkFull from "./CheckFull";
import FirebaseSearch from "./FirebaseSearch";
import firebase from "../../../firebase";
function FetchRoom(props) {
  window.sessionStorage.setItem("id", props.id);
  const [host, setHost] = useState("");
  const [sub, setSub] = useState();
  const [leval,setLeval] = useState()
  async function getData() {
    setHost(await checkFull(props.id, "getHost"));

    setSub(await checkFull(props.id, "getSub"));

    setLeval(await checkFull(props.id, "leval"))
    props.setSub(sub);
    props.setLeval(leval);
  }

  useEffect(() => {
   getData();
  }, []);

  if (sub !== 0&&sub!=undefined&&leval!=undefined) {
    props.start();
  }

  const userReady = () => {
    getData();
  };

  const leaveGame = () => {
    props.leave();
  };

  const getStatus = () => {
      if (host == firebase.getCurrentUserEmail()) {
        props.setHost();
      // }
      }
      return (
        <>
          <FirebaseSearch
            userReady={userReady}
            id={props.id}
            start={props.start}
            leaveGame={leaveGame}
            setLeval = {props.setLeval}
          />
        </>
      );
    
  };
  return getStatus();
}

export default FetchRoom;
