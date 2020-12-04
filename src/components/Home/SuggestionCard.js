import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

function SuggestionCard(props) {
  const dark = useSelector((state) => state.theme.dark);
  return (
    <div
      style={{
        backgroundColor: dark ? "#2D2D2D" : "",
        minHeight: props.mini
          ? props.video
            ? 200
            : 100
          : props.video
          ? 560
          : 270,
      }}
      className={`${
        dark ? "w3-hover-brown" : "w3-hover-pale-yellow"
      } w3-round w3-padding w3-container w3-border ${
        dark ? "w3-border-blue-gray" : "w3-border-red"
      } w3-card-4`}
    >
      <h4>
        <b>Q. </b>
        {props.question}
      </h4>
      <h5>
        <b>Ans -</b>
        {props.ans}
      </h5>
      {props.reference && (
        <a
          style={{ textDecoration: "none" }}
          target="blank"
          href={props.reference}
        >
          <span
            style={{ fontSize: 18 }}
            className="w3-btn w3-round w3-padding-small w3-border w3-border-green w3-hover-white"
          >
            Learn in Detail ↗
          </span>
        </a>
      )}
      {props.video && (
        <div style={{ marginTop: 5, border: "solid red 2px" }}>
          <ReactPlayer
            light
            height={props.mini ? window.innerWidth / 2 : window.innerWidth / 4}
            width={
              props.mini ? window.innerWidth - 70 : window.innerWidth / 2 - 79
            }
            controls
            url={`https://youtu.be/${props.video}`}
          />
        </div>
      )}
    </div>
  );
}

export default SuggestionCard;
