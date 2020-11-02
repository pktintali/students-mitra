import firebase from "../../../firebase";

async function checkFull(id, type) {
  var val = 0;
  const citiesRef = firebase.firestore().collection("games");
  const snapshot = await citiesRef.where("roomid", "==", id).get();

  if (snapshot.empty) {
    if (type === "invalid") return 1;
    else return 0;
  }

  snapshot.forEach((doc) => {
    if (type === "full") {
      if (doc.data().p2 === undefined) {
        val = 1;
      } else if (doc.data().p1 === undefined) val = 2;
      else if (doc.data().p3 === undefined) val = 3;
      else if (doc.data().p4 === undefined) val = 4;
      else val = 0;
    }
    if (type === "already") {
      val = 1;
    }

    if (type == "getHost") {
      val = doc.data().host;
    }

    if (type == "getSub") {
      val = doc.data().subject;
    }
    if (type === "p1") {
      val = doc.data().p1;
    }
    if (type === "p2") {
      val = doc.data().p2;
    }
    if (type === "p3") {
      val = doc.data().p3;
    }
    if (type === "p4") {
      val = doc.data().p4;
    }
  });

  return val;
}

export default checkFull;
