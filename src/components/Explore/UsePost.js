import {useState,useEffect} from 'react';
import firebase from "../firebase";

function UsePost() {
    const [posts, setPosta] = useState([]);
  
    useEffect(() => {
      const unsubscribe = firebase
        .db
        .collection("posts")
        .orderBy("key", "desc")
        .onSnapshot((snapshot) => {
          const newItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setPosta(newItems);
        });
  
      return () => unsubscribe();
    }, []);
  
    return posts;
  }

  export default UsePost;