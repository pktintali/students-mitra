import firebase from "../../../firebase";
async function checkFull(id, type) {
  var val = 0;
  const citiesRef = firebase.db.collection("games");
  const snapshot = await citiesRef.where("roomid", "==", id).get();

  if (snapshot.empty) {
    if (type === "invalid") return 1;
    else return 0;
  }
  if (type == "already") {
    if (snapshot.empty) {
      return 0;
    } else {
      return 1;
    }
  }

  if (type === "full") {
  //   citiesRef.doc(id).collection('players').get().then(snap => {
  //     val = snap.size
  //     alert(val)
  //     return val; // will return the collection size
  //  });
  }

  if (type === "delete") {
    // citiesRef
    //   .doc(id)
    //   .collection("players")
    //   .onSnapshot((msnapshot) => {
    //     if(msnapshot.size==1){
    //       citiesRef.doc(id).delete();
    //     }else{
      citiesRef
      .doc(id).delete();
      //  }
        
      //});
  }

  snapshot.forEach((doc) => {


    if (type === "getHost") {
      val = doc.data().host;
    }
    if(type==="leval"){
      val = doc.data().leval;
    }
    if (type === "getSub") {
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
