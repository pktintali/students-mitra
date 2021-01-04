import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SubjectCard = (props) => {
  const dark = useSelector((state) => state.theme.dark);
  return (
    <Link to={"/learning/" + props.sub} className="no-td">
      <div
        style={{
          backgroundColor: dark ? "#1F1F1F" : "",
          boxShadow: dark ? "1px 1px 3px 1px #888888" : "",
        }}
        className={`pointer ${
          dark ? "w3-hover-dark-gray" : "w3-hover-red"
        } w3-hover-shadow w3-card w3-round`}
      >
        <div
          style={{ paddingTop: 40, paddingBottom: 40 }}
          //   onClick={props.click}
        >
          <h2>{props.sub}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
