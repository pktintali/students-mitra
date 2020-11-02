import React, { useState, useEffect } from "react";
import signinLogo from "../../signinLogo.png";
import TopBar from "../TopBar";
import { FaUserGraduate } from "react-icons/fa";
function LoginPage(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState("none");
  const [modalTxt, setModalTxt] = useState("");

  const modal = (
    <div style={{ display: display }} className="w3-modal">
      <div className="w3-modal-content w3-border w3-border-red w3-animate-top w3-padding w3-card-4">
        <h4>{modalTxt}</h4>
        <button onClick={() => setDisplay("none")}>0k Sorry</button>
      </div>
    </div>
  );

  const submit = (e) => {
    if (userName) {
      window.sessionStorage.setItem("userName", userName);
      window.sessionStorage.setItem("loggedin", true);
      e.preventDefault();
      props.doLogin();
    } else {
      alert("Invalid User Name");
      e.preventDefault();
    }
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    setModalTxt("Ab Kuchh Nhi Hone Wala Password Bhoole Ku 🙄");
    setDisplay("block");
  };

  const newUser = (e) => {
    e.preventDefault();
    setModalTxt("Kya Kar Rahe Ho Yar abhi tk account nahi banaya 🤣");
    setDisplay("block");
  };

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

  return (
    <>
      {modal}
      <div style={myFormStyle}>
        <TopBar txt="Login" />
        <div className="mtop"></div>
        <div className="c-box-xmin"> </div>

        <div className="w3-animate-zoom w3-row w3-card-4 w3-margin w3-round-large">
          <div className="w3-half">
            <div className="w3-text-red" style={{ marginTop: "-30px" }}>
              <FaUserGraduate size="60" />
            </div>
            <form onSubmit={submit} className="w3-container">
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
                <a
                  onClick={newUser}
                  href=""
                  className="w3-padding-small w3-text-blue w3-small w3-left"
                  style={{ textDecoration: "none" }}
                >
                  New User SignUP
                </a>
                <a
                  onClick={forgotPassword}
                  href=""
                  className="w3-padding-small w3-text-blue w3-small w3-right"
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password ?
                </a>
              </p>
              <br></br>
              <button className="w3-block w3-button w3-red">Login</button>
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
  );
}

export default LoginPage;
