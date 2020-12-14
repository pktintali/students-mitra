import React from "react";
import "../App.css";
import { FaArrowLeft, FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { useSelector } from "react-redux";
import { MdSettings } from "react-icons/md";
function TopBar(props) {
  const usermini = window.sessionStorage.getItem("dpmin");
  const dark = useSelector((state) => state.theme.dark);
  const doClick = () => {
    if (props.profile || props.settings || props.notify) {
      window.history.back();
    } else {
      props.click();
    }
  };

  return (
    <>
      <header
        style={{ zIndex: 99, backgroundColor: dark ? "#242526" : "" }}
        className={`preventSelection ${
          dark ? "" : "w3-red"
        } w3-hide-large w3-top w3-container w3-hide-large w3-card`}
      >
        {props.bool && (
          <button onClick={doClick} className="icon-bar  w3-left w3-button">
            <FaArrowLeft size="20" />
          </button>
        )}

        <h3 className="w3-left">{props.txt}</h3>
        {firebase.getCurrentUsername() &&
          !props.settings &&
          !props.notify &&
          props.profile && (
            <Link
              style={{ marginRight: "-18px", marginTop: 4 }}
              to="/settings"
              className="w3-right w3-circle w3-hover-white w3-button w3-small"
            >
              <MdSettings size={30} />
            </Link>
          )}
        {props.profile && !props.notify && (
          <Link
            style={{ marginTop: 6, marginRight: "-8px" }}
            to="/notifications"
            className="w3-right w3-circle w3-hover-white w3-button w3-small"
          >
            <FaBell size={30} />
          </Link>
        )}
        {!props.profile &&
          !props.settings &&
          !props.notify &&
          firebase.getCurrentUsername() && (
            <Link
              style={{ marginRight: "-15px" }}
              to="./profile"
              className={
                usermini
                  ? "w3-right w3-hover-white w3-button w3-circle w3-padding"
                  : "w3-right w3-hover-white w3-button w3-circle w3-padding-large"
              }
            >
              {!usermini && <FaUser size={25} />}
              {usermini && <img src={usermini} className="mini-dpcircle" />}
            </Link>
          )}
      </header>
    </>
  );
}

export default TopBar;
