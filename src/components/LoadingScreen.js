import React from "react";
import "../App.css";
import HashLoader	 from "react-spinners/HashLoader";

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
        <HashLoader		
              size={150}
              color={"#0CBB06"}
              loading={true}
            />
      </h1>
    </div>
  );
}

export default LoadingScreen;
