import React from "react";
import "./style.css";
import TopBar from "../../TopBar";

function Questions3() {
  return (
    <>
      <TopBar txt="Time Remaining 10:00" bool={false} />
      <div className="mtop"></div>
      {/* <DataFetching /> */}
      <div className="w3-panel">
        <button className="w3-button w3-red">Submit</button>
      </div>
      <div className="mbot"></div>
    </>
  );
}

export default Questions3;
