import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaHome, FaBookReader, FaBong, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import firebase from "./firebase";

function Nav() {
  const { pathname } = useLocation();

  const [clse, sce] = useState("w3-text-grey");
  const [clsd, scd] = useState("w3-text-grey");
  const [clsq, scq] = useState("w3-text-grey");

  const [selectedHome, setSelectedHome] = useState("w3-white");
  const [selectedTest, setSelectedTest] = useState("w3-red");
  const [selectedExplore, setSelectedExplore] = useState("w3-red");

  const [sizee, sete] = useState("22");
  const [sized, setd] = useState("28");
  const [sizeq, setq] = useState("22");

  const updateMenuE = () => {
    sce("w3-text-red");
    scd("w3-text-grey");
    scq("w3-text-grey");

    sete("28");
    setd("22");
    setq("22");

    setSelectedExplore("w3-white");
    setSelectedTest("w3-red");
    setSelectedHome("w3-red");
  };

  const updateMenuD = () => {
    sce("w3-text-grey");
    scd("w3-text-red");
    scq("w3-text-grey");

    sete("22");
    setd("28");
    setq("22");

    setSelectedExplore("w3-red");
    setSelectedTest("w3-red");
    setSelectedHome("w3-white");
  };

  const updateMenuQ = () => {
    sce("w3-text-grey");
    scd("w3-text-grey");
    scq("w3-text-red");

    sete("22");
    setd("22");
    setq("28");

    setSelectedExplore("w3-red");
    setSelectedTest("w3-white");
    setSelectedHome("w3-red");
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
      <nav className="w3-hide-small w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <Link
            onClick={updateMenuD}
            to="/"
            className={` ${selectedHome}  w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white`}
          >
            Dashboard
          </Link>
          <Link
            onClick={updateMenuE}
            to="/explore"
            className={` ${selectedExplore}  w3-bar-item w3-button w3-padding-large w3-hover-white`}
          >
            Explore
          </Link>
          <Link
            onClick={updateMenuQ}
            to="/test"
            className={` ${selectedTest}  w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white`}
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
              className={`w3-right w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white`}
            >
              LogOut
            </Link>
          )}
          {firebase.getCurrentUsername() && (
            <Link
              to="./profile"
              className="w3-right w3-bar-item w3-hover-white w3-button w3-circle w3-padding-large"
            >
              <FaUser size={20} />
            </Link>
          )}
        </div>
      </nav>

      <div class="w3-bottom w3-hide-large w3-hide-medium w3-card">
        <nav className="w3-row">
          <Link
            onClick={updateMenuE}
            className="w3-col w3-white no-td  w3-border-bottom w3-hover-border-red"
            to="/explore"
          >
            <div className={`icon-nav ${clse}`}>
              <FaBookReader size={sizee} />
            </div>
            <div className="nav-m">Explore</div>
          </Link>
          <Link
            onClick={updateMenuD}
            className="w3-col w3-white no-td w3-border-bottom  w3-hover-border-red"
            to="/"
          >
            <div className={`icon-nav ${clsd}`}>
              <FaHome size={sized} />
            </div>
            <div className="nav-m">Home</div>
          </Link>
          <Link
            onClick={updateMenuQ}
            className="w3-col w3-white no-td w3-border-bottom  w3-hover-border-red"
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
