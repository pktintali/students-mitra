import React, { useState, useEffect } from "react";
import signinLogo from "../../signinLogo.png";
import TopBar from "../TopBar";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import LoadingScreen from "../LoadingScreen";

function SignupPage(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  async function signup(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await firebase.register(userName, userEmail, password);
      await firebase.updateProfile({
        name: userName,
        sec: "",
        branch: "",
        college: "",
        mobile: "",
        email: userEmail,
        dob: "",
        address: "",
        state: "",
        country: "",
      });
      await firebase.addField({tempi:0,i:0})
      setLoading(false);
      props.history.replace("/");
    } catch (e) {
      alert(e.message);
      setLoading(false);
    }

    if (userName) {
      window.sessionStorage.setItem("userName", userName);
      window.sessionStorage.setItem("loggedin", true);
      e.preventDefault();
    }
  }

  const myFormStyle = {
    //color:'#F8EFFB',
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
  };

  return !loading ? (
    <>
      <div style={myFormStyle}>
        <TopBar txt="Login" />
        <div className="mtop"></div>
        <div className="c-box-xmin"> </div>

        <div className="w3-animate-zoom w3-row w3-card-4 w3-margin w3-round-large">
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
                  className="w3-input w3-border"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <label className="w3-left">
                  <b>Confirmm Password</b>
                </label>
                <input
                  className="w3-input w3-border"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </p>
              <br></br>
              <button onClick={signup} className="w3-block w3-button w3-red">
                Register
              </button>
              <br></br>
              <Link to="/login" className="no-td">
                <button className="w3-block w3-button w3-red">
                  Already Account SignIn
                </button>
              </Link>
              <p></p>
            </form>
          </div>

          <div className="w3-half w3-hide-small">
            <div className="w3-center">
              <img
                style={{ width: "100%" }}
                src={signinLogo}
                alt="Signin Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <LoadingScreen />
  );
}

export default SignupPage;
