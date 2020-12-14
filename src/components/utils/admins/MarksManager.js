import React, { useState } from "react";
import Graph from "../../Home/Graph";

const MarksManager = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div>
      <p>
        <label>Enter Email Id</label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <button
        onClick={() => {
          if (email) {
            setShow(!show);
          } else {
          }
        }}
        className="w3-button w3-round w3-orange"
      >
        {show ? "Hide" : "View Virtual Data"}
      </button>
      {show && <Graph virtual={true} email={email} />}
    </div>
  );
};

export default MarksManager;
