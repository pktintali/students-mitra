import { useState, useEffect } from "react";
import firebase from "../../firebase";

function UseNotifications() {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("notify")
      .orderBy("key", "desc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNoti(newItems);
      });

    return () => unsubscribe();
  }, []);

  return noti;
}

export default UseNotifications;
