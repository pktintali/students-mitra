import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function UseActiveSub(id) {
  const [game, setGames] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("usersData")
      .where("userId", "==", id)
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGames(newItems);
      });

    return () => unsubscribe();
  }, []);

  return game;
}

export default UseActiveSub;