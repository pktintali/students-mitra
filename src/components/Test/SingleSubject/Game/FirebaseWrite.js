import React, { useState } from "react";
import firebase from "../../../firebase";

function FirebaseWrite() {
  const [id, setId] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("games")
      .add({
        roomid: id,
      })
      .then(() => {
        setId("");
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h4>Enter Data</h4>
        <div>
          <label>Room Id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </div>
        <button>Join</button>
      </form>
    </>
  );
}

export default FirebaseWrite;
