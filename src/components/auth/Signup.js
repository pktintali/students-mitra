import React, { useState,} from "react";
import signinLogo from "../../signinLogo.png";
import TopBar from "../TopBar";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import LoadingScreen from "../LoadingScreen";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

toast.configure();
function SignupPage(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [loading, setLoading] = useState(false);

  async function signup(e) {
    setLoading(true);
    e.preventDefault();
    if(password!==password2){
      toast.error('Password did not match with first',{position:toast.POSITION.BOTTOM_RIGHT})
      setLoading(false);
      return
    }
    try {
      await firebase.register(userName, userEmail, password);
      await firebase.updateProfile({
        name: userName,
        email: userEmail,
      });
      setLoading(false);
      props.history.replace("/");
    } catch (e) {
      // alert(e.message);
      toast.error(e.message,{position:toast.POSITION.BOTTOM_RIGHT})
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
    <Helmet>
        <title>SignUp for Students-Mitra</title>
        <meta
          name="description"
          content="students-mitra SignUp page. student mitra is online subject knowledge testing platform."
        />
      </Helmet>
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
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                ></input>
              </p>
              <br></br>
              <button onClick={signup} className="w3-block w3-button w3-red">
                Sign up
              </button>
              <br></br>
              <Link to="/login" className="no-td">
                <button className="w3-block w3-button w3-red">
                  Already Account Login
                </button>
              </Link>
              <p></p>
            </form>
          </div>
          <div className="c-box-min"></div>
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
        <div className="c-box-min"></div>
      </div>
      <div className="c-box-min"></div>
    </>
  ) : (
    <LoadingScreen />
  );
}

export default SignupPage;
