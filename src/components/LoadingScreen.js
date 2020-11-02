import React from "react";
import "../App.css";

function LoadingScreen() {
  return (
    <div className="full-height">
      <h1
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Loading.....
      </h1>
    </div>
  );
}

export default LoadingScreen;
