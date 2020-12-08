import React, { useState } from "react";
import signinLogo from "../../signinLogo.png";
import logo5 from "../../logo5.png";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import firebase from "../firebase";
import LoadingScreen from "../LoadingScreen";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

toast.configure();
function LoginPage(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [loading, setLoading] = useState(false);
  const [reset, setRest] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetSend, setResetSend] = useState(false);

  async function login(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await firebase.login(userEmail, password);
      //await firebase.updateProfile(profileData)
      setLoading(false);
      props.history.replace("/");
    } catch (e) {
      // alert(e.message);
      toast.error(e.message, { position: toast.POSITION.BOTTOM_RIGHT });
      setLoading(false);
    }
  }

  async function sendResetMail() {
    try {
      await firebase.sendPasswordResetEmail(userEmail);
      setResetSend(true);
    } catch (e) {
      setUserEmail("");
      toast.error(e.message, { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  const resetPopUP = () => {
    setRest(false);
    setResetSend(false);
  };
  const resetModal = (
    <div style={{ display: "block" }} className="w3-modal">
      <div
        style={{ maxWidth: "350px" }}
        className={`w3-modal-content ${
          dark ? "w3-dark-gray" : ""
        } w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4"`}
      >
        <h4>Reset Your Password</h4>
        {!resetSend && (
          <p>
            <label className="w3-left">
              <b>Enter Your Email</b>
            </label>
            <input
              style={{
                backgroundColor: dark ? "#313131" : "",
                color: dark ? "#f2f2f2" : "black",
              }}
              className="w3-border w3-input"
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
          </p>
        )}
        {resetSend && (
          <p>
            Pssword Reset Link Send To <b>{userEmail}</b>
          </p>
        )}
        {!resetSend && (
          <button onClick={sendResetMail} className="w3-block w3-button w3-red">
            Reset Password
          </button>
        )}
        <br></br>
        <button onClick={resetPopUP} className="w3-block w3-button w3-red">
          Close
        </button>
      </div>
    </div>
  );

  const myFormStyle = {
    //color:'#F8EFFB',
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "#ffffff",
  };

  return !loading ? (
    <>
      <Helmet>
        <title>Login to Studentmitra</title>
        <meta
          name="description"
          content="studentmitra login page. studentmitra is online subject knowledge testing platform."
        />
      </Helmet>
      {reset && resetModal}
      <div style={myFormStyle}>
        <TopBar txt="Login" />
        <div className="mtop"></div>
        <div className="c-box-xmin"> </div>

        <div
          className={`w3-animate-zoom w3-row w3-card-4 w3-margin w3-round-large`}
        >
          <div className="w3-half">
            <div className="w3-text-red" style={{ marginTop: "-30px" }}>
              <FaUserGraduate size="60" />
            </div>
            <form className="w3-container">
              <p>
                <label className="w3-left">
                  <b>Enter Your Name</b>
                </label>
                <br></br>
                <input
                  style={{
                    backgroundColor: dark ? "#313131" : "",
                    color: dark ? "#f2f2f2" : "black",
                  }}
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </p>
              <p>
                <label className="w3-left">
                  <b>Enter Your Email</b>
                </label>
                <input
                  style={{
                    backgroundColor: dark ? "#313131" : "",
                    color: dark ? "#f2f2f2" : "black",
                  }}
                  className="w3-border w3-input"
                  type="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </p>
              <p>
                <label className="w3-left">
                  <b>Enter Your Password</b>
                </label>
                <input
                  style={{
                    backgroundColor: dark ? "#313131" : "",
                    color: dark ? "#f2f2f2" : "black",
                  }}
                  className="w3-input w3-border"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <span
                  onClick={() => setRest(true)}
                  className={`w3-right ${
                    dark ? "w3-hover-dark-gray" : ""
                  } w3-btn`}
                >
                  Forgot Password ?
                </span>
              </p>

              <br></br>
              <button onClick={login} className="w3-block w3-button w3-red">
                Login
              </button>
              <br></br>
              <Link to="/signup" className="no-td">
                <button className="w3-block w3-button w3-red">
                  New User ? Sign Up
                </button>
              </Link>
              <p></p>
            </form>
          </div>
          <div className="w3-half w3-hide-small">
            <div className="w3-center">
              <img
                style={{ width: dark ? "50%" : "100%" }}
                src={dark ? logo5 : signinLogo}
                alt="Signin Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="w3-container w3-large w3-padding-large w3-red">
        Please Wait
      </div>
      <LoadingScreen />
    </>
  );
}

export default LoginPage;
