import React, { useState } from "react";
import Graph from "../../Home/Graph";
import HostedMarks from "./HostedMarks";

const MarksManager = () => {
  const [show, setShow] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  return (
    <div>
      <div className="w3-half">
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
      </div>
      {show && <Graph virtual={true} email={email} />}
      <div className="w3-half">
        <p>
          <label>Enter Subject</label>
          <br></br>
          <input
            type="text"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
        </p>
        <button
          onClick={() => {
            if (sub) {
              setShowSub(!showSub);
            } else {
            }
          }}
          className="w3-button w3-round w3-orange"
        >
          View Result
        </button>
      </div>
      {showSub && <HostedMarks sub={sub} />}
    </div>
  );
};

export default MarksManager;
