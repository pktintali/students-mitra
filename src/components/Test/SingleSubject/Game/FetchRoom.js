import React, { useState, useEffect } from "react";
import checkFull from "./CheckFull";
import FirebaseSearch from "./FirebaseSearch";
import firebase from "../../../firebase";
import LoadingScreen from "../../../LoadingScreen";
function FetchRoom(props) {
  window.sessionStorage.setItem("id", props.id);
  const [host, setHost] = useState("");
  const [sub, setSub] = useState();
  const [loading, setLoading] = useState(true);

  async function getData() {
    setHost(await checkFull(props.id, "getHost"));
    //setSub(rows[i].sub)
    setSub(await checkFull(props.id, "getSub"));
    //alert(await checkFull(props.id,'getSub'))
    props.setSub(sub);
    //alert('Fetching sub')
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (sub !== 0&&sub!=undefined) {
    //alert('starting')
    props.start();
  }

  const userReady = () => {
    getData();
  };

  const leaveGame = () => {
    props.leave();
  };

  const getStatus = () => {
    
    if (loading) {
      return <LoadingScreen/>;
    } else {
      if (host == firebase.getCurrentUserEmail()) {
        props.setHost();
      }

      return (
        <>
          <FirebaseSearch
            userReady={userReady}
            id={props.id}
            start={props.start}
            leaveGame={leaveGame}
          />
        </>
      );
    }
  };
  return getStatus();
}

export default FetchRoom;
