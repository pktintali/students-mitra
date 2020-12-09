import React, { useState, useRef } from "react";
import UsePost from "./UsePost";
import "../../App.css";
import TopBar from "../TopBar";
import Schedule from "./schedule";
import PostCard from "./PostCard";
import firebase from "../firebase";
import cameraPlaceholder from "../../camera-placeholder.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import LoadingScreen from "../LoadingScreen";

toast.configure();
function Explore() {
  const dark = useSelector((state) => state.theme.dark);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const posts = UsePost();

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  function handleUpload() {
    if (image) {
      toast.info("Uploading...", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 10000,
      });
      // alert('Uploading');
      firebase.savePostImage(image);
    } else {
      // alert("Select Some Image");
      toast.error("Select Some Image", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
  const handleImageUpload = (e) => {
    handleFile(e);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    setIsImage(true);
  };

  const display = () => {
    setVisible(true);
  };

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  async function sendPost() {
    const img = isImage ? await firebase.getPostImage(image) : "";

    var currentdate = new Date();
    var date =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear();
    var time = formatAMPM(currentdate);
    var author = firebase.getCurrentUsername();
    var authorId = firebase.getCurrentUserEmail();
    try {
      if (isImage) {
        await firebase.addPost(
          {
            text: text,
            date: date,
            time: time,
            author: author,
            authorId: authorId,
            image: img,
            key: currentdate.getTime(),
          },
          currentdate.getTime().toString()
        );
      } else {
        await firebase.addPost(
          {
            text: text,
            date: date,
            time: time,
            author: author,
            authorId: authorId,
            key: currentdate.getTime(),
          },
          currentdate.getTime().toString()
        );
      }
      setText("");
      setIsImage(false);
    } catch (e) {
      alert(e);
    }
  }

  const sendEmailVerificationLink = () => {
    try {
      firebase.sendEmailVerificationLink();
      toast.success("Verification link Send To Your Email", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      });
    } catch (e) {
      toast.error("Could/'t Send Email Verification Link", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      });
    }
    // window.location.reload();
  };

  const setInput = (e) => {
    setText(e.target.value);
    // if(!text){
    //   setImage(false)
    // }
  };

  return (
    <>
      <Helmet>
        <title>StudentMitra Explore feeds</title>
        <meta
          name="description"
          content="studentmitra explore feeds and posts by other user. education releated news and you can ask your questions"
        />
      </Helmet>
      <TopBar txt="Explore" bool={false} />
      {firebase.getCurrentUsername() && (
        <div className="w3-padding">
          {!firebase.isUserVerified() && (
            <div>
              <i>⚠️Your Email is Not Verified. So You Can't Post Anything</i>
              <button
                className="w3-margin w3-button w3-small w3-round-xxlarge w3-green"
                onClick={sendEmailVerificationLink}
              >
                Verify
              </button>
            </div>
          )}
          <div className="w3-third">
            {!text && <p></p>}
            {text && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{
                    display: "none",
                  }}
                />
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    border: "1px dashed black",
                    borderRadius: "50%",
                  }}
                  onClick={() => imageUploader.current.click()}
                >
                  <img
                    src={
                      dark
                        ? "https://www.heavydutydirect.ca/wp-content/uploads/2019/02/camera-placeholder.jpg"
                        : cameraPlaceholder
                    }
                    ref={uploadedImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <br></br>
                <button onClick={handleUpload}>Upload</button>
                <p></p>
              </div>
            )}
          </div>
          <div className="w3-third">
            {firebase.isUserVerified() ? (
              <div>
                <div className="w3-hide-small">
                  <textarea
                    style={{
                      backgroundColor: dark ? "#212121" : "",
                      color: dark ? "#f5f5f5" : "",
                    }}
                    type="text"
                    rows="4"
                    cols="70"
                    placeholder="Type Something..."
                    value={text}
                    onChange={setInput}
                  ></textarea>
                </div>
                <div className="w3-hide-large w3-hide-medium">
                  <textarea
                    style={{
                      backgroundColor: dark ? "#212121" : "",
                      color: dark ? "#f5f5f5" : "",
                    }}
                    type="text"
                    rows="4"
                    cols="30"
                    placeholder="Type Something..."
                    value={text}
                    onChange={setInput}
                  ></textarea>
                </div>
                <p className="w3-hide-large"></p>
                {text && (
                  <button
                    style={{ marginTop: 30 }}
                    onClick={sendPost}
                    className={`w3-button w3-round w3-green w3-hide-large ${
                      !text ? "w3-disabled" : ""
                    }`}
                    type="submit"
                  >
                    POST
                  </button>
                )}
                {text && (
                  <div>
                    <h3>Preview</h3>
                    <div className="w3-third">
                      <p> </p>
                    </div>
                    <div
                      style={{
                        maxHeight: 500,
                        backgroundColor: dark ? "#1F1F1F" : "",
                        boxShadow: dark ? "2px 2px 3px 2px #888888" : "",
                      }}
                      className={`w3-padding  w3-panel w3-card ${
                        dark ? "" : "w3-pale-blue"
                      }`}
                    >
                      <div className="touch">
                        <p
                          style={{
                            whiteSpace: "pre-line",
                            textOverflow: "clip",
                          }}
                          className="w3-left-align"
                        >
                          {text}
                        </p>
                        <img
                          alt="post image"
                          src={
                            dark
                              ? "https://www.heavydutydirect.ca/wp-content/uploads/2019/02/camera-placeholder.jpg"
                              : cameraPlaceholder
                          }
                          ref={uploadedImage}
                          style={{
                            maxHeight: 340,
                            maxWidth: 380,
                            display: isImage ? "" : "none",
                          }}
                        />
                      </div>
                      <br></br>
                      <br></br>
                    </div>

                    <div className="c-box-xmin"> </div>
                  </div>
                )}
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className="w3-third">
            {!text && <p></p>}
            {text && (
              <button
                style={{ marginTop: 30 }}
                onClick={sendPost}
                className={`w3-button w3-round w3-green w3-hide-medium w3-hide-small ${
                  !text ? "w3-disabled" : ""
                }`}
                type="submit"
              >
                POST
              </button>
            )}
          </div>
        </div>
      )}

      {!text && firebase.getCurrentUsername() && posts && posts.length > 0 ? (
        <div className="w3-row-padding">
          {posts &&
            posts.map((post) => {
              return <PostCard key={post.key} post={post} />;
            })}
        </div>
      ) : (
        !text && firebase.getCurrentUsername() && <LoadingScreen />
      )}
      {!text &&
        firebase.getCurrentUsername() &&
        firebase.isUserVerified() &&
        posts &&
        posts.length > 0 && (
          <div className="w3-padding-large w3-right">
            <Link
              to="/feedback"
              className="w3-border-red w3-button w3-round-large w3-border"
            >
              Feedback/Report Bug
            </Link>
          </div>
        )}
      {!firebase.getCurrentUsername() && !visible && (
        <div className="w3-hide-small w3-hide-medium w3-display-middle">
          <h1>Have a quick tour</h1>
          <ReactPlayer
            height={400}
            width={720}
            controls
            url="https://youtu.be/tsfKferlvRY"
          />
        </div>
      )}
      {!firebase.getCurrentUsername() && !visible && (
        <div className="w3-hide-large w3-display-middle">
          <h1>Have a quick tour</h1>
          <ReactPlayer
            light
            height={180}
            width={350}
            controls
            url="https://youtu.be/tsfKferlvRY"
          />
        </div>
      )}
      {!visible && (
        <div onClick={display} style={{ height: "50px", width: "300px" }}></div>
      )}
      {visible && <Schedule />}
    </>
  );
}

export default Explore;
