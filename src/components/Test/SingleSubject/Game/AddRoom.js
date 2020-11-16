import firebase from "../../../firebase";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  var strTime = hours + ':' + minutes +':'+seconds+' '+ ampm;
  return strTime;
}

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
        senderId:firebase.getCurrentUserEmail(),
        time: formatAMPM(new Date())
      },
      { merge: true }
    );
  }

  if (type === "marks") {
  }
}

export default AddRoom;
