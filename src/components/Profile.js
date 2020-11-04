import React from "react";
import { FaUserCircle } from "react-icons/fa";
import TopBar from "./TopBar";
import firebase from "./firebase";
import { Link } from "react-router-dom";

const Profile = (props) => {
  async function doSignOut() {
    await firebase.logout();
  }

  if (!firebase.getCurrentUsername()) {
    // not logged in
    //alert('You need to be logged in')
    props.history.replace("/login");
    return null;
  }

  return (
    <>
      <TopBar bool={true} profile={true} txt="Profile" />
      <div className="mtop"></div>
      <FaUserCircle className="w3-text-green" size={150} />
      <br></br>
      <br></br>
      <b>{firebase.getCurrentUsername()}</b>
      <br></br>
      <br></br>
      <Link to="/login">
        <button onClick={doSignOut} className="w3-hide-large w3-red w3-button">
          LogOut
        </button>
      </Link>
    </>
  );
};

export default Profile;
