import React, { useState } from "react";
import firebase from "../../firebase";
const AllNoti = (props) => {
  const noti = props.nf;
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const [modify, setModify] = useState(false);
  const [key, setKey] = useState("");
  const [btnText, setBtnText] = useState("");
  const [link, setLink] = useState("");
  const [to, setTo] = useState("");
  const [image, setImage] = useState("");
  var i = 1;

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  var date = new Date();
  const notiObj = {
    key: !modify ? date.getTime() : key,
    text: text,
    image: image,
    link: link,
    to: to,
    btnText: btnText,
    date:
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    time: formatAMPM(date),
  };

  const addNoti = () => {
    if (modify) {
      firebase.addNotification(notiObj, key);
    } else {
      firebase.addNotification(notiObj, date.getTime());
    }
    resetFields();
    setModify(false);
  };

  const resetFields = () => {
    setEdit(!edit);
    setBtnText("");
    setText("");
    setImage("");
    setLink("");
    setKey("");
    setTo("");
  };
  const editNotification = (o) => {
    setModify(true);
    setKey(o.key);
    setTo(o.to);
    setBtnText(o.btnText);
    setText(o.text);
    setImage(o.image);
    setLink(o.link);
    setEdit(true);
  };
  return (
    <>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          resetFields();
          setModify(false);
        }}
        className="w3-button w3-round w3-deep-orange"
      >
        {edit ? "Cancel" : "+ Add Notification"}
      </button>
      <h2>{edit ? "Add a New Notification" : "Listed Notifications"}</h2>
      {edit && (
        <div>
          <p>
            <label>Text*</label>
            <br></br>
            <textarea
              rows="3"
              cols="20"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </p>
          <p>
            <label>Image URL</label>
            <br></br>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </p>
          <p>
            <label>Button Text</label>
            <br></br>
            <input
              type="text"
              value={btnText}
              onChange={(e) => setBtnText(e.target.value)}
            />
          </p>
          <p>
            <label>Button Link</label>
            <br></br>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </p>
          <p>
            <label>To:</label>
            <br></br>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </p>
          <br></br>
          <button onClick={addNoti} className="w3-button w3-green w3-round">
            {modify ? "Save" : "ADD"}
          </button>
          {modify && (
            <button
              onClick={() => {
                firebase.deleteNotification(key);
                resetFields();
              }}
              className=" w3-margin w3-button w3-red w3-round"
            >
              Delete
            </button>
          )}
        </div>
      )}
      {!edit && (
        <table
          style={{
            margin: 10,
            width: "98%",
          }}
          className="w3-table-all w3-card-4"
        >
          <thead>
            <tr className="w3-deep-orange">
              <th>S.N.</th>
              <th>Key</th>
              <th>Date</th>
              <th>Time</th>
              <th>Text</th>
              <th>image</th>
              <th>Button Text</th>
              <th>Botton Link</th>
              <th>To</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {noti.length > 0 &&
              noti.map((nf) => {
                return (
                  <tr
                    key={nf.userId}
                    className={`${
                      i % 2 === 0 ? "w3-pink" : "w3-white"
                    } w3-hover-blue`}
                  >
                    <td>{i++}</td>
                    <td>{nf.key}</td>
                    <td>{nf.date}</td>
                    <td>{nf.time}</td>
                    <td>{nf.text && nf.text.substring(0, 30)}</td>
                    <td>{nf.image && nf.image.substring(0, 30)}</td>
                    <td>{nf.btnText}</td>
                    <td>{nf.image && nf.link.substring(0, 30)}</td>
                    <td>{nf.to}</td>
                    <td>
                      <span
                        onClick={() => {
                          editNotification(nf);
                        }}
                        className="w3-button w3-small w3-hover-yellow w3-circle"
                      >
                        ✒️
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AllNoti;
