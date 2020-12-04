import React from "react";
import { useSelector } from "react-redux";

function RoundButton(props) {
  const dark = useSelector((state) => state.theme.dark);
  return (
    <>
      <div
        style={{
          backgroundColor: dark ? "#1F1F1F" : "",
          boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
        }}
        className={`pointer w3-hide-small w3-hide-medium ${
          dark ? "w3-hover-dark-gray" : "w3-hover-red"
        } w3-hover-shadow w3-card w3-round`}
      >
        <div
          style={{ paddingTop: 40, paddingBottom: 40 }}
          onClick={props.click}
        >
          <h3>{props.txt}</h3>
          {props.tag && <span className=" w3-tag w3-green">New!</span>}
        </div>
      </div>
      <div
        style={{
          backgroundColor: dark ? "#1F1F1F" : "",
          boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
        }}
        className={`pointer w3-hide-large ${
          dark ? "w3-hover-dark-gray" : "w3-hover-red"
        }  w3-hover-shadow w3-card w3-round`}
      >
        <div onClick={props.click} className="w3-padding">
          <h4>{props.txt}</h4>
          {props.tag && <span className="w3-tag w3-green">New!</span>}
        </div>
      </div>
    </>
  );
}

export default RoundButton;
