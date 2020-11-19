import React,{useState,useEffect} from "react";
import "../App.css";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "./firebase";

function TopBar(props) {

  const [userminidp,setUserMiniDP] = useState();
  const usermini = window.sessionStorage.getItem("dpmin");

  useEffect(() => {
     !usermini&&firebase.getCurrentUsername()&&firebase.getDpImage().then(setUserMiniDP)
      userminidp&&window.sessionStorage.setItem("dpmin",userminidp);
  }, [userminidp]);

  const doClick = () => {
    if (props.profile) {
      window.history.back()
    } else {
      props.click()
    }
  };

  return (
    <>
      <div style = {{zIndex:999}} className="preventSelection w3-red w3-hide-large w3-top w3-container w3-hide-large w3-card">
        {props.bool && (
          <button
            onClick={doClick}
            className="icon-bar  w3-left w3-button w3-red"
          >
            <FaArrowLeft size="20" />
          </button>
        )}
        <div></div>
        <h3 className="w3-left">{props.txt}</h3>
        {!props.profile&&firebase.getCurrentUsername()&& (
          
          <Link
            style={{marginRight:'-15px'}} 
            to="./profile"
            className={usermini?"w3-right w3-hover-white w3-button w3-circle w3-padding":"w3-right w3-hover-white w3-button w3-circle w3-padding-large"}
          >
            {!usermini&&<FaUser size={25} />}
            {usermini&&<img src ={usermini} className='mini-dpcircle'/>}
          </Link>
        )}
      </div>
    </>
  );
}

export default TopBar;
