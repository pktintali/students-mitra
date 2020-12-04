import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { FaPen } from "react-icons/fa";
import "../../App.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

toast.configure();
function PostCard(props) {
  const dark = useSelector((state) => state.theme.dark);
  const [authorDp, setAuthorDp] = useState();
  const [fullImg, setFullImg] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postText, setPostText] = useState(props.post.text);
  useEffect(() => {
    firebase.getAuthorDp(props.post.authorId).then(setAuthorDp);
  }, []);

  const deletePost = () => {
    firebase.deletePost(props.post.key);
    setEdit(false);
    toast.success("Deleted Successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const saveEdit = () => {
    firebase.addPost({
      text:postText
    },props.post.key)
    setEdit(false);
    toast.success("Updated Successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const imgModal = (
    <div
      className="w3-white w3-modal w3-animate-zoom"
      style={{
        display: "block",
        zIndex: 9999999,
      }}
    >
      {" "}
      <span
        onClick={() => setFullImg(false)}
        style={{ position: "fixed" }}
        className="w3-button w3-border w3-padding w3-text-red w3-display-topright"
      >
        X
      </span>
      <img
        style={{
          maxHeight: window.innerHeight - 100,
          maxWidth: window.innerWidth - 50,
          width: "auto",
        }}
        className="w3-modal-content"
        src={props.post.image}
      ></img>
    </div>
  );

  return (
    <>
      {fullImg && imgModal}
      {!fullImg && (
        <div className="w3-third">
          <div
            style={{ height: 500, backgroundColor: dark ? "#1F1F1F" : "",
            boxShadow: dark ? "1px 1px 3px 1px #888888" : "", }}
            className={`w3-padding  w3-panel w3-card ${dark?'':'w3-pale-blue'}`}
          >
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
            <div className="touch">
              <div style={{ maxHeight: 350, textOverflow: "ellipsis" }}>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className={`w3-left-align ${edit ? "w3-left" : ""}`}
                >
                  {!edit && props.post.text}
                  {edit && (
                    <textarea
                      type="text"
                      rows="6"
                      cols="40"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                    />
                  )}
                </p>
              </div>
              <br></br>
              {edit && (
                <div className="w3-conatiner">
                  <button
                    onClick={() => setEdit(false)}
                    className="w3-green w3-round-xxlarge w3-ripple w3-margin w3-button w3-tiny w3-border w3-left"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {edit && (
                <div className="w3-conatiner">
                  <button
                    onClick={saveEdit}
                    className="w3-green w3-round-xxlarge w3-ripple w3-margin w3-button w3-tiny w3-border w3-right"
                  >
                    Save
                  </button>
                </div>
              )}
              <div>
                {!edit && props.post.image && (
                  <img
                    onClick={() => setFullImg(true)}
                    alt="post image"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: 340,
                      maxWidth: 380,
                    }}
                    className=""
                    src={props.post.image}
                  />
                )}
              </div>
            </div>
            {props.post.authorId === firebase.getCurrentUserEmail() && !edit && (
              <div className="w3-conatiner">
                <button
                  onClick={() => setEdit(true)}
                  className=" w3-circle w3-margin w3-button w3-right"
                >
                  <FaPen />
                </button>
              </div>
            )}
            {edit && (
              <div className="w3-conatiner">
                <button
                  onClick={deletePost}
                  className=" w3-round-xxlarge w3-ripple w3-margin w3-button w3-red w3-tiny w3-border w3-felt"
                >
                  Delete
                </button>
              </div>
            )}

            <br></br>
            <br></br>
          </div>
        </div>
      )}
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
