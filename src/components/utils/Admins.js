import React, { useState } from "react";
import AdminManager from "./AdminManager";

const Admins = () => {
  const [key, setKey] = useState("");
  const sKey = "4209211";
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    if (key === sKey) {
      setLoggedIn(true);
    } else {
      alert("Wrong key! Don't try to be Admin 👿");
    }
  };
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
