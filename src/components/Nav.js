import React, { useState, useEffect } from "react";
import "../App.css";
import "./switchStyle.css";
import { Link } from "react-router-dom";
import { FaHome, FaBookReader, FaBong, FaUser, FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../redux";

function Nav() {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const usermini = window.sessionStorage.getItem("dpmin");
  const [clse, sce] = useState("w3-text-grey");
  const [clsd, scd] = useState("w3-text-grey");
  const [clsq, scq] = useState("w3-text-grey");

  const col1 = dark ? "" : "w3-red";
  const col2 = dark ? "w3-dark-gray" : "w3-white";

  const [sizee, sete] = useState("22");
  const [sized, setd] = useState("28");
  const [sizeq, setq] = useState("22");
  const setDarkTheme = () => {
    !dark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    dispatch(setDark());
  };

  const updateMenuE = () => {
    sce("w3-text-red");
    scd("w3-text-grey");
    scq("w3-text-grey");

    sete("28");
    setd("22");
    setq("22");
  };

  const updateMenuD = () => {
    sce("w3-text-grey");
    scd("w3-text-red");
    scq("w3-text-grey");

    sete("22");
    setd("28");
    setq("22");
  };

  const updateMenuQ = () => {
    sce("w3-text-grey");
    scd("w3-text-grey");
    scq("w3-text-red");

    sete("22");
    setd("22");
    setq("28");
  };

  async function doSignOut() {
    await firebase.logout();
    updateMenuD();
  }

  useEffect(() => {
    if (window.location.href.match("/explore")) {
      updateMenuE();
    } else if (window.location.href.match("/test")) {
      updateMenuQ();
    } else {
      updateMenuD();
    }
  }, [pathname]);

  return (
    <>
      <nav
        style={{ zIndex: 999 }}
        className="w3-hide-small w3-hide-medium w3-top"
      >
        <div
          style={{ backgroundColor: dark ? "#242526" : "" }}
          className={`w3-bar ${
            dark ? "" : col1
          } w3-card w3-left-align w3-large`}
        >
          <Link
            onClick={updateMenuD}
            to="/"
            className={`${
              window.location.href.endsWith("/")
                ? dark
                  ? "w3-dark-gray"
                  : "w3-white"
                : ""
            }  w3-bar-item w3-button w3-hide-medium w3-hide-small w3-padding-large ${
              dark ? "w3-hover-dark-gray" : "w3-hover-white"
            }`}
          >
            {firebase.getCurrentUsername() ? "Dashboard" : "Login"}
          </Link>
          <Link
            onClick={updateMenuE}
            to="/explore"
            className={`${
              window.location.href.match("/explore")
                ? dark
                  ? "w3-dark-gray"
                  : "w3-white"
                : ""
            }  w3-bar-item w3-button w3-padding-large ${
              dark ? "w3-hover-dark-gray" : "w3-hover-white"
            }`}
          >
            Explore
          </Link>
          <Link
            onClick={updateMenuQ}
            to="/test"
            className={`${
              window.location.href.match("/test")
                ? dark
                  ? "w3-dark-gray"
                  : "w3-white"
                : ""
            }  w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large ${
              dark ? "w3-hover-dark-gray" : "w3-hover-white"
            }`}
          >
            Test
          </Link>
          <div className="w3-bar-item" style={{ width: "250px" }}></div>
          {firebase.getCurrentUsername() && (
            <div className="w3-padding-large w3-bar-item">
              Welcome {firebase.getCurrentUsername()}
            </div>
          )}

          {firebase.getCurrentUsername() && (
            <Link
              onClick={doSignOut}
              to="/login"
              className={`w3-right w3-bar-item w3-button w3-hide-small w3-hide-medium w3-padding-large ${
                dark ? "w3-hover-dark-gray" : "w3-hover-white"
              }`}
            >
              LogOut
            </Link>
          )}
          {firebase.getCurrentUsername() && (
            <Link
              to="/profile"
              className={
                usermini
                  ? "w3-right w3-hover-white w3-bar-item w3-circle w3-padding"
                  : "w3-right w3-hover-white w3-bar-item w3-circle w3-padding-large"
              }
            >
              {!usermini && <FaUser size={20} />}
              {usermini && <img src={usermini} className="mini-dpcircle" />}
            </Link>
          )}
          {firebase.getCurrentUsername() && (
            <Link
              to="/notifications"
              className={
                "w3-right w3-hover-white w3-bar-item w3-circle w3-padding-large"
              }
            >
              <FaBell size={20} />
            </Link>
          )}
          <div
            title="Dark Mode"
            className={`w3-right w3-bar-item w3-hide-small w3-hide-medium`}
          >
            <label className="switch">
              <input type="checkbox" onChange={setDarkTheme} checked={dark} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </nav>

      <div style={{ zIndex: 999 }} className="w3-bottom w3-hide-large w3-card">
        <nav className="w3-row">
          <Link
            style={{ backgroundColor: dark ? "#242526" : "" }}
            onClick={updateMenuE}
            className={`w3-col ${
              dark ? "" : "w3-white"
            } no-td  w3-border-bottom w3-hover-border-red`}
            to="/explore"
          >
            <div className={`icon-nav ${clse}`}>
              <FaBookReader size={sizee} />
            </div>
            <div className="nav-m">Explore</div>
          </Link>
          <Link
            style={{ backgroundColor: dark ? "#242526" : "" }}
            onClick={updateMenuD}
            className={`w3-col ${
              dark ? "" : "w3-white"
            } no-td w3-border-bottom  w3-hover-border-red`}
            to="/"
          >
            <div className={`icon-nav ${clsd}`}>
              <FaHome size={sized} />
            </div>
            <div className="nav-m">Home</div>
          </Link>
          <Link
            style={{ backgroundColor: dark ? "#242526" : "" }}
            onClick={updateMenuQ}
            className={`w3-col ${
              dark ? "" : "w3-white"
            } no-td w3-border-bottom  w3-hover-border-red`}
            to="/test"
          >
            <div className={`icon-nav ${clsq}`}>
              <FaBong size={sizeq} />
            </div>
            <div className="nav-m">Test</div>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
