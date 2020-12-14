import React, { useState, useEffect } from "react";
import AdminManager from "./AdminManager";
import firebase from "../firebase";
import Axios from "axios";

const Admins = (props) => {
  const [key, setKey] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [config, setConfig] = useState();
  useEffect(() => {
    const data = Axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1zMBEPreSaixiC3XNU5sHTWUD4kgoFzh7m-PPHMGA6nY/values/main?key=AIzaSyBHa8gIZFiDDGmSUKiDPBn6I-aDt6e0IHc`
    )
      .then((res) => {
        setConfig(res.data.values);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });

    return () => data;
  }, []);

  if (!firebase.getCurrentUsername()) {
    alert("You need to be logged in");
    props.history.replace("/login");
    return null;
  }

  async function handleLogin() {
    if (config && key === config[1][0]) {
      if (config[1][1] === "1") {
        setLoggedIn(true);
      } else {
        alert("Admin mode is currently not active");
      }
    } else {
      alert("Wrong key! Don't try to be Admin 👿");
    }
  }
  return !loggedIn ? (
    <>
      <div className="w3-display-middle">
        <label>Enter Admin Key</label>
        <br></br>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  ) : (
    <AdminManager />
  );
};

export default Admins;
