import firebase from "../../../firebase";

async function AddRoom(id, value, type, user) {
  // const snapshot = await citiesRef.where("roomid", "==", id).get();
  const gameRef = firebase.db.collection("games").doc(id);

  if (type === "marks") {

    gameRef.collection("players").doc(value).set(
      {
        marks: user,
      },
      { merge: true }
    );
  }

  if (type === "create") {
    gameRef.set(
      {
        host: value,
        roomid: id,
      },
      { merge: true }
    );
  }

  if(type ==="delete"){
    await gameRef.collection('players').doc(value).delete();
  }

  if (type === "addSub") {
    gameRef.set(
      {
        subject: value,
      },
      { merge: true }
    );
  }

  if (type === "leval") {
    gameRef.set(
      {
        leval: value,
      },
      { merge: true }
    );
  }

  if (type === "p") {
    gameRef.collection("players").doc(value).set(
      {
        name: user,
        id: value,
      },
      { merge: true }
    );
  }

  if(type==="chat"){
    gameRef.collection("chats").doc().set(
      {
        name: user,
        msg: value,
      },
      { merge: true }
    );
  }

  if (type === "marks") {
  }
}

export default AddRoom;
