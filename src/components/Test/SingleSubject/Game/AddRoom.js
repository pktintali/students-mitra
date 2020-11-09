import firebase from "../../../firebase";

async function AddRoom(id, userEmail, type, user) {
  // const snapshot = await citiesRef.where("roomid", "==", id).get();
  const gameRef = firebase.db.collection("games").doc(id);

  if (type === "marks") {

    gameRef.collection("players").doc(userEmail).set(
      {
        marks: user,
      },
      { merge: true }
    );
  }

  if (type === "create") {
    gameRef.set(
      {
        host: userEmail,
        roomid: id,
      },
      { merge: true }
    );
  }

  if(type ==="delete"){
    await gameRef.collection('players').doc(userEmail).delete();
  }

  if (type === "addSub") {
    gameRef.set(
      {
        subject: userEmail,
      },
      { merge: true }
    );
  }

  if (type === "p") {
    gameRef.collection("players").doc(userEmail).set(
      {
        name: user,
        id: userEmail,
      },
      { merge: true }
    );
  }

  if(type==="chat"){
    gameRef.collection("chats").doc().set(
      {
        name: user,
        msg: userEmail,
      },
      { merge: true }
    );
  }

  if (type === "marks") {
  }
}

export default AddRoom;
