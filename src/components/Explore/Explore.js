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
import ReactPlayer from 'react-player/youtube'

toast.configure();
function Explore() {
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
        await firebase.addPost({
          text: text,
          date: date,
          time: time,
          author: author,
          authorId: authorId,
          image: img,
          key:currentdate.getTime()
        });
      } else {
        await firebase.addPost({
          text: text,
          date: date,
          time: time,
          author: author,
          authorId: authorId,
          key:currentdate.getTime()
        });
      }
      setText("");
      setIsImage(false);
    } catch (e) {
      alert(e);
    }
  }

  const setInput = (e) => {
    setText(e.target.value);
    // if(!text){
    //   setImage(false)
    // }
  };

  return (
    <>
      <TopBar txt="Explore" bool={false} />
      <div className="mtop"></div>
      {firebase.getCurrentUsername() && (
        <div className="w3-padding">
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
                    src={cameraPlaceholder}
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
            <div className="w3-hide-small">
              <textarea
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
                className={`w3-button w3-green w3-hide-large ${
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
                <div className="w3-padding  w3-panel w3-card w3-pale-blue">
                  <div className="touch">
                    <p style ={{whiteSpace:'pre-line'}} className="w3-left-align">{text}</p>
                    <img
                      alt="post image"
                      src={cameraPlaceholder}
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
                <div className="mbot"></div>
                <div className="c-box-xmin"> </div>
              </div>
            )}
          </div>
          <div className="w3-third">
            {!text && <p></p>}
            {text && (
              <button
                style={{ marginTop: 30 }}
                onClick={sendPost}
                className={`w3-button w3-green w3-hide-medium w3-hide-small ${
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

      {!text && firebase.getCurrentUsername()&&(
        <div className="w3-row-padding">
          {posts &&
            posts.map((post) => {
              return <PostCard key ={post.key} post={post} />;
            })}
        </div>
      )}
      {
        !firebase.getCurrentUsername()&&!visible&&<div className='w3-hide-small w3-hide-medium w3-display-middle'>
          <h1>Have a quick tour</h1>
          <ReactPlayer light height={400} width={720} controls url='https://www.youtube.com/watch?v=hLQXsF23NBQ'/>
          </div>
      }
      {
        !firebase.getCurrentUsername()&&!visible&&<div className='w3-hide-large w3-display-middle'>
          <h1>Have a quick tour</h1>
          <ReactPlayer light height={160} width={300} controls url='https://www.youtube.com/watch?v=hLQXsF23NBQ'/>
          </div>
      }
      {!visible && (
        <div onClick={display} style={{ height: "50px", width: "300px" }}></div>
      )}
      {visible && <Schedule />}
      <div className="mbot"></div>
    </>
  );
}

export default Explore;
