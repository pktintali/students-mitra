import React, { useState, useEffect } from "react";
import firebase from "../firebase";

import "../../App.css";
// import { FaRegThumbsUp, FaRegComment, FaShare } from "react-icons/fa";
function PostCard(props) {
  const [authorDp, setAuthorDp] = useState();

  useEffect(() => {

    firebase.getAuthorDp(props.post.authorId).then(setAuthorDp);
  }, []);

  return (
    <>
      <div className="w3-third">
        <div style={{height:500}} className="w3-padding  w3-panel w3-card w3-pale-blue">
          <div>
            <img
              alt="user logo"
              className="w3-left"
              style={{ borderRadius: "50%", width: "10%" }}
              src={
                authorDp
                  ? authorDp
                  : "https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg"
              }
            />
            <b className="w3">{props.post.author}</b>
            <i className="w3-small w3-right">
              {props.post.time}-{props.post.date}
            </i>
          </div>
          <br></br>
          <p></p>
          <div className="touch">
            <p className="w3-left-align">{props.post.text}</p>
            <div>
              {props.post.image && (
                <img
                  alt="post image"
                  style={{width:'100%',height:'100%', maxHeight: 340, maxWidth: 380}}
                  className=""
                  src={props.post.image}
                />
              )}
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

{
  /* <br></br>
            <div className="w3-text-grey w3-margin w3-display-container w3-padding">
              <div
                style={{ width: "33.3%" }}
                className="w3-display-left w3-button"
              >
                <FaRegThumbsUp size={"25px"} />
                <br></br>
                <span>5M</span>
              </div>
              <div
                style={{ width: "33.3%" }}
                className="w3-button w3-display-middle"
              >
                <FaRegComment size={"25px"} />
                <br></br>
                <span>1M</span>
              </div>
              <div
                style={{ width: "33.3%" }}
                className="w3-button w3-display-right"
              >
                <FaShare size={"25px"} />
                <br></br>
                <span>200K</span>
              </div>
            </div> */
}
export default PostCard;
